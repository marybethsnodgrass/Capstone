app.factory("fbRefFactory", ["$firebaseAuth", "$firebaseArray", "$firebaseObject", "uidFactory", function($firebaseAuth, $firebaseArray, $firebaseObject, uidFactory) {
    var uid = null;
    var uKey = null;

    return {

        usersRefGet: function () {
            var uidVar = uidFactory.getUID();
            console.log("uidVar", uidVar);
            var usersRef = new Firebase("https://perishibles.firebaseio.com/users/" + uidVar);
            console.log("usersRef", usersRef);
            var userFoodRef = usersRef.child(food);
            return $firebaseArray(userFoodRef);
        },

        foodsRefGet: function () {
            var foodsRef = new Firebase("https://perishibles.firebaseio.com/foods");
            return foodsRef;
        },

        authRefGet: function () {
            var authRef = new Firebase("https://perishibles.firebaseio.com/");
            return $firebaseAuth(authRef);
        },

        userRefCreate: function (userData) {
            var uidVar = uidFactory.setUID(userData);
            var ref = new Firebase("https://perishibles.firebaseio.com/");
            ref.child("users").child(uidVar).set({active: true});
            var array = $firebaseArray(ref);
            console.log("ref: ", ref);
            console.log("array", array);
            return $firebaseArray(ref);
        }
    };
}]);