(function() {
  angular.module('repos')
  .controller('RepoController', ['$http', RepoController]);

  function RepoController($http) {
    this.repos = [];
  }
})
