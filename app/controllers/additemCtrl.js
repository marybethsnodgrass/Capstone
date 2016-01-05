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
            // customDataFactory.createCustomFridgeMin(data);
            // customDataFactory.createCustomFridgeMax(data);
            // console.log("customDataFactory.createCustomFridgeMax(data): ", customDataFactory.createCustomFridgeMax(data));
            customDataFactory.createCustomFoodData(data);
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