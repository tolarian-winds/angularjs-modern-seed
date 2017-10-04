var angular = require('angular');

var CoreRoutingModule = angular.module('app.core').config(function($routeProvider) {
  $routeProvider
    .when('/red', {
        template : 'red.htm'
    })
    .when('/green', {
        template : 'green.htm'
    })
    .when('/blue', {
        template : 'blue.htm'
    });
});

module.exports = CoreRoutingModule;