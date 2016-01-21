app.controller("additemCtrl", ["$scope", "fbRefFactory", "$firebaseArray", "customDataFactory", "fbObjFactory" ,function($scope, fbRefFactory, $firebaseArray, customDataFactory, fbObjFactory) {
    $scope.eventSources = [];

    $scope.searchInput = '';

    $scope.$on('date', function(event, dt) {
        console.log(dt);
        $scope.date = dt;
    });

    $scope.data = $firebaseArray(fbRefFactory.foodsRef());

    $scope.addItem = function (data) {
        if (data.fridge === true) {
            customDataFactory.createFridgeData(data);
        } else {
            console.log("nope, fridge not true");
        }
        if (data.freezer === true) {
            customDataFactory.createFreezerData(data);
        } else {
            console.log("nope, freeze not true");
        }
    };
}]);