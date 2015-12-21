(function(){
    'use strict';

    function allDrivers(){
        return{
            restrict: 'A',
            templateUrl:'views/partials/drivers/all-drivers-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('allDrivers', [allDrivers]);

}());