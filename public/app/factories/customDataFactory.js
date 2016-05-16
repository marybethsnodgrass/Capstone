app.factory("customDataFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "momentToStringFactory", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, momentToStringFactory) {

    return {

        createFridgeData: function (dt, data) {
            var customFoodObj = fbObjFactory.foodObj(data.food);
            customFoodObj.state = data.state;
            customFoodObj.food = data.food;
            customFoodObj.dateMax = momentToStringFactory.fridgeMaxDate(dt, data);
            customFoodObj.dateMin = momentToStringFactory.fridgeMinDate(dt, data);
            customFoodObj.storage = "fridge";
            customFoodObj.$save();
            return customFoodObj;
        },
        deleteFoodObj: function (food) {
            var customFoodObj = fbObjFactory.foodObj(food);
            customFoodObj.$remove();
        },

        createFreezerData: function (data) {
            var customFoodObj = fbObjFactory.foodObj(data.food);
            customFoodObj.state = data.state;
            customFoodObj.food = data.food;
            customFoodObj.dateMax = momentToStringFactory.freezerMaxDate(data);
            customFoodObj.dateMin = momentToStringFactory.freezerMinDate(data);
            customFoodObj.storage = "freezer";
            customFoodObj.$save();
            return customFoodObj;
        },

        createCustomUser: function (data) {
            var customUser = fbObjFactory.userObjCreate(data);
            customUser.$save();
            return customUser;
        }
    };
}]);