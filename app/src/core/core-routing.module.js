/*global angular*/

var CoreRoutingModule = angular.module('app.core').config(function($routeProvider) {
  $routeProvider
    .when('/core/route1', {
        template : '<div>Core Route 1 template.</div>'
    })
    .when('/core/route2', {
        template : '<div>Core Route 2 template.</div>'
    })
    .when('/core/route3', {
        template : '<div>Core Route 3 template.</div>'
    });
});

module.exports = CoreRoutingModule;