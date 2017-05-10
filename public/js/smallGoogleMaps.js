
myApp.controller('GoogleMapsSmaalConroller', ['$scope', function ($scope) {
    $scope.map = {
        center: {
            latitude: center.latitude,
            longitude: center.longitude
        },
        options: {
            scrollwheel: false,
        },
        zoom: 8
    };
}]);
