myApp.controller('GoogleMapsConroller', ['$scope', '$http', function ($scope, $http) {
    $scope.visPlaatsMarkers = [];
    $scope.trainerMarkers = [];
    $scope.wedsrijdMarkers = [];


    $http({
        method: 'GET',
        url: ROUTEFRONT + '/api/get/markers/visPlaats'
    }).success(function (data) {
        angular.forEach(data, function (value, key) {

            var ret = {
                latitude: value['lat'],
                longitude: value['lng'],
                title: value['naam']
            };
            ret['id'] = value['id'];

            $scope.visPlaatsMarkers.push(ret)
        });
    }).error(function () {
        console.log('iets verkeerd met api call bij visplaatsen aanvraag');
    });

    $http({
        method: 'GET',
        url: ROUTEFRONT + '/api/get/markers/trainers'
    }).success(function (data) {
        angular.forEach(data, function (value, key) {
            console.log('triner ophehaald', value['lat']);

            var ret = {
                latitude: value['lat'],
                longitude: value['lng'],
                title: value['name']
            };
            ret['id'] = value['id'];

            $scope.trainerMarkers.push(ret)
        });
    }).error(function () {
        console.log('iets verkeerd met api call bij trainer aanvraag');
    });

    $http({
        method: 'GET',
        url: ROUTEFRONT + '/api/get/markers/wedstrijden'
    }).success(function (data) {
        angular.forEach(data, function (value, key) {
            console.log('wedstrijden', data);
            var ret = {
                latitude: value['lat'],
                longitude: value['lng'],
                title: value['naam']
            };
            ret['id'] = value['id'];

            $scope.wedsrijdMarkers.push(ret)
        });
    }).error(function () {
        console.log('iets verkeerd met api call bij visplaatsen aanvraag');
    });


    $scope.resenterGoogleMaps = function (position) {
        console.log(position);
        $scope.map.center.latitude = position.lat();
        $scope.map.center.longitude = position.lng();
        $scope.map.zoom = 15;
    }

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