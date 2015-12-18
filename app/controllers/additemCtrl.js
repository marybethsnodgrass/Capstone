app.controller("additemCtrl", ["$scope", "Auth", "$firebaseArray", "convertDDay", "moment" ,function($scope, Auth, $firebaseArray, convertDDay, moment) {
    $scope.eventSources = [];

    $scope.searchInput = '';

    var ref = new Firebase("https://perishibles.firebaseio.com/foods/");

    $scope.$on('date', function(event, dt) {
        console.log(dt);
        $scope.date = dt;
    });

    var findFridgeMin = function (data) {
        var fridgeDateMin = convertDDay.findDateMin(dt, data.fridgemin);
        console.log("fridgedatemin", fridgeDateMin);
        return fridgeDateMin;
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

    $scope.data = $firebaseArray(ref);

    $scope.addItem = function (data) {
        if (data.fridge === true) {
            findFridgeMin(data);
            findFridgeMax(data);
        } else {
            console.log("nope, fridge not true");
        }
        if (data.freezer === true) {
            findFreezeMin(data);
            findFreezeMax(data);
            console.log("freezedatemin", freezeDateMin);
        } else {
            console.log("nope, freeze not true");
        }
    };

}]);