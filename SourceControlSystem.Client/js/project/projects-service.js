(function(){
    'use strict';

    function projects(data){
        var PROJECTS_URL = 'api/projects';

        function getPublicProjects() {
            return data.get(PROJECTS_URL);
        }

        function getProject(id) {
            return data.get(PROJECTS_URL + '/' + id);
        }

        function filterProjects(filters){
            return data.get(PROJECTS_URL + '/all', filters);
        }

        function createProject(newProject){
            return data.post(PROJECTS_URL, newProject);
        }

        function addCollaborator(projectId, email){
            return data.put(PROJECTS_URL + '/' + projectId, email);
        }

        function getCollaboratorByProject(projectId){
            return data.get(PROJECTS_URL + '/collaborators/' + projectId);
        }

        return{
            getPublicProjects: getPublicProjects,
            getProject: getProject,
            filterProjects: filterProjects,
            createProject: createProject,
            addCollaborator: addCollaborator,
            getCollaboratorByProject: getCollaboratorByProject
        }
    }

    angular.module('myApp.services')
        .factory('projects',['data', projects]);
}());