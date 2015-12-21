(function(){
    'use strict';

    function games(data) {
        var TRIPS_URL = 'api/games';

        function getGames() {
            return data.get(TRIPS_URL);
        }

        function createGame(trip) {
            return data.post(TRIPS_URL, trip);
        }

        return {
            getGames: getGames,
            createGame: createGame,
        }
    }

    angular.module('myApp.services')
        .factory('trips', ['data', games])
}());