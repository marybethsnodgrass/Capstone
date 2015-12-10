app.factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
    var ref = new Firebase("https://perishibles.firebaseio.com/");
    return $firebaseAuth(ref);
}]);