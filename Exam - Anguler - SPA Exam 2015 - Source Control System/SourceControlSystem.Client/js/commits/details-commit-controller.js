(function(){
    'uer strict'

    function DetailsCommitController($routeParams, commits, identity){
        var vm = this;

        vm.identity = identity;
        vm.id = $routeParams.id; // $routeParams['id'];

        commits.getCommit($routeParams.id)
            .then(function (commit){
                vm.commit = commit;
            });
    }

    angular.module('myApp.controllers')
        .controller('DetailsCommitController', ['$routeParams', 'commits', 'identity', DetailsCommitController])
}());