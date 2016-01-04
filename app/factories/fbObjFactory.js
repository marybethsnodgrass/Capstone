app.factory("fbObjFactory", ["$firebaseAuth", "$firebaseArray", "$firebaseObject", "fbRefFactory", "uidFactory", function($firebaseAuth, $firebaseArray, $firebaseObject, fbRefFactory, uidFactory) {
    var uid = null;
    var uKey = null;

    return {

        userObj: function () {
            var userObjVar = $firebaseObject(fbRefFactory.userRef());
            console.log("userObjVar: ", userObjVar);
            return userObjVar;
        },

        foodObj: function (food) {
            var foodObjVar = $firebaseObject(fbRefFactory.foodRef(fbRefFactory.userRef(),food));
            console.log("foodObjVar: ", foodObjVar);
            return foodObjVar;
        },

    //     fridgeMaxMoment = function (data) {
    //     var fridgeMaxMomentVar = convertDDay.findDateMax(dt, data.fridgemax);
    //     console.log("fridgedatemax", fridgeDateMax);
    //     return fridgeDateMax;
    // };

    };
}]);