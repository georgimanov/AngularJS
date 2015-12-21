(function () {
    'use strict';

    function config($routeProvider) {

        var PARTIALS_PREFIX = 'views/partials/';
        var CONTROLLER_AS_VIEW_MODEL = 'vm';

        $routeProvider
            .when('/', {
                templateUrl: PARTIALS_PREFIX + 'home/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/unauthorized', {
                template: '<h1 class="text-center">YOU ARE NOT AUTHORIZED!</h1>'
            })
            .when('/games', {
                templateUrl: PARTIALS_PREFIX + 'games/all-games.html',
                controller: 'GamesController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/games/create', {
                templateUrl: PARTIALS_PREFIX + 'games/create-game.html',
                controller: 'CreateGameController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/games/details/:id/:name', {
                templateUrl: PARTIALS_PREFIX + 'games/game-details.html',
                controller: 'GameDetailsController',
                controllerAs: CONTROLLER_AS_VIEW_MODEL
            })
            .when('/register', {
                templateUrl: PARTIALS_PREFIX + 'identity/register.html',
                controller: 'SignUpCtrl'
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('myApp.services', []);
    angular.module('myApp.directives', []);
    angular.module('myApp.filters', []);
    angular.module('myApp.controllers', ['myApp.services']);
    angular.module('myApp', ['ngRoute', 'ngCookies', 'kendo.directives', 'myApp.controllers', 'myApp.directives', 'myApp.filters']).
        config(['$routeProvider', config])
        .value('toastr', toastr)
        .constant('baseServiceUrl', 'http://spa2014.bgcoder.com');
}());