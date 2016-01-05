app.factory("customDataFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "fridgeMinFactory", "fridgeMaxFactory", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, fridgeMinFactory, fridgeMaxFactory) {

    return {
        createCustomFridgeMin: function (data) {
            var customFridgeMin = fbObjFactory.fridgeMinObj(data.food);
            customFridgeMin.$loaded()
            .then(function(data) {
                customFridgeMin.date = fridgeMinFactory.fridgeMinDate(data);
                customFridgeMin.month = fridgeMinFactory.fridgeMinMonth(data);
                customFridgeMin.year = fridgeMinFactory.fridgeMinYear(data);
            }).then(function(){
                customFridgeMin.$save();  
            });
            console.log("customFridgeMin: ", customFridgeMin);
            return customFridgeMin;
        },

        createCustomFridgeMax: function (data) {
            var customFridgeMax = fbObjFactory.fridgeMaxObj(data.food);
            customFridgeMax.$loaded()
            .then(function(data) {
                customFridgeMax.date = fridgeMaxFactory.fridgeMaxDate(data);
                customFridgeMax.month = fridgeMaxFactory.fridgeMaxMonth(data);
                customFridgeMax.year = fridgeMaxFactory.fridgeMaxYear(data);
            }).then(function(){
            customFridgeMax.$save();
            });
            return customFridgeMax;
        },

        createCustomFoodData: function (data) {
            var customFoodObj = fbObjFactory.foodObj(data.food);
            customFoodObj.state = data.state;
            customFoodObj.food = data.food;
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