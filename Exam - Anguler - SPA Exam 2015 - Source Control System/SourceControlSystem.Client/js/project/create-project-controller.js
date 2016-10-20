(function(){
    'uer strict'

    function CreateProjectController($location, notifier, licenses, projects){
        var vm = this;

        licenses.getLicenses()
            .then(function(licenses){
                vm.licenses = licenses;
            });

        vm.createProject = function(newProject){
            projects.createProject(newProject)
                .then(function(createdProjectId){
                    console.log(createdProjectId);
                    notifier.success('Project successfully created!');
                    $location.path('/projects/' + createdProjectId);
                }, function (error){
                    notifier.error(error);
                })
        }
    }

    angular.module('myApp.controllers')
        .controller('CreateProjectController', ['$location', 'notifier', 'licenses', 'projects', CreateProjectController])
}());