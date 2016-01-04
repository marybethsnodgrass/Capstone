app.controller("additemCtrl", ["$scope", "fbRefFactory", "fbObjFactory", "$firebaseArray", "$firebaseObject", "uidFactory", "convertDDay", "moment" ,function($scope, fbRefFactory, fbObjFactory, $firebaseArray, $firebaseObject, uidFactory, convertDDay, moment) {
    $scope.eventSources = [];

    $scope.searchInput = '';

    $scope.$on('date', function(event, dt) {
        console.log(dt);
        $scope.date = dt;
    });

    var findFridgeMin = function (data) {
        var fridgeDateMin = convertDDay.findDateMin(dt, data.fridgemin);
        console.log("fridgedatemin", fridgeDateMin);
        var minFridgeDate = moment(fridgeDateMin).format("MM/DD/YYYY");
        console.log("minFridgeDate: ", minFridgeDate);
        return minFridgeDate;
    };

    var createCustomData = function (data) {
        var customDataObj = fbObjFactory.foodObj(data.food);
        customDataObj.working = "working";
        customDataObj.state = data.state;
        // customDataObj.fridgeMinDate = findFridgeMin();
        // customDataObj.fridgeMaxMoment = findFridgeMin();
        customDataObj.$save();
        console.log("customDataObj: ", customDataObj);
        return customDataObj;
    };

    // var postFridgeMin = function (data) {
    //     var food = data.food;
    //     fbObjFactory.foodObj(food);
    //     // createCustomData();
    // };

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

    $scope.data = $firebaseArray(fbRefFactory.foodsRef());

    $scope.addItem = function (data) {
        if (data.fridge === true) {
            // findFridgeMin(data)
            // .then
            //     (function (data) {
            //     findFridgeMax(data);
            // }).then
            //     (function (data) {
            //     createCustomData(data);
            // }).then
            //     (function (data) {
            //     postFridgeMin(data);
            // });
            findFridgeMin(data);
            findFridgeMax(data);
            createCustomData(data);
            // postFridgeMin(data);
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