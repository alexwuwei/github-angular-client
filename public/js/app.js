require(__dirname + '/../../bower_components/angular/angular.js');
require(__dirname + '/../css/normalize.css');
require(__dirname + '/../css/main.css');
require(__dirname + '/../css/animate.css');
require(__dirname + '/profile/profile-module.js');
require(__dirname + '/profile/profile.js');
require(__dirname + '/repos/repos-module.js');
require(__dirname + '/repos/repos.js');

(function() {
  angular.module('github-app', [
    'profile',
    'repos'
  ]);
})();
