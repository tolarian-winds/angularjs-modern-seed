/*global angular*/

var AppRoutingModule = angular.module('app')
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
        template : '<dashboard></dashboard>'
    });
});

module.exports = AppRoutingModule;