(function(){
    'uer strict'

    function AddCollaboratorProjectController($location, $routeParams, notifier, projects){
        var vm = this;
        vm.projectId = $routeParams.id;

        vm.addCollaborator = function(newCollaborator){
            projects.addCollaborator(vm.projectId, new String(newCollaborator.Username))
                .then(function(addedCollaborator){
                    console.log(addedCollaborator);
                    notifier.success('Collaborator successfully added!');
                    $location.path('/projects/' + vm.projectId);
                }, function (error){
                    notifier.error(error);
                })
        }
    }

    angular.module('myApp.controllers')
        .controller('AddCollaboratorProjectController', ['$location', '$routeParams', 'notifier', 'projects', AddCollaboratorProjectController])
}());