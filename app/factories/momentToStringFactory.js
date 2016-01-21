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
        },

        freezerMaxDate: function (data) {
            var freezerDateMax = convertDDay.findDateMax(dt, data.freezemax);
            var freezerMaxISO = moment(freezerDateMax).toISOString();
            console.log("freezerMaxISO: ", freezerMaxISO);
            return freezerMaxISO;
        },
        
        freezerMinDate: function (data) {
            var freezerDateMin = convertDDay.findDateMin(dt, data.freezemin);
            var freezerMinISO = moment(freezerDateMin).toISOString();
            console.log("freezerMinISO: ", freezerMinISO);
            return freezerMinISO;
        }

    };
}]);