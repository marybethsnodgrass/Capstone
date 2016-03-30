var app = angular.module("capstoneApp", ["ngRoute", "firebase", "ui.bootstrap", "ui.calendar", "angularMoment"]);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/partials/login.html',
            controller: 'loginCtrl'
        })
        .when('/inventory', {
            templateUrl: 'app/partials/inventory.html',
            controller: 'inventoryCtrl'
        })
        .when('/additem', {
            templateUrl: 'app/partials/additem.html',
            controller: 'additemCtrl'
        })
        .otherwise('/');
  }]);