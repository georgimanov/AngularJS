(function(){
    'uer strict'

    function CreateCommitController($location,$routeParams, notifier, commits){
        var vm = this;
        vm.projectId = $routeParams.id;

        vm.createCommit = function(newCommit){
            commits.createCommit(newCommit)
                .then(function(createCommitId){
                    console.log(createCommitId);
                    notifier.success('Commit successfully created!');
                    $location.path('/projects/' + vm.projectId);
                }, function (error){
                    notifier.error(error);
                })
        }
    }

    angular.module('myApp.controllers')
        .controller('CreateCommitController', ['$location', '$routeParams', 'notifier', 'commits', CreateCommitController])
}());