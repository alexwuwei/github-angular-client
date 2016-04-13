require(__dirname + '/../../bower_components/angular/angular.js');
require(__dirname + '/../css/normalize.css');
require(__dirname + '/../css/main.css');
require(__dirname + '/../css/animate.css');
// require(__dirname + '/customers/customer-module.js');
// require(__dirname + '/customers/customers.js');
// require(__dirname + '/products/products-module.js');
// require(__dirname + '/products/products.js');

(function() {
  angular.module('github-app', [
    'profile',
    'repos'
  ]);
})();
