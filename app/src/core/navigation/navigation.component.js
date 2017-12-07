/*global angular*/
function NavigationController() {
  var ctrl = this;
  
  ctrl.title = 'Navigation Component';
}

var NavigationComponent = angular.module('app.core').component('navigation', {
  templateUrl: 'core/navigation/navigation.component.html',
  controller: [NavigationController]
});

module.exports = NavigationComponent;