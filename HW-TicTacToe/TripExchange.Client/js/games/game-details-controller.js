(function () { 
    'use strict';

    function GameDetailsController($routeParams) {
        var vm = this;
        vm.id = $routeParams.id; // $routeParams['id']
        vm.name = $routeParams.name;
    }

    angular.module('myApp.controllers')
        .controller('GameDetailsController', ['$routeParams', GameDetailsController])
}());