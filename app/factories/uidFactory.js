app.factory("uidFactory", ["$firebaseAuth", function($firebaseAuth) {
    var uid = null;
    var uKey = null;

    return {
        getUID: function () {
            return uid;
        },

        setUID: function (newId) {
            uid = newId.uid;
            console.log("set uid: ", uid);
            return uid;
        }
    };
}]);