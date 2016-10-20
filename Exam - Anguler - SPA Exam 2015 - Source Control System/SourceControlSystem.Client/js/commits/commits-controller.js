(function(){
    'uer strict'

    function CommitsController(commits){
        var vm = this;

        commits.getPublicCommits()
            .then(function (commits) {
                vm.commits = commits;
            });
    }

    angular.module('myApp.controllers')
        .controller('CommitsController', ['commits', CommitsController])
}());