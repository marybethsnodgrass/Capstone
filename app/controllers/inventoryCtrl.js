app.controller("inventoryCtrl", ["$scope", "fbRefFactory", "$firebaseArray", "moment", function($scope, fbRefFactory, $firebaseArray, moment) {

    $scope.date = new Date();
    $scope.data = $firebaseArray(fbRefFactory.userRef());
    $scope.formatString = function () {
        moment(data.fridgeMax);
        console.log("moment($scope.data.fridgeMax) : ", moment(data.fridgeMax));
    };
}]);