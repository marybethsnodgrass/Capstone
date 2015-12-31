app.factory("fbRefFactory", ["$firebaseAuth", "$firebaseArray", "$firebaseObject", "uidFactory", function($firebaseAuth, $firebaseArray, $firebaseObject, uidFactory) {
    var uid = null;
    var uKey = null;

    return {

        usersRef: function () {
            var usersRef = new Firebase("https://perishibles.firebaseio.com/users/");
            console.log("usersRef", usersRef);
            return usersRef;
        },

        foodsRefGet: function () {
            var foodsRef = new Firebase("https://perishibles.firebaseio.com/foods/");
            console.log("foodsRef: ", foodsRef);
            return foodsRef;
        },

        // foodRef: function (food) {
        //     var foodRef = new Firebase("https://perishibles.firebaseio.com/foods" + food);
        //     console.log("foodRef: ", foodRef);
        //     console.log("food: ", food);
        //     console.log("$firebaseArray(foodRef): ", $firebaseArray(foodRef));
        //     return foodRef;
        // },

        authRefGet: function () {
            var authRef = new Firebase("https://perishibles.firebaseio.com/");
            return $firebaseAuth(authRef);
        },

        userRefCreate: function (userData) {
            var uidVar = uidFactory.setUID(userData);
            var ref = new Firebase("https://perishibles.firebaseio.com/");
            ref.child("users").child(uidVar).set({active: true});
        }
    };
}]);