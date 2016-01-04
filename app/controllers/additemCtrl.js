app.controller("additemCtrl", ["$scope", "fbRefFactory", "$firebaseArray", "customDataFactory", "fbObjFactory", "addCtrlFactory", "fridgeMinFactory" ,function($scope, fbRefFactory, $firebaseArray, customDataFactory, fbObjFactory, addCtrlFactory, fridgeMinFactory) {
    $scope.eventSources = [];

    $scope.searchInput = '';

    $scope.$on('date', function(event, dt) {
        console.log(dt);
        $scope.date = dt;
    });

    $scope.data = $firebaseArray(fbRefFactory.foodsRef());

    $scope.addItem = function (data) {
        if (data.fridge === true) {
            customDataFactory.createCustomFridgeMin(data);
        } else {
            console.log("nope, fridge not true");
        }
        if (data.freezer === true) {
            addCtrlPromisesFactory.freezePromise(data);
        } else {
            console.log("nope, freeze not true");
        }
    };
}]);