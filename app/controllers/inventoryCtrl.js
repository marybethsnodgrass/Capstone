app.controller("inventoryCtrl", ["$scope", "fbRefFactory", "$firebaseArray", "moment", "customDataFactory", "fbObjFactory", function($scope, fbRefFactory, $firebaseArray, moment, customDataFactory, fbObjFactory) {

    $scope.date = new Date();
    $scope.data = $firebaseArray(fbRefFactory.userRef());
    $scope.formatString = function () {
        moment(data.fridgeMax);
        console.log("moment($scope.data.fridgeMax) : ", moment(data.fridgeMax));
    };

    $scope.deleteFood = function (food) {
        customDataFactory.deleteFoodObj(food);
    };
}]);