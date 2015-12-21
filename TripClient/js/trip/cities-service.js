(function(){
    'use strict';

    function cities(data){
        var TRIPS_URL = 'api/cities';

        function getAll() {
            return data.get(TRIPS_URL);
        }

        return{
            getAll: getAll
        }
    }

    angular.module('myApp.services')
        .factory('cities',['data', cities]);
}());