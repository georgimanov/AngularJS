'use strict';

app.controller('UserAdsController',
    function ($scope, $routeParams, $location, townsService, userService, notifyService) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize,
            'Status': $routeParams.id
        };

        $scope.defaultImg = defaultImg;

        $scope.towns = townsService.getTowns();

        if ($routeParams.id == 'all') {
            $scope.adsParams.Status = null;
        }


        $scope.reloadUserAds = function() {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user ads", err);
                }
            );
        };

        $scope.reloadUserAds();
    }
);