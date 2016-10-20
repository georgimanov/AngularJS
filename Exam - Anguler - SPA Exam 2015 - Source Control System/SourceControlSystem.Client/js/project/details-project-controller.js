(function(){
    'uer strict'

    function DetailsProjectController($routeParams, projects, identity, commits){
        var vm = this;

        vm.identity = identity;
        vm.id = $routeParams.id; // $routeParams['id'];

        projects.getProject(vm.id)
            .then(function (project){
                vm.project = project;
            });

        commits.getCommitsByPojectId(vm.id)
            .then(function (commits){
                vm.commits = commits;
            });

        projects.getCollaboratorByProject(vm.id)
            .then(function (collaborators){
                console.log(collaborators);
                vm.collaborators = collaborators;
            });
    }

    angular.module('myApp.controllers')
        .controller('DetailsProjectController', ['$routeParams', 'projects', 'identity', 'commits', DetailsProjectController])
}());