app.controller("additemCtrl", ["$scope", "Auth", "$firebaseArray" ,function($scope, Auth, $firebaseArray) {
    $scope.date = new Date();

    $scope.searchInput = '';

    $scope.purchaseDate = {
         value: $scope.date
    };
    var ref = new Firebase("https://perishibles.firebaseio.com/foods/");

    $scope.data = $firebaseArray(ref);

}]);