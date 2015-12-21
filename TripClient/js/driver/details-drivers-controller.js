(function(){
    'uer strict'

    function DetailsDriversController($routeParams, drivers){
        var vm = this;

        drivers.getDriver($routeParams.id)
            .then(function (driver) {
                vm.driver = driver;
            });
    }

    angular.module('myApp.controllers')
        .controller('DetailsDriversController', ['$routeParams', 'drivers', DetailsDriversController])
}());