app.controller("additemCtrl", ["$scope", "$http", "$location", "$timeout", "fbRefFactory", "$firebaseArray",function($scope, $http, $location, $timeout, fbRefFactory, $firebaseArray) {
    
    $scope.eventSources = [];
    $scope.searchInput = '';
    $scope.food = '';
    $scope.purchaseDate = '';
    $scope.maxDate = '';
    $scope.minDate = '';
    $scope.location = '';
    $scope.state = '';
    let newItem = {};

    $scope.$on('date', function(event, dt) {
        console.log(dt);
        $scope.purchaseDate = dt;
    });

    $scope.data = $firebaseArray(fbRefFactory.foodsRef());

    $scope.addItem = function (data) {
        newItem = {
            food: data.food,
            purchaseDate: $scope.purchaseDate
            // maxDate: ,
            // minDate: ,
            // location: ,
            // state: 
            };
            console.log("newItem.food", newItem.food);
            console.log("data.food", data.food);

        $http.post('/inventory/create', JSON.stringify(newItem))
            .success(function (data, status, headers) {
                console.log(status);
                alert("succes");
            })
            .error(function (data, status, header) {
                console.log(status);
                alert(status);
              });
        newItem = {};
    };
}]);

