(function () {
    'use strict';

    function GamesController(games, identity) {
        var vm = this;
        vm.identity = identity;
        vm.request = {
            page: 1
        };

        games.getPublicTrips()
            .then(function (publicTrips) { 
                vm.trips = publicTrips;
            });

        }

    angular.module('myApp.controllers')
        .controller('GamesController', ['trips', 'identity', GamesController]);
}());