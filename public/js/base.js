var center = {latitude: 51.218826, longitude: 4.402950};
var MAX_SIZE = 5000000;//5mb
var myApp = angular.module('myApp', ['uiGmapgoogle-maps', 'ngMaterial','ngCookies','ngMessages','googlechart']);


myApp.controller('MainController', ['$scope', 'uiGmapGoogleMapApi', 'fileReader', '$http', '$window', function ($scope, uiGmapGoogleMapApi, fileReader, $http, $window) {
    $scope.latLngFromAdress = {result: ''};
    $scope.options1 = {
        country: 'be',
        types: '(cities)'
    };
    $scope.details1 = '';
    $scope.imageSrc = "http://placehold.it/500x300";
    var formValue = new FormData();
    $scope.showImageInvalideFileFormat = false;
    $scope.showSelectImageValidation = true;
    $scope.ShowfileSizeValidation = false;
    $scope.greeting = 'Hola!';
    $scope.show_exampale = 1;
    $scope.currentStep = 1;
    $scope.serverErrorMassage = false;
    $scope.showMarker = false;
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };

    var d = new Date();

    $scope.nieuws = {
        inleiding: "",
        titel: "",
    }
    $scope.input = {
        id: '',
        naam: "",
        ervaring: "",
        telefonnummer: "",
        type: "",
        lat: "",
        lng: "",
        geslacht: "Man",
        vergunigen: "",
        reglementen: "",
        leeftijd: "",
        titel: "",
        naam_visplek: "",
        file_image: "",
        prijzen: "",
        category: "",
        hengel: "dobber",
        visserij: "",
        kostprijs: 0,
        wedstrijdduur: "",
        wedstrijdwater: "",
        myDate: d,
        dag: d.getDate(),
        maand: getMaand(d.getMonth()),
        loting: "",
        text: "",
        viswater: "",
        nachvissen: 0,
        watertype: 0,
        toilet: 0,
        prive: 0,
        vissoorten: "",
        betaalwater: 0,
        aanpasen: "",
        adres: {
            nummer: '',
            straat: '',
            provincie: '',
            postCode: '',
            gewest: '',
            stad: '',
            land: '',
        }
    }
    $scope.initAanpasenWedstrijd = function (id, lat, lng, titel, image, type, prijzen, category, hengel, visserij, kostprijs, duur, water, datum, dag, maand, loting, text) {
        $scope.currentStep++;
        $scope.input.aanpasen = id;
        // $scope.marker.coords = {latitude: lat, longitude: lng,};
        initAdressAndMarker(lat, lng);
        $scope.input.lat = lat;
        $scope.input.lng = lng;
        $scope.input.titel = titel;
        $scope.imageSrc = image;
        $scope.input.type = type;
        $scope.input.visserij = visserij;
        $scope.input.hengel = hengel;
        $scope.input.category = category;
        $scope.input.prijzen = prijzen;
        $scope.input.kostprijs = Number(kostprijs);
        $scope.input.wedstrijdduur = duur;
        $scope.input.wedstrijdwater = water;
        var myDate = datum;
        myDate = myDate.split("-");
        var newDate = myDate[1] + "," + myDate[2] + "," + myDate[0];
        $scope.input.myDate = new Date(newDate);
        $scope.input.dag = dag;
        $scope.input.maand = maand;
        $scope.input.loting = loting;
        $scope.input.text = text;
        $scope.showSelectImageValidation = false;
        $scope.showImageInvalideFileFormat = false;
        $scope.showSelectImageValidation = false;
        $scope.showMarker = true;

        console.log('wedstrijd');

    }
    $scope.initAanpasenVisplaats = function (id, lat, lng, titel, image, type, watertype, viswater, reglement, vergunigen, nachvissen, toilet, betaalwat, prive, vissoorte, text) {
        $scope.currentStep++;
        console.log(type)
        $scope.input.aanpasen = id;
        // $scope.marker.coords = {latitude: lat, longitude: lng};
        initAdressAndMarker(lat, lng);
        $scope.input.lat = lat;
        $scope.input.lng = lng;
        $scope.input.naam_visplek = titel;
        $scope.imageSrc = image;
        $scope.input.type = type;
        $scope.input.watertype = watertype;
        $scope.input.viswater = viswater;
        $scope.input.reglementen = reglement;
        $scope.input.vergunigen = vergunigen;
        $scope.input.toilet = toilet;
        $scope.input.nachvissen = nachvissen;
        $scope.input.betaalwater = betaalwat;
        $scope.input.prive = prive;
        $scope.input.vissoorten = vissoorte;
        $scope.input.text = text;
        $scope.showSelectImageValidation = false;
        $scope.showImageInvalideFileFormat = false;
        $scope.showSelectImageValidation = false;
        $scope.showMarker = true;

        console.log('plaats');

    }
    $scope.initializeProfiel = function (name, lat, lng, ervaring, geslacht, leeftijd, vraagprijs, text, url, telefon, aanpasen) {
        $scope.marker.coords = {latitude: lat, longitude: lng};
        $scope.input.naam = name;
        $scope.input.lat = lat;
        $scope.input.lng = lng;
        initAdressAndMarker(lat, lng);
        $scope.input.ervaring = ervaring;
        $scope.input.geslacht = geslacht;
        $scope.input.leeftijd = Number(leeftijd);
        $scope.input.kostprijs = Number(vraagprijs);
        $scope.input.text = text;
        $scope.imageSrc = url;
        $scope.input.telefonnummer = telefon;
        $scope.showImageInvalideFileFormat = !aanpasen;
        $scope.showSelectImageValidation = !aanpasen;
        $scope.showMarker = true;

        console.log('Profiel');
    }


    $scope.faqinit=function (vraag,antwoord) {
        $scope.vraag=vraag;
        $scope.antwoord = antwoord;
    }
    $scope.initAanpassenNieuwsArtikel = function (titel, inleiding, url) {
        $scope.nieuws = {
            inleiding: inleiding,
            titel: titel,
        }
        $scope.imageSrc = url;
    }

    var today = new Date();
    var minAge = 18;
    $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    $scope.getAgeOfuser = function () {
    }

    $scope.initVisersPlek = function (waterType) {
        $scope.input.watertype = waterType;
    }

    $scope.initTrainerfunction = function (naam) {
        $scope.input.naam = naam;

    }
    $scope.initContest = function (contestCategory, hengel, visserij) {
        $scope.input.category = contestCategory;
        $scope.input.hengel = hengel;
        $scope.input.visserij = visserij;
    }

    $scope.tutorialCategory = "";
    $scope.initTutorialCategory = function (titel, inleiding, category, url) {
        $scope.tutorialCategory = category;
        $scope.nieuws.titel = titel;
        $scope.nieuws.inleiding = inleiding;
        $scope.imageSrc = url;
    }

    //old init vor php old('title')->nieuw artikel view
// $scope.initNieuwsArtikel = function (titel, inleiding) {
//     $scope.nieuws.titel = titel;
//     $scope.nieuws.inleiding = inleiding;
//
// }
    $scope.submitNieuwForm = function () {
        $scope.showError = false;
        // check to make sure the form is completely valid

        $("form").get(0).setAttribute("action", "test.html");

        document.getElementById("submitNieuwForm").submit();
        if ($scope.nieuwForm.$valid && !$scope.showImageInvalideFileFormat && !$scope.showSelectImageValidation) {
            $scope.showError = false;
            // $("form").get(0).setAttribute( "action", "test.html" );
            //
            // document.getElementById("submitNieuwForm").submit();
        } else {
            $scope.showError = true;
        }
    }

    $scope.submitFormProfiel = function () {
        console.log('send form');
        if ($scope.visTrainerForm.$valid && !$scope.showImageInvalideFileFormat && !$scope.showSelectImageValidation) {
            $scope.showError = false;
            document.getElementById('submitNieuwForm').submit(); //force to submit the form after clicking the button
        } else {
            $scope.showError = true;
        }
    }
    $scope.submitForm = function () {
        $scope.showError = false;
        // check to make sure the form is completely valid

        formValue.append("input", [$scope.input.id]);
        if (($scope.visPlekForm.$valid || $scope.visTrainerForm.$valid || $scope.visWedstrijdForm.$valid) && !$scope.showImageInvalideFileFormat && !$scope.showSelectImageValidation) {
            $scope.showError = false;
            $scope.model = {
                name: "",
                comments: ""
            };
            $http({
                method: 'POST',
                url: ROUTEFRONT + '/api/add/content',
                headers: {'Content-Type': undefined},
                transformRequest: function (data) {
                    var formData = new FormData();
                    formData.append("input", angular.toJson(data.input));
                    formData.append("file", data.file);
                    return formData;
                },
                data: {input: $scope.input, file: $scope.file}
            }).success(function (data, status, headers, config) {
                if (data == 'success') {
                    $scope.serverErrorMassage = false;
                    $scope.currentStep++;
                } else {
                    $scope.serverErrorMassage = true;
                }
            }).error(function (data, status, headers, config) {
                $scope.serverErrorMassage = true;
            });

        } else {
            $scope.showError = true;
        }
    };


    $scope.getFile = function () {


        formValue.append("file", $scope.file);
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function (result) {
                $scope.imageSrc = result;
            });
    };

    $scope.$on("fileProgress", function (e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });


    $scope.$watch('input.myDate', function () {
        var date_picker = $scope.input.myDate;
        $scope.input.dag = date_picker.getDate();
        $scope.input.maand = getMaand(date_picker.getMonth());
    });


    function getMaand(maandNumber) {
        var monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
            "Juli", "Augustus", "September", "Oktober", "November", "December"
        ];
        return monthNames[maandNumber].substring(0, 3);
    }

    $scope.steps = [
        {
            step: 1,
            url: '',
            glyphicon: "glyphicon-bullhorn",
            description: 'Artikel',
            name: "First step",
            template: "step1"
        },
        {
            step: 2,
            url: '',
            glyphicon: "glyphicon-map-marker",
            description: 'Locatie',
            name: "Second step",
            template: "step2"
        },
        {
            step: 3,
            url: '',
            glyphicon: "glyphicon-pencil",
            description: 'Formulier',
            name: "Third step",
            template: "step3"
        }, {
            step: 4,
            url: '',
            glyphicon: "glyphicon-ok",
            description: 'Opgeslagen',
            name: "Third step",
            template: "step3"
        },
    ];


    function refreschAddContent() {
        console.log('refreschAddContent');

        if ($scope.currentStep == 1) {
            $scope.marker.coords = {latitude: '', longitude: '',};
            $scope.showError = false;
            $scope.imageSrc = "http://placehold.it/500x300";
            $scope.input.ervaring = "";
            $scope.input.telefonnummer = "";
            $scope.input.type = "trainer";
            $scope.input.lat = "";
            $scope.input.lng = "";
            $scope.input.naam_visplek = "";
            $scope.input.vergunigen = "";
            $scope.input.reglementen = "";
            $scope.input.geslacht = "Man";
            $scope.input.leeftijd = "";
            $scope.input.titel = "";
            $scope.input.file_image = "";
            $scope.input.prijzen = "";
            $scope.input.kostprijs = 0;
            $scope.input.wedstrijdduur = "";
            $scope.input.wedstrijdwater = "";
            $scope.input.myDate = d;
            $scope.input.dag = d.getDate();
            $scope.input.maand = getMaand(d.getMonth());
            $scope.input.loting = "";
            $scope.input.text = "";
            $scope.input.viswater = "";
            $scope.input.aanpasen = 'false';
            $scope.input.adres = {};
            $scope.showSelectImageValidation = true;

        }
        $scope.showMarker = false;
    }

