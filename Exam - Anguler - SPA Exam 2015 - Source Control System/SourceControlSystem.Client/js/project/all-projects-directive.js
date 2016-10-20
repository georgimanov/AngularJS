(function(){
    'use strict';

    function allProjects(){
        return{
            restrict: 'A',
            templateUrl:'views/partials/projects/all-projects-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('allProjects', [allProjects]);

}());