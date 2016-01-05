app.factory("momentToStringFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "moment", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, moment) {

    return {

        fridgeMaxDate: function (data) {
            var fridgeDateMax = convertDDay.findDateMax(dt, data.fridgemax);
            var fridgeMaxISO = moment(fridgeDateMax).toISOString();
            console.log("fridgeMaxISO: ", fridgeMaxISO);
            return fridgeMaxISO;
        },
        
        fridgeMinDate: function (data) {
            var fridgeDateMin = convertDDay.findDateMin(dt, data.fridgemin);
            var fridgeMinISO = moment(fridgeDateMin).toISOString();
            console.log("fridgeMinISO: ", fridgeMinISO);
            return fridgeMinISO;
        }

    };
}]);