(function(){
    'uer strict'

    function HomeController(statistics, projects, commits){
        var vm = this;

        statistics.getStats()
            .then(function (stats) {
                vm.stats = stats;
            });

        projects.getPublicProjects()
            .then(function (projects){
                vm.projects = projects;
            });

        commits.getPublicCommits()
            .then(function (commits){
                vm.commits = commits;
            });
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['statistics', 'projects', 'commits', HomeController])
}());