var app = angular.module("capstoneApp", ["ngRoute", "firebase"]);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/partials/login.html',
        controller: 'loginCtrl'
        })
        .when('/home', {
        templateUrl: 'app/partials/home.html',
        controller: 'homeCtrl'
      })
        .otherwise('/');
  }]);