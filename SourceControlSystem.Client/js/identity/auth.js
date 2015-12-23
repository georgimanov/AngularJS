(function () {
    'use strict';

    function auth($http, $q, identity, authorization, baseServiceUrl) {
        var usersApi = baseServiceUrl + 'api/account'

        //TODO: Correct error messages!

        return {

            signup: function (user) {
                var deferred = $q.defer();

                $http.post(usersApi + '/register', user)
                    .then(function () {
                        deferred.resolve();
                    }, function (response) {
                        var error = response.data.modelState;
                        if (error && error[Object.keys(error)[0]][0]) {
                            error = error[Object.keys(error)[0]][0];
                        }
                        else {
                            error = response.data.message;
                        }

                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            // In the documentation is writter /token and not /api/account/token!!!!
            login: function (user) {
                var deferred = $q.defer();
                user['grant_type'] = 'password';
                $http.post(baseServiceUrl + 'token', 'username=' + user.username + '&password=' + user.password + '&grant_type=password', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                    .then(function (response) {
                        if (response.data["access_token"]) {
                            console.log(response);
                            identity.setCurrentUser(response.data);
                            deferred.resolve(true);
                        }
                        else {
                            deferred.resolve(false);
                        }
                    });

                return deferred.promise;
            },
            logout: function () {
                var deferred = $q.defer();

                var headers = authorization.getAuthorizationHeader();
                $http.post(usersApi + '/logout', {}, { headers: headers })
                    .then(function () {
                        identity.setCurrentUser(undefined);
                        deferred.resolve();
                    });

                return deferred.promise;
            },
            isAuthenticated: function () {
                if (identity.isAuthenticated()) {
                    return true;
                }
                else {
                    return $q.reject('not authorized');
                }
            }
        }
    }

    angular.module('myApp.services')
        .factory('auth', ['$http', '$q', 'identity', 'authorization', 'baseServiceUrl', auth]);
}());