'use strict';

app.controller('AdminAddsController',
    function ($scope, $routeParams, $location, townsService, categoriesService, adminServices, notifyService, pageSize, defaultImg) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize,
            'Status': $routeParams.id
        };

        $scope.defaultImg = defaultImg;

        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        if ($routeParams.id == 'all') {
            $scope.adsParams.Status = null;
        }


        $scope.reloadAdminAds = function() {
            userService.getAdminAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user ads", err);
                }
            );
        };
        $scope.getAdminAds();
    }
);