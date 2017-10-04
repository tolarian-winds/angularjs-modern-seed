var angular = require('angular');
  
function DashboardController() {
  var ctrl = this;
  
  ctrl.title = 'Dashboard';
}

var DashboardComponent = angular.module('app.core').component('dashboard', {
  templateUrl: 'core/dashboard/dashboard.component.html',
  controller: [DashboardController]
});

module.exports = DashboardComponent;
