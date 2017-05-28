myApp.controller('vissersActiviteitenController', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {
    $scope.ShowvisActiviteitenPopUp = !$cookies.get('visActiviteitenWeek');
    $scope.showModalVisActiviteiten = false;
    $scope.visVagnstShowGoolgeMaps = false;



    $scope.visVagst = {
        vissen:[{aantal:0,soort:''} ],
        lat: '',
        lng: '',
        gevangen: '3',
        nietGevangen: '3',
        vangst: 'nee',
        myDate: new Date(),
        isOpen: false
    }

    $scope.nogEenVisSoort=function () {
        $scope.visVagst.vissen.push({aantal:0,soort:''})
    }
    $scope.verwijderVisSoort=function ($index) {
        $scope.visVagst.vissen.splice($index, 1);
    }
    $scope.minDate = new Date(
        $scope.visVagst.myDate.getFullYear(),
        $scope.visVagst.myDate.getMonth() - 1,
        $scope.visVagst.myDate.getDate());

    $scope.maxDate = new Date(
        $scope.visVagst.myDate.getFullYear(),
        $scope.visVagst.myDate.getMonth(),
        $scope.visVagst.myDate.getDate());


    function addmarker(lat, lng) {
        $scope.showMarker.showMarker = true;
        $scope.visvanstMap.marker.coords = {
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
                    console.log('search pleas');
                    var place = searchBox.getPlaces()[0].geometry.location;
                    console.log(searchBox.getPlaces());
                    var lat = place.lat();
                    var lng = place.lng();
                    $scope.visvanstMap.center.latitude = lat;
                    $scope.visvanstMap.center.longitude = lng;
                    $scope.visvanstMap.zoom = 15
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
                addmarker(coordinats.lat(), coordinats.lng());
            }
        }, marker: {
            id: 1,
            coords: {
                latitude: "",
                longitude: "",
            },
            options: '',

        }
    };


    
    $scope.saveViserActiviteit = function (answare) {
        $scope.vangstVanVandaag = function () {
            $scope.show_gevangen = $scope.visVagst.vangst;
            $scope.visVagnstShowGoolgeMaps = true;
        }
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        //activeren van cookie haal dat uit comentaar na het debugen
        // $cookies.put('visActiviteitenWeek', 'false', {'expires': expireDate});
        
        if (answare == 'ja') {
            // $scope.$watch('visVagstDatum.myDate', function () {
            //     var date_picker = $scope.visVagstDatum.myDate;
            //     console.log(date_picker);
            // });
        }


    }
}]);
