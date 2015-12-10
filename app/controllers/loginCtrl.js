app.controller("loginCtrl", ["$scope", "Auth",function($scope, Auth) {

    $scope.login = function() {
        $scope.message = null;
        $scope.error = null;

        Auth.$authWithPassword({
            email: $scope.email,
            password: $scope.password
        }).then(function(authData) {
            $scope.message = "Logged in as:" + authData.uid;
            console.log("Logged in as:", authData.uid);
        }).catch(function() {
            $scope.error = "There was an error registering your user.";
        });
    };

    $scope.createUser = function() {
        $scope.message = null;
        $scope.error = null;

        Auth.$createUser({
            email: $scope.email,
            password: $scope.password
        }).then(function(userData) {
            $scope.message = "User created with uid: " + userData.uid;
        }).catch(function() {
            $scope.error = "There was an error registering your user.";
        });
    };

}]);