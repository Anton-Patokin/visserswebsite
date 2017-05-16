myApp.controller('GoogleMapsConroller', ['$scope', '$http', function ($scope, $http) {
    $scope.plaatsMarkers = [];
    $scope.trainerMarkers = [];
    $scope.wedsrijdMarkers = [];


    $scope.zoekenOpGoogleMaps = function (input) {
        $http({
            method: 'POST',
            url: ROUTEFRONT + '/api/zoeken/googleMaps',
            data: {input: input}
        }).success(function (data) {
            eraseMarkers();
            angular.forEach(data, function (content, key) {
                angular.forEach(content, function (value, id) {

                    inializeMarkerVariabele(value, key);
                });

            });

        }).error(function (data, status, headers, config) {
            console.log('error bij het zoeken');
        });
    }


    function inializeMarkerVariabele(value, marker) {
        var ret = {
            latitude: value['lat'],
            longitude: value['lng'],
            title: value['naam']
        };
        ret['id'] = value['id'];
        if (marker == 'plaats') {
            $scope.plaatsMarkers.push(ret)

        }
        if (marker == 'trainer') {
            $scope.trainerMarkers.push(ret)
        }
        if (marker == 'wedstrijd') {
            $scope.wedsrijdMarkers.push(ret)
        }
    }


    function eraseMarkers() {
        $scope.plaatsMarkers = [];
        $scope.trainerMarkers = [];
        $scope.wedsrijdMarkers = [];


    }

    $http({
        method: 'GET',
        url: ROUTEFRONT + '/api/get/markers/visPlaats'
    }).success(function (data) {
        angular.forEach(data, function (value, key) {

            inializeMarkerVariabele(value, 'plaats');
        });
    }).error(function () {
        console.log('iets verkeerd met api call bij visplaatsen aanvraag');
    });

    $http({
        method: 'GET',
        url: ROUTEFRONT + '/api/get/markers/trainers'
    }).success(function (data) {
        angular.forEach(data, function (value, key) {
            inializeMarkerVariabele(value, 'trainer');
        });
    }).error(function () {
        console.log('iets verkeerd met api call bij trainer aanvraag');
    });

    $http({
        method: 'GET',
        url: ROUTEFRONT + '/api/get/markers/wedstrijden'
    }).success(function (data) {
        angular.forEach(data, function (value, key) {
            inializeMarkerVariabele(value, 'wedstrijd');

        });
    }).error(function () {
        console.log('iets verkeerd met api call bij visplaatsen aanvraag');
    });


    function resenterGoogleMaps(position) {
        console.log(position);
        $scope.map.center.latitude = position.lat();
        $scope.map.center.longitude = position.lng();
        $scope.map.zoom = 15;
    }

    $scope.options = {
        autocomplete: true,
        types: ['(cities)'],
        componentRestrictions: {country: 'be'}
    };

    $scope.map = {
        center: {
            latitude: center.latitude,
            longitude: center.longitude
        },
        searchbox: {
            template: 'searchbox.tpl.html',
            events: {
                places_changed: function (searchBox) {
                    resenterGoogleMaps(searchBox.getPlaces()[0].geometry.location)
                }
            },
            options:{
                autocomplete: true,
                types: ['(cities)'],
                componentRestrictions: {country: ['be','nl'],}
            }
        },
        options: {
            scrollwheel: false,
        },
        zoom: 8
    };
}]);