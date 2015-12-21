(function () {
    'use strict';

    function HomeController(games) {
        var vm = this;

        games.getGames()
            .then(function (publicTrips) {
                vm.trips = publicTrips;
            });
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['statistics', 'games', 'drivers', HomeController])
}());