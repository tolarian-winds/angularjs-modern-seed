var angular = require('angular');
  
function AppController() {
  var ctrl = this;
  
  ctrl.title = 'App Title';
}

var AppComponent = angular.module('app').component('app', {
  templateUrl: 'app.component.html',
  controller: [AppController]
});

module.exports = AppComponent;