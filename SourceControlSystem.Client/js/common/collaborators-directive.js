(function(){
    'use strict';

    function collaborators(){
        return{
            restrict: 'A',
            templateUrl:'views/partials/common/collaborators-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('collaborators', [collaborators]);

}());