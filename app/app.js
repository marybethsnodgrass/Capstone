var app = angular.module("capstoneApp", ["ngRoute", "firebase"]);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/partials/login.html',
        controller: 'loginCtrl'
        })
        .otherwise('/');
  }]);