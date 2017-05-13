var center = {latitude: 51.218826, longitude: 4.402950};
var MAX_SIZE = 5000000;//5mb
var myApp = angular.module('myApp', ['uiGmapgoogle-maps', 'ngMaterial', 'ngAutocomplete']);


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
    }


    $scope.initAanpasenWedstrijd = function (id, lat, lng, titel, image, type, prijzen, category, hengel, visserij, kostprijs, duur, water, datum, dag, maand, loting, text) {
        $scope.currentStep++;
        $scope.input.aanpasen = id;
        $scope.marker.coords = {latitude: lat, longitude: lng,};
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
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
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
        if ($scope.currentStep == 1) {
            $scope.marker.coords = {latitude: 0, longitude: 0,};
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

            $scope.showSelectImageValidation = true;

        }
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
        },
        control: {
            refresh: {
                latitude: center.latitude,
                longitude: center.longitude,
            },
        },
        zoom: 8,
        events: {
            click: function ($marker, $event, $position) {
                var coordinats = $position[0].latLng;
                $scope.marker.coords = {
                    latitude: coordinats.lat(),
                    longitude: coordinats.lng(),
                };
                $scope.input.lat = coordinats.lat();
                $scope.input.lng = coordinats.lng();
                $scope.$apply();
            }
        }
    };
    $scope.marker = {
        id: 1,
        coords: {
            latitude: "",
            longitude: "",
        },
        options: '',

    }


    uiGmapGoogleMapApi.then(function (maps) {
        $scope.google = google;
        $scope.googleMaps = true;
    });

}])
;

myApp.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: "places,geometry,visualization"
    });
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