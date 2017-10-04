var angular = require('angular');
require('angular-route');

require('./core/core.module.js');

var AppModule = angular.module('app', [
  'ngRoute',
  'app.core'
]);

require('./app.component.js');
require('./app-routing.module.js');
  
module.exports = AppModule;

