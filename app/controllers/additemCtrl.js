app.controller("additemCtrl", ["$scope", "Auth", "$firebaseArray", "convertDDay",function($scope, Auth, $firebaseArray, convertDDay) {
    $scope.eventSources = [];

    $scope.searchInput = '';

    $scope.fridgeCheck = false;
    $scope.freezeCheck = false;

    var ref = new Firebase("https://perishibles.firebaseio.com/foods/");

    $scope.$on('date', function(event, dt) {
        console.log(dt);
        $scope.date = dt;
    });

    $scope.data = $firebaseArray(ref);

    // $scope.fridgeMaxDate = function() {
    //     convertDDay($scope.dt, $scope.data.fridgeMax);
    // };



    // $scope.addItem = function ({

    // });

}]);