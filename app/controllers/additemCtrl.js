app.controller("additemCtrl", ["$scope", "fbRefFactory", "$firebaseArray", "convertDDay", "moment" ,function($scope, fbRefFactory, $firebaseArray, convertDDay, moment) {
    $scope.eventSources = [];

    $scope.searchInput = '';

    $scope.$on('date', function(event, dt) {
        console.log(dt);
        $scope.date = dt;
    });

    var findFridgeMin = function (data) {
        var fridgeDateMin = convertDDay.findDateMin(dt, data.fridgemin);
        console.log("fridgedatemin", fridgeDateMin);
        return fridgeDateMin;
    };

    var postFridgeMin = function (data) {
        var arrayToAddRef = fbRefFactory.usersRefGet(data.foods);
        console.log("arrayToAddRef: ", arrayToAddRef);
        var arrayToAdd = $firebaseArray(arrayToAddRef);
        console.log("arrayToAdd", arrayToAdd);
        arrayToAdd.$add({fridgemin: findFridgeMin()});
    };

    var findFridgeMax = function (data) {
        var fridgeDateMax = convertDDay.findDateMax(dt, data.fridgemax);
        console.log("fridgedatemax", fridgeDateMax);
        return fridgeDateMax;
    };

    var findFreezeMin = function (data) {
        var freezeDateMin = convertDDay.findDateMin(dt, data.freezemin);
        console.log("freezedatemin", freezeDateMin);
        return freezeDateMin;
    };

    var findFreezeMax = function (data) {
        var freezeDateMax = convertDDay.findDateMax(dt, data.freezemax);
        console.log("freezedatemax", freezeDateMax);
        return freezeDateMax;
    };

    $scope.data = $firebaseArray(fbRefFactory.foodsRefGet());

    $scope.addItem = function (data) {
        if (data.fridge === true) {
            findFridgeMin(data);
            findFridgeMax(data);
            postFridgeMin(data);
        } else {
            console.log("nope, fridge not true");
        }
        if (data.freezer === true) {
            findFreezeMin(data);
            findFreezeMax(data);
        } else {
            console.log("nope, freeze not true");
        }
    };
}]);