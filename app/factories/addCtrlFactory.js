app.factory("addCtrlFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "fridgeMinFactory", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, fridgeMinFactory) {

    return {

        addFridgeMin: function (data) {
            var fridgeMinObjVar = fbObjFactory.fridgeMinObj(data.food);
            fridgeMinObjVar.fridgeMinDate = fridgeMinFactory.fridgeMinDate(data);
            return fridgeMinObjVar;
        },

        addFridgeMax: function (data) {
            var fridgeMaxObjVar = fbObjFactory.fridgeMaxObj(data.food);
            fridgeMaxFactory.fridgeMaxDate(data);
            fridgeMaxObjVar.fridgeMaxDate = fridgeMaxDate;
            return fridgeMaxObjVar;
        }
    };
}]);