
myApp.controller('GoogleMapsSmaalConroller', ['$scope', function ($scope) {
    $scope.map = {
        
        options: {
            scrollwheel: false,
            minZoom: 7,
            maxZoom: 17,
        },
        zoom:10
    };
}]);
