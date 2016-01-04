app.factory("customDataFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "fridgeMinFactory", "fridgeMaxFactory", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, fridgeMinFactory, fridgeMaxFactory) {

    return {
        createCustomFridgeMin: function (data) {
            var customFridgeMin = fbObjFactory.fridgeMinObj(data.food);
            customFridgeMin.date = fridgeMinFactory.fridgeMinDate(data);
            customFridgeMin.month = fridgeMinFactory.fridgeMinMonth(data);
            customFridgeMin.year = fridgeMinFactory.fridgeMinYear(data);
            customFridgeMin.$save();
            return customFridgeMin;
        },

        createCustomFridgeMax: function (data) {
            var customFridgeMax = fbObjFactory.fridgeMaxObj(data.food);
            customFridgeMax.date = fridgeMaxFactory.fridgeMaxDate(data);
            customFridgeMax.month = fridgeMaxFactory.fridgeMaxMonth(data);
            customFridgeMax.year = fridgeMaxFactory.fridgeMaxYear(data);
            customFridgeMax.$save();
            return customFridgeMax;
        },

        createCustomFoodData: function (data) {
            var customFoodObj = fbObjFactory.foodObj(data.food);
            customFoodObj.state = data.state;
            customFoodObj.$save();
            return customFoodObj;
        }
    };
}]);