app.factory("customDataFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "addCtrlFactory", "fridgeMinFactory", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, addCtrlFactory, fridgeMinFactory) {

    return {
        createCustomFridgeMin: function (data) {
            var customFridgeMin = fbObjFactory.fridgeMinObj(data.food);
            customFridgeMin.date = fridgeMinFactory.fridgeMinDate(data);
            customFridgeMin.month = fridgeMinFactory.fridgeMinMonth(data);
            customFridgeMin.year = fridgeMinFactory.fridgeMinYear(data);
            customFridgeMin.day = fridgeMinFactory.fridgeMinDay(data);
            customFridgeMin.$save();
            console.log("customFridgeMin: ", customFridgeMin);
            return customFridgeMin;

        },

        createCustomFreezeData: function (data) {
            var customDataObj = fbObjFactory.foodObj(data.food);
            customDataObj.working = "working";
            customDataObj.state = data.state;
            customDataObj.freezeMinDate = findFreezeMin(data);
            customDataObj.freezeMaxMoment = findFreezeMin(data);
            customDataObj.$save();
            console.log("customDataObj: ", customDataObj);
            return customDataObj;
        }
    };
}]);
            // var customDataObj = fbObjFactory.foodObj(data.food);
            // customDataObj.working = "working";
            // customDataObj.state = data.state;
            // customDataObj.fridgeMaxMoment = addCtrlFactory.findFridgeMax(data);
            // customDataObj.$save();
            // console.log("customDataObj: ", customDataObj);
            // return customDataObj;