app.controller("additemCtrl", ["$scope", "Auth",function($scope, Auth) {
    $scope.date = new Date();

    $scope.purchaseDate = {
         value: $scope.date
       };
}]);