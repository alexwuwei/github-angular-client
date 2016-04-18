(function() {
  angular.module('repos')
  .controller('RepoController', ['$http', RepoController]);

  function RepoController($http) {
    const reposRoute = 'https://api.github.com/users/alexwuwei/repos';
    this.repos = [];
    this.stargazers = 0;

    this.getRepos = function () {
      $http.get(reposRoute)
      .then((res) => {
        console.log(res);
        this.repos = res.data;
        this.repos.forEach((repo) => {
          if (repo.stargazers_count) {
            console.log(this.stargazers);
            this.stargazers += repo.stargazers_count;
          }
        })
      }, function(err) {
        console.log('error in getting repos');
      })
    }
  }
})();
