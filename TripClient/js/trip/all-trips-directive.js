(function(){
    'use strict';

    function allTrips(){
        return{
            restrict: 'A',
            templateUrl:'views/partials/trips/all-trips-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('allTrips', [allTrips]);

}());