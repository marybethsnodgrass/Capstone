app.factory("customDataFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "momentToStringFactory", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, momentToStringFactory) {

    return {

        createFridgeData: function (data) {
            var customFoodObj = fbObjFactory.foodObj(data.food);
            customFoodObj.state = data.state;
            customFoodObj.food = data.food;
            customFoodObj.dateMax = momentToStringFactory.fridgeMaxDate(data);
            customFoodObj.dateMin = momentToStringFactory.fridgeMinDate(data);
            customFoodObj.storage = "fridge";
            customFoodObj.$save();
            return customFoodObj;
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