//Functions
    $scope.gotoStep = function (newStep) {
        $scope.currentStep = newStep;
        refreschAddContent();

    }
    $scope.progress_clicked = function ($step) {
        if ($step < $scope.currentStep)
            $scope.gotoStep($step);
    }
    $scope.prev = function () {
        if ($scope.currentStep > 1) {
            $scope.currentStep--
        }
        refreschAddContent();
    }
    $scope.next = function () {
        if ($scope.currentStep < 4) $scope.currentStep++;
        console.log($scope.currentStep);
    }

    $scope.putValue = function (type) {
        $scope.input.type = type;
        switch (type) {
            case "recept":
                $scope.steps[1]["glyphicon"] = "glyphicon-map-marker"
                $scope.steps[2]["glyphicon"] = "glyphicon-pencil"
                break;
            case "contest":
                break;
            case 4:
                break;
            default:
        }

    }

    $scope.mapAdd = {
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
                // places_changed: function (autocomplete) {
                //     console.log(autocomplete.getPlace());
                //     place = autocomplete.getPlace();
                //     var lat = place.geometry.location.lat();
                //     var lng = place.geometry.location.lng();
                //     $scope.mapAdd.center.latitude = lat;
                //     $scope.mapAdd.center.longitude = lng;
                //     $scope.mapAdd.zoom = 15
                //     addmarker(place.geometry.location);
                // },
                places_changed: function (searchBox) {
                    console.log('search pleas');
                    var place = searchBox.getPlaces()[0].geometry.location;
                    console.log(searchBox.getPlaces());
                    var lat = place.lat();
                    var lng = place.lng();
                    $scope.mapAdd.center.latitude = lat;
                    $scope.mapAdd.center.longitude = lng;
                    $scope.mapAdd.zoom = 15
                    addmarker(place.lat(), place.lng());
                    $scope.adress(place.lat(), place.lng());
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
                $scope.adress(coordinats.lat(), coordinats.lng());

            }
        }
    };

    $scope.adress = function (lat, lng) {
        $http({
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4',
        }).success(function (data) {
            console.log(data);

            var adresArray = data.results[0].address_components;

            var nummer = '';
            var straat = '';
            var provincie = '';
            var postcode = '';
            var geweest = '';
            var stad = '';
            var land = '';

            if (adresArray[0]) {
                nummer = adresArray[0].long_name
            }
            if (adresArray[1]) {
                straat = adresArray[1].long_name
            }
            if (adresArray[3]) {
                provincie = adresArray[3].long_name
            }
            if (adresArray[6]) {
                postcode = adresArray[6].long_name
            }
            if (adresArray[4]) {
                geweest = adresArray[4].long_name
            }
            if (adresArray[2]) {
                stad = adresArray[2].long_name
            }
            if (adresArray[5]) {
                land = adresArray[5].long_name
            }

            $scope.input.adres = {
                nummer: nummer,
                straat: straat,
                provincie: provincie,
                postCode: postcode,
                gewest: geweest,
                stad: stad,
                land: land,
            };
            console.log($scope.input.adres);
        }).error(function () {
            console.log('iets fout met ophalen van adress');
        });

    }

    function addmarker(lat, lng) {
        $scope.showMarker = true;
        $scope.marker.coords = {
            latitude: lat,
            longitude: lng,
        };
        $scope.input.lat = lat;
        $scope.input.lng = lng;
    }

    function initAdressAndMarker(lat, lng) {
        addmarker(lat, lng);
        $scope.adress(lat, lng);

    }

    $scope.marker = {
        id: 1,
        coords: {
            latitude: "",
            longitude: "",
        },
        options: '',

    }
    uiGmapGoogleMapApi.then(function (maps) {
        $scope.googleMaps = true;
    });

}]);
myApp.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: "places,geometry,visualization"
    });
});


myApp.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + '/' + (monthIndex + 1) + '/' + year;
    };
});
myApp.directive('filterList', function ($timeout) {
    return {
        link: function (scope, element, attrs) {
            var li = Array.prototype.slice.call(element);

            function filterBy(value) {
                li.forEach(function (el) {
                    el.className = el.textContent.toLowerCase().indexOf(value.toLowerCase()) !== -1 ? '' : 'ng-hide';
                });
            }

            scope.$watch(attrs.filterList, function (newVal, oldVal) {
                if (newVal !== oldVal) {
                    filterBy(newVal);
                }
            });
        }
    };
});