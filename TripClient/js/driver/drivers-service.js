(function(){
    'use strict';

    function drivers(data){
        var DRIVERS_URL = 'api/drivers';

        function getPublicDrivers() {
            return data.get(DRIVERS_URL);
        }

        function getDriver(id) {
            return data.get(DRIVERS_URL + '/' + id);
        }

        return{
            getPublicDrivers: getPublicDrivers,
            getDriver: getDriver
        }
    }

    angular.module('myApp.services')
        .factory('drivers',['data', drivers]);
}());