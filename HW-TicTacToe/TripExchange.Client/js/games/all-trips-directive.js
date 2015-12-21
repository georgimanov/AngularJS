(function() {
    'use strict';

    function allGames() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/all-games-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('allGames', [allGames]);
}());