(function(){
    'uer strict'

    function CreateTripController($location, notifier, cities, trips){
        var vm = this;

        cities.getAll()
            .then(function(allCities){
                vm.cities = allCities;
            })

        vm.createTrip = function(newTrip){
            trips.createTrip(newTrip)
                .then(function(createdTrip){
                    notifier.success('Trip successfully created!');
                    $location.path('/trips/details/' + createdTrip.id);
                }, function (error){
                    notifier.error(error);
                })
        }
    }

    angular.module('myApp.controllers')
        .controller('CreateTripController', ['$location', 'notifier', 'cities', 'trips', CreateTripController])
}());