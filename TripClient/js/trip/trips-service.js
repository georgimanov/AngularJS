(function(){
    'use strict';

    function trips(data){
        var TRIPS_URL = 'api/trips';

        function getPublicTrips() {
            return data.get(TRIPS_URL);
        }

        function createTrip(newTrip){
            return data.post(TRIPS_URL, newTrip);
        }

        function getTrip(id){
            return data.get(TRIPS_URL + "/" + id);
        }

        function filterTrips(filters){
            return data.get(TRIPS_URL, filters);
        }

        return{
            getPublicTrips: getPublicTrips,
            createTrip: createTrip,
            getTrip: getTrip,
            filterTrips: filterTrips
        }
    }

    angular.module('myApp.services')
        .factory('trips',['data', trips]);
}());