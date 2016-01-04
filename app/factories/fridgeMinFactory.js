app.factory("fridgeMinFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "moment", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, moment) {

    return {

        fridgeMinDate: function (data) {
            var fridgeDateMin = convertDDay.findDateMin(dt, data.fridgemin);
            var fridgeMinDateVar = moment(fridgeDateMin).date();
            return fridgeMinDateVar;
        },

        fridgeMinMonth: function (data) {
            var fridgeDateMin = convertDDay.findDateMin(dt, data.fridgemin);
            var fridgeMinMonthVar = moment(fridgeDateMin).month();
            return fridgeMinMonthVar;
        },

        fridgeMinYear: function (data) {
            var fridgeDateMin = convertDDay.findDateMin(dt, data.fridgemin);
            var fridgeMinYearVar = moment(fridgeDateMin).year();
            return fridgeMinYearVar;
        },

        fridgeMinDay: function (data) {
            var fridgeDateMin = convertDDay.findDateMin(dt, data.fridgemin);
            var fridgeMinDayVar = moment(fridgeDateMin).day();
            return fridgeMinDayVar;
        }
    };
}]);
        // findFridgeMax: function (data) {
        //     var fridgeDateMax = convertDDay.findDateMax(dt, data.fridgemax);
        //     console.log("fridgedatemax", fridgeDateMax);
        //     deferred.resolve(fridgeDateMax);
        //     return deferred.promise;
        // },

        // findFreezeMin: function (data) {
        //     var freezeDateMin = convertDDay.findDateMin(dt, data.freezemin);
        //     console.log("freezedatemin", freezeDateMin);
        //     deferred.resolve(freezeDateMin);
        //     return deferred.promise;
        // },

        // findFreezeMax: function (data) {
        //     var freezeDateMax = convertDDay.findDateMax(dt, data.freezemax);
        //     console.log("freezedatemax", freezeDateMax);
        //     deferred.resolve(freezeDateMax);
        //     return deferred.promise;