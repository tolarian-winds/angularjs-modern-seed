/*global angular*/

function AppController() {
  var ctrl = this;
  
  ctrl.title = 'App Component';
}

var AppComponent = angular.module('app').component('app', {
  templateUrl: 'app.component.html',
  controller: [AppController]
});

module.exports = AppComponent;