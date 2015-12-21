(function(){
    'uer strict'

    function DetailsTripsController($routeParams, trips, identity){
        var vm = this;

        vm.identity = identity;
        vm.id = $routeParams.id; // $routeParams['id'];

        trips.getTrip($routeParams.id)
            .then(function (trip){
                vm.trip = trip;
            });
    }

    angular.module('myApp.controllers')
        .controller('DetailsTripsController', ['$routeParams', 'trips', 'identity', DetailsTripsController])
}());