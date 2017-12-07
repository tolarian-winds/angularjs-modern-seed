/*global angular*/

var CoreModule = angular.module('app.core', []);

/* require CoreModule child components here */
require('./dashboard/dashboard.component.js');
require('./navigation/navigation.component.js');

/* require CoreModule routing module here */
require('./core-routing.module.js');

module.exports = CoreModule;
