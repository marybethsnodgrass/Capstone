app.controller("additemCtrl", ["$scope", "fbRefFactory", "$firebaseArray", "uidFactory", "convertDDay", "moment" ,function($scope, fbRefFactory, $firebaseArray, uidFactory, convertDDay, moment) {
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
        var uid = uidFactory.getUID();
        console.log("uid: ", uid);
        var userRef = new Firebase(fbRefFactory.usersRef() + "/" + uid);
        console.log("userRef: ", userRef);
        var userArray = $firebaseArray(userRef);
        console.log("userArray: ", userArray);
        var food = data.food;
        console.log("food: ", food);
        var foodRef = new Firebase(fbRefFactory.foodsRefGet() + "/" + food);
        console.log("foodRef: ", foodRef);
        var foodArray = $firebaseArray(foodRef);
        console.log("foodArray: ", foodArray);
        userArray.$add(foodArray);
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