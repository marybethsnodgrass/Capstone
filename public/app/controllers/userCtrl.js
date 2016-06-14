'use strict';
app.controller("userCtrl", ["$scope", "$http", "$timeout","$location", function($scope, $http, $timeout, $location) {

    $scope.message = null;
    $scope.error = null;
    $scope.email = '';
    $scope.password = '';
    let newUser = {};

// create a new user locally save it remotely
    $scope.createUser = function () {
        newUser = {
            email: $scope.email,
            password: $scope.password,
            verify: $scope.verify
        };
        $http.post('/user/create', JSON.stringify(newUser))
            .success(function (data, status, headers) {
                console.log(status);
                console.log("$scope.userType", $scope.userType);
                    $location.path('/login');
                // if ($scope.userType === 'group') {
                //     $location.path('/groupRegister');
                // } else if ($scope.userType === 'driver') {
                //     $location.path('/driverRegister');
                // } else {
                //     $location.path('/home');
                // }
              })
            .error(function (data, status, header) {
                console.log(status);
              });
        newUser = {};
    };

}]);
