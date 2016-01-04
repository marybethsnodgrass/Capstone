app.factory("fridgeMaxFactory", ["$firebaseObject", "uidFactory", "$q", "convertDDay", "fbObjFactory", "moment", function($firebaseObject, uidFactory, $q, convertDDay, fbObjFactory, moment) {

    return {

        fridgeMaxDate: function (data) {
            var fridgeDateMax = convertDDay.findDateMax(dt, data.fridgemax);
            var fridgeMaxDateVar = moment(fridgeDateMax).date();
            return fridgeMaxDateVar;
        },

        fridgeMaxMonth: function (data) {
            var fridgeDateMax = convertDDay.findDateMax(dt, data.fridgemax);
            var fridgeMaxMonthVar = moment(fridgeDateMax).month();
            return fridgeMaxMonthVar;
        },

        fridgeMaxYear: function (data) {
            var fridgeDateMax = convertDDay.findDateMax(dt, data.fridgemax);
            var fridgeMaxYearVar = moment(fridgeDateMax).year();
            return fridgeMaxYearVar;
        }
    };
}]);