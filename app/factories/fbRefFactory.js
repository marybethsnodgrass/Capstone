app.factory("fbRefFactory", ["$firebaseAuth", "uidFactory", function($firebaseAuth, uidFactory) {

    return {

        usersRef: function () {
            var usersRef = new Firebase("https://perishibles.firebaseio.com/users/");
            console.log("usersRef", usersRef);
            return usersRef;
        },


        userRef: function () {
            var userRef = new Firebase("https://perishibles.firebaseio.com/users/" + uidFactory.getUID());
            console.log("userRef", userRef);
            return userRef;
        },

        foodsRef: function () {
            var foodsRefVar = new Firebase("https://perishibles.firebaseio.com/foods/");
            console.log("foodsRef: ", foodsRefVar);
            return foodsRefVar;
        },

        foodRef: function (userRef, food) {
            var foodRefVar = new Firebase(userRef + '/' + food);
            console.log("foodRefVar: ", foodRefVar);
            console.log("food: ", food);
            return foodRefVar;
        },

        fridgeMinRef: function (userRef, food) {
            var fridgeMinRefVar = new Firebase(userRef + '/' + food + "/fridgeMinMoment");
            console.log("foodRefVar: ", fridgeMinRefVar);
            console.log("food: ", food);
            return fridgeMinRefVar;
        },

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