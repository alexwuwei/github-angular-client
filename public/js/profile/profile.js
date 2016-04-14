(function() {
  angular.module('profile')
  .controller('ProfileController', ['$http', ProfileController]);

  function ProfileController ($http) {
    const profileRoute = 'https://api.github.com/users/alexwuwei';
    this.profile = [];

    this.getProfile = function() {
      $http.get(profileRoute)
      .then((result) => {
        console.log(result);
        this.profile = result.data
      }, function (err) {
        console.log('error in getting profile stuff');
      });
    };
  }

})();
