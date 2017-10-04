var angular = require('angular');
  
var CoreModule = angular.module('app.core', []);
  
require('./dashboard/dashboard.component.js');
require('./navigation/navigation.component.js');
require('./core-routing.module.js');

module.exports = CoreModule;
