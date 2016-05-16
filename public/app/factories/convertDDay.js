app.factory("convertDDay", ["moment", function(moment) {
    return {
        findDateMin: function (date1, min) {
            var m = moment(date1);
            var minDate = m.add(min, "d");
            return minDate;
        },
        findDateMax: function (date1, max) {
            var m = moment(date1);
            var maxDate = m.add(max, "d");
            return maxDate;
        }
    };
}]);