app.factory("customDataFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "momentToStringFactory", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, momentToStringFactory) {

    return {

        createCustomFoodData: function (data) {
            var customFoodObj = fbObjFactory.foodObj(data.food);
            customFoodObj.state = data.state;
            customFoodObj.food = data.food;
            customFoodObj.fridgeMax = momentToStringFactory.fridgeMaxDate(data);
            customFoodObj.fridgeMin = momentToStringFactory.fridgeMinDate(data);
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