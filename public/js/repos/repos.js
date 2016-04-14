(function() {
  angular.module('repos')
  .controller('RepoController', ['$http', RepoController]);

  function RepoController($http) {
    const reposRoute = 'https://api.github.com/users/alexwuwei/repos';
    this.repos = [];

    this.getRepos = function () {
      $http.get(reposRoute)
      .then((res) => {
        console.log(res);
        this.repos = res.data;
      }, function(err) {
        console.log('error in getting repos');
      })
    }
  }
})();
