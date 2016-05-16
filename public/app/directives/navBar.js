app.directive("navbarDirective", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "app/partials/navbar.html",
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});