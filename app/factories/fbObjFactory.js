app.factory("fbObjFactory", ["$firebaseObject", "fbRefFactory", function($firebaseObject, fbRefFactory) {

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

        fridgeMinObj: function (food) {
            var fridgeMinObjVar = $firebaseObject(fbRefFactory.fridgeMinRef(fbRefFactory.userRef(),food));
            console.log("fridgeMinObjVar: ", fridgeMinObjVar);
            return fridgeMinObjVar;
        },

        fridgeMaxObj: function (food) {
            var fridgeMaxObjVar = $firebaseObject(fbRefFactory.fridgeMaxRef(fbRefFactory.userRef(),food));
            console.log("fridgeMinObjVar: ", fridgeMaxObjVar);
            return fridgeMaxObjVar;
        },

   

    };
}]);