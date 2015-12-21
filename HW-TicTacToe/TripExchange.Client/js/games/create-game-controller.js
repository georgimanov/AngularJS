(function () {
    'use strict';

    function CreateGameController($location, games) {
        var vm = this;

        vm.createGame = function (newGame) {
            games.createGame(newGame)
                .then(function (createdGame) {
                    $location.path('/games/details/' + createdGame.id);
                });
        }
    }

    angular.module('myApp.controllers')
        .controller('CreateGameController', ['$location', 'trips', CreateGameController]);
}());