(function(){
    'use strict';

    function stats(){
        return{
            templateUrl:'views/partials/common/stats-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('stats', [stats]);

}());