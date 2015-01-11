'use strict';

app.controller('UserAdsController',
    function ($scope, $routeParams, $location, townsService, categoriesService, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize,
            'Status': $routeParams.id
        };

        $scope.categories = categoriesService.getCategories();
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