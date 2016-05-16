app.factory("fbRefFactory", ["$firebaseAuth", "uidFactory", function($firebaseAuth, uidFactory) {

    return {

        userRefCreate: function (userData) {
            uidFactory.setUID(userData);
            var userRefCreateVar = new Firebase("https://perishibles.firebaseio.com/users/" + uidFactory.getUID());
            console.log("userRefCreateVar", userRefCreateVar);
            return userRefCreateVar;
        },

        userRef: function () {
            var userRef = new Firebase("https://perishibles.firebaseio.com/users/" + uidFactory.getUID());
            console.log("userRef", userRef);
            return userRef;
        },
        
        usersRef: function () {
            var usersRef = new Firebase("https://perishibles.firebaseio.com/users/");
            console.log("usersRef", usersRef);
            return usersRef;
        },

        foodsRef: function () {
            var foodsRefVar = new Firebase("https://perishibles.firebaseio.com/foods/");
            console.log("foodsRef: ", foodsRefVar);
            return foodsRefVar;
        },

        foodRef: function (userRef, food) {
            var foodRefVar = new Firebase(userRef + '/' + food);
            return foodRefVar;
        },

        fridgeMinRef: function (userRef, food) {
            var fridgeMinRefVar = new Firebase(userRef + '/' + food + "/fridgeMinMoment/");
            return fridgeMinRefVar;
        },

        fridgeMaxRef: function (userRef, food) {
            var fridgeMaxRefVar = new Firebase(userRef + '/' + food + "/fridgeMaxMoment/");
            return fridgeMaxRefVar;
        },

        authRefGet: function () {
            var authRef = new Firebase("https://perishibles.firebaseio.com/");
            return $firebaseAuth(authRef);
        }

    };
}]);