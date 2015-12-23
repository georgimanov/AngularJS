(function(){
    'use strict';

    function commitDetails(){
        return{
            restrict: 'A',
            templateUrl:'views/partials/commits/commit-details-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('commitDetails', [commitDetails]);

}());