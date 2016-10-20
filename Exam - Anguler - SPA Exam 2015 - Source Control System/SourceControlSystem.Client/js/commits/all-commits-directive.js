(function(){
    'use strict';

    function allCommits(){
        return{
            restrict: 'A',
            templateUrl:'views/partials/commits/all-commits-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('allCommits', [allCommits]);

}());