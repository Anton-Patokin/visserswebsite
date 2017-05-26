
myApp.controller('OccordionConroller', ['$scope', function ($scope) {
   $scope.toggelOccordion = function ($event) {
       var div =angular.element(event.currentTarget);
       var h3 =div.children()[0];
       console.log($( h3).find(".glyphicon").toggleClass('glyphicon-chevron-down'));
       var p =div.children()[1];
       $(p).slideToggle(200);
   }
}]);
