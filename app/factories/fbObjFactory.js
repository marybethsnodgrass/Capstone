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
            var foodObjVar = $firebaseObject(fbRefFactory.foodRef(food));
            console.log("$firebaseObject(fbRefFactory.foodRef(): ", $firebaseObject(fbRefFactory.foodRef(food)));
            return foodObjVar;
        },

        // authRefGet: function () {
        //     var authRef = new Firebase("https://perishibles.firebaseio.com/");
        //     return $firebaseAuth(authRef);
        // },

        // userRefCreate: function (userData) {
        //     var uidVar = uidFactory.setUID(userData);
        //     var ref = new Firebase("https://perishibles.firebaseio.com/");
        //     ref.child("users").child(uidVar).set({active: true});
        // }
    };
}]);