'use strict';
app.controller("userCtrl", ["$scope", "$http", "$timeout","$location", function($scope, $http, $timeout, $location) {

    $scope.email = '';
    $scope.password = '';
    $scope.verify = '';

    let newUser = {};

    $scope.createUser = function () {
        newUser = {
            email: $scope.email,
            password: $scope.password,
            verify: $scope.verify
            };
        $http.post('/user/create', JSON.stringify(newUser))
            .success(function (data, status, headers) {
                console.log(status);
                $location.path('/login');
            })
            .error(function (data, status, header) {
                console.log(status);
                alert(status);
              });
        newUser = {};
    };
}]);
