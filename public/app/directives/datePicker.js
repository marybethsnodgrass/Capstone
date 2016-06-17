app.directive("datepickerDirective", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "app/partials/datePicker.html",
    // scope: {
    //     dt: '='
    // },
    link: function ($scope, element, attrs) {
      // DOM manipulation/events here!
        $scope.setFoodDate = function(dt) {
            $scope.$emit('date', dt);
        };

        $scope.open = function($event) {
            $scope.status.opened = true;
        };

        $scope.status = {
            opened: false
        };

        $scope.today = function() {
            $scope.dt = new Date();
        };

        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };
    }
  };
});