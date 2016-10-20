(function(){
    'uer strict'

    function LicensesController(licenses){
        var vm = this;

        licenses.getLicenses()
            .then(function (licenses) {
                vm.licenses = licenses;
            });
    }

    angular.module('myApp.controllers')
        .controller('LicensesController', ['licenses', LicensesController])
}());