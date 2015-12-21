(function(){
    'uer strict'

    function DriversController(drivers){
        var vm = this;

        drivers.getPublicDrivers()
            .then(function (drivers) {
                vm.drivers = drivers;
            });
    }

    angular.module('myApp.controllers')
        .controller('DriversController', ['drivers', DriversController])
}());