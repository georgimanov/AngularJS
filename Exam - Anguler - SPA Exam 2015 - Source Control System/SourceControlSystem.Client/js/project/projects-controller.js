(function(){
    'uer strict'

    function ProjectsController(projects, licenses, identity){
        var vm = this;
        vm.identity = identity;

        vm.request = {
            Page: 1,
            PageSize: 10
        };

        vm.prevPage = function(){
            if(vm.request.Page == 1){
                return;
            }

            vm.request.Page--;
            vm.filterProjects();
        };

        vm.nextPage = function () {
            if (!vm.projects || vm.projects.length == 0) {
                return;
            }

            vm.request.Page++;
            vm.filterProjects();
        };

        vm.filterProjects = function(){
            projects.filterProjects(vm.request)
                .then(function(filteredProjects){
                    vm.projects = filteredProjects;
                })
        };

        projects.getPublicProjects()
            .then(function (projects) {
                vm.projects = projects;
            });

        // TODO: Fix auth?
        licenses.getLicenses()
            .then(function (licenses) {
                vm.licenses = licenses;
            });

        projects.filterProjects();
    }

    angular.module('myApp.controllers')
        .controller('ProjectsController', ['projects', 'licenses', 'identity',ProjectsController])
}());