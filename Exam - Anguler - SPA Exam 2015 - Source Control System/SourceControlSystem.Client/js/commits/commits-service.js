(function(){
    'use strict';

    function commits(data){
        var COMMITS_URL = 'api/commits';

        function getPublicCommits() {
            return data.get(COMMITS_URL);
        }

        function getCommit(id) {
            return data.get(COMMITS_URL + '/' + id);
        }

        function createCommit(newCommit){
            return data.post(COMMITS_URL, newCommit);
        }


        function getCommitsByPojectId(projectId){
            return data.get(COMMITS_URL + '/byproject/' + projectId );
        }

        return{
            getPublicCommits: getPublicCommits,
            getCommit: getCommit,
            createCommit: createCommit,
            getCommitsByPojectId: getCommitsByPojectId
        }
    }

    angular.module('myApp.services')
        .factory('commits',['data', commits]);
}());