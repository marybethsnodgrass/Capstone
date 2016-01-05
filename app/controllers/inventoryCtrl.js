app.controller("inventoryCtrl", ["$scope", "fbRefFactory", "$firebaseArray", function($scope, fbRefFactory, $firebaseArray) {

    $scope.date = new Date();
    $scope.data = $firebaseArray(fbRefFactory.userRef());

}]);