myApp.controller('vissersActiviteitenController', ['$scope', '$http', '$cookies', '$timeout','$window', function ($scope, $http, $cookies, $timeout,$window) {
    $scope.ShowvisActiviteitenPopUp = !$cookies.get('visActiviteitenWeek');
    $scope.showModalVisActiviteiten = false;
    $scope.animatePopUp = false;
    $scope.visVagnstShowGoolgeMaps = false;
    $scope.visvanstMapMarkershowMarker = false;
    if (!$cookies.get('visActiviteitenWeek')) {
        $timeout(function () {
            $scope.animatePopUp = !$cookies.get('visActiviteitenWeek');
        }, 5000)
    }
    var datumVandaag = new Date();
    $scope.visVagst = {
        id: '',
        vissen: [{aantal: 0, soort: ''}],
        lat: '',
        lng: '',
        gevangen: '3',
        nietGevangen: '3',
        vangst: '',
        myDate: datumVandaag,
        isOpen: false
    }


    $scope.nogEenVisSoort = function () {
        $scope.visVagst.vissen.push({aantal: 0, soort: ''})
    }
    $scope.verwijderVisSoort = function ($index) {
        $scope.visVagst.vissen.splice($index, 1);
    }


    var nummerVanDeDag = datumVandaag.getDate();
    $scope.onlyWeekendsPredicate = function (date) {
        var day = date.getDate();
        return day <= nummerVanDeDag;
    };
    $scope.minDate = new Date(
        datumVandaag.getFullYear(),
        datumVandaag.getMonth() - 1,
        datumVandaag.getDate());

    $scope.maxDate = new Date(
        datumVandaag.getFullYear(),
        datumVandaag.getMonth(),
        datumVandaag.getDate());

    $scope.submitVisVangstModalForm = function () {

        if ($scope.visVangstModalForm.$valid) {
            console.log('send form');
            $scope.showError = false;
            $scope.model = {
                name: "",
                comments: ""
            };
            $http({
                method: 'POST',
                url: ROUTEFRONT + '/api/save/visVangst',
                data: {input: $scope.visVagst}
            }).success(function (data, status, headers, config) {
                console.log(data);
                if (data == 'success') {
                    $scope.serverErrorMassage = false;
                } else {
                    $scope.serverErrorMassage = true;
                }
                if(reload){
                    $window.location.reload();
                    console.log('reload page now');
                }
            }).error(function (data, status, headers, config) {
                $scope.serverErrorMassage = true;
            });
            $scope.show_message = true;
        } else {
            $scope.showError = true;
        }
    }
    function addmarker(lat, lng) {
        $scope.visvanstMapMarker.coords = {
            latitude: lat,
            longitude: lng,
        };
        $scope.visVagst.lat = lat;
        $scope.visVagst.lng = lng;
    }

    $scope.visvanstMap = {
        center: {
            latitude: center.latitude,
            longitude: center.longitude
        },
        options: {
            scrollwheel: false,
            minZoom: 7,
            maxZoom: 17,
        },
        control: {
            refresh: {
                latitude: center.latitude,
                longitude: center.longitude,
            },
        }, searchbox: {
            template: 'searchbox.tpl.html',
            events: {
                places_changed: function (searchBox) {
                    var place = searchBox.getPlaces()[0].geometry.location;
                    console.log(searchBox.getPlaces());
                    var lat = place.lat();
                    var lng = place.lng();
                    $scope.visvanstMap.center.latitude = lat;
                    $scope.visvanstMap.center.longitude = lng;
                    $scope.visvanstMap.zoom = 15
                    $scope.visvanstMapMarkershowMarker = true;
                    addmarker(place.lat(), place.lng());
                    $scope.$apply();
                }
            },
            options: {
                autocomplete: false,
                types: ['(cities)'],
                componentRestrictions: {country: ['be', 'nl'],}
            }
        },
        zoom: 10,
        events: {
            click: function ($marker, $event, $position) {

                console.log($marker.data)
                var coordinats = $position[0].latLng;
                $scope.visvanstMapMarkershowMarker = true;
                addmarker(coordinats.lat(), coordinats.lng());
                $scope.$apply();

            }
        },
    };


    $scope.visvanstMapMarker = {
        id: 1,
        coords: {
            latitude: "",
            longitude: "",
        },
        options: '',
    }

    var reload = false;
    $scope.reloadPgage = function (value) {
        reload = value;
    }
    $scope.saveViserActiviteit = function (answare) {
        $scope.show_message = false;

        $scope.animatePopUp = false;
        $scope.vangstVanVandaag = function () {
            $scope.show_gevangen = $scope.visVagst.vangst;
            $scope.visVagnstShowGoolgeMaps = true;
        }
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        //activeren van cookie haal dat uit comentaar na het debugen
        $cookies.put('visActiviteitenWeek', 'false', {'expires': expireDate});
        if (answare == 'ja') {
            $scope.$watch('visVagst.myDate', function () {
                var date_picker = $scope.visVagst.myDate;
                console.log(date_picker);
            });


        }


    }
}]);
