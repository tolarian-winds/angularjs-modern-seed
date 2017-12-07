/*global angular*/

/* require AppModule dependencies here before injection */
require('angular-route');
require('./core/core.module.js');

var AppModule = angular.module('app', [
  'ngRoute',
  'app.core'
]);

/* require AppModule child components here */
require('./app.component.js');

/* require AppModule routing module here */
require('./app-routing.module.js');

module.exports = AppModule;

