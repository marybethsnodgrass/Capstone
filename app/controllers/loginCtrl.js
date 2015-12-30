app.controller("loginCtrl", ["$scope", "fbRefFactory", "uidFactory", "$location" ,function($scope, fbRefFactory, uidFactory, $location) {

    $scope.login = function() {
        $scope.message = null;
        $scope.error = null;

        fbRefFactory.authRefGet().$authWithPassword({
            email: $scope.email,
            password: $scope.password
        }).then(function(authData) {
            uidFactory.setUID(authData);
            console.log("authData:", authData);
            $location.path("/inventory");
        }).catch(function() {
            $scope.error = "There was an error registering your user.";
        });
    };

    $scope.createUser = function() {
        $scope.message = null;
        $scope.error = null;
        $scope.success = false;

        fbRefFactory.authRefGet().$createUser({
            email: $scope.email,
            password: $scope.password
        }).then(function(userData) {
            fbRefFactory.userRefCreate(userData);
            $location.path("/inventory");
        }).catch(function() {
            $scope.error = "There was an error registering your user.";
        });
    };

}]);