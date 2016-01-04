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
        }
    };
}]);