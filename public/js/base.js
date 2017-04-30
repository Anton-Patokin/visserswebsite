var center = {latitude: 51.218826, longitude: 4.402950};
var MAX_SIZE = 5000000;//5mb

var myApp = angular.module('myApp', ['uiGmapgoogle-maps', 'ngMaterial']);


(function (module) {

    var fileReader = function ($q, $log) {

        var onLoad = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            };
        };

        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            };
        };

        var onProgress = function (reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
            };
        };
        var getReader = function (deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        };
        var readAsDataURL = function (file, scope) {
            var deferred = $q.defer();
            console.log(file);
            var reader = getReader(deferred, scope);
            reader.readAsDataURL(file);

            return deferred.promise;
        };

        return {
            readAsDataUrl: readAsDataURL
        };
    };

    module.factory("fileReader",
        ["$q", "$log", fileReader]);

}(angular.module("myApp")));

myApp.directive("ngFileSelect", function () {

    return {
        link: function ($scope, el) {

            el.bind("change", function (e) {

                $scope.file = (e.srcElement || e.target).files[0];
                var ext = $scope.file.name.match(/\.(.+)$/)[1];
                if (angular.lowercase(ext) === 'jpg' || angular.lowercase(ext) === 'jpeg' || angular.lowercase(ext) === 'png') {
                    $scope.showImageInvalideFileFormat = false;
                    var size = $scope.file.size;
                    console.log(size);
                    if (size < MAX_SIZE) {
                        console.log('alles is inoorde image is corect');
                        $scope.ShowfileSizeValidation = false;
                        $scope.showSelectImageValidation = false;
                        $scope.input.file = $scope.file;
                        $scope.getFile();
                    } else {
                        $scope.ShowfileSiz
                        eValidation = true;
                    }

                }
                else {
                    $scope.showImageInvalideFileFormat = true;
                }
                console.log($scope.showImageInvalideFileFormat);
                $scope.$apply();
            })

        }

    }
})
myApp.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
myApp.controller('GoogleMapsConroller', ['$scope', 'uiGmapGoogleMapApi', function ($scope, uiGmapGoogleMapApi) {
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
    uiGmapGoogleMapApi.then(function (maps) {
    });
}]);

myApp.controller('MainController', ['$scope', 'uiGmapGoogleMapApi', 'fileReader', '$http', function ($scope, uiGmapGoogleMapApi, fileReader, $http) {
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
    $scope.input = {
        id: '',
        naam: "",
        ervaring: "",
        telefonnummer: "",
        email: "",
        type: "",
        lat: "",
        lng: "",
        geslacht: "Man",
        leeftijd: "",
        titel: "",
        file_image: "",
        prijzen: "",
        category: "",
        hangel: "dobber",
        visserij: "",
        kostprijs: 0,
        wedstrijdduur: "",
        wedstrijdwater: "",
        myDate: d,
        dag: d.getDate(),
        maand: getMaand(d.getMonth()),
        loting: "",
        text: "",
    }


    $scope.initTrainerfunction = function (naam) {
        console.log(naam);
        $scope.input.naam = naam;

    }
    $scope.initContest = function (contestCategory, hengel, visserij) {
        $scope.input.category = contestCategory;
        $scope.input.hengel = hengel;
        $scope.input.visserij = visserij;
        console.log($scope.input.visserij)
    }

    $scope.submitForm = function () {
        $scope.showError = false;
        console.log($scope.visWedstrijdForm.$valid);
        // check to make sure the form is completely valid

        formValue.append("input", [$scope.input.id]);


        if ($scope.visWedstrijdForm.$valid && !$scope.showImageInvalideFileFormat && !$scope.showSelectImageValidation) {
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
        $scope.input.dag = date_picker.getDate()
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
    console.log($scope.steps);

    //Functions
    $scope.gotoStep = function (newStep) {
        $scope.currentStep = newStep;
        editSteps($scope.currentStep);
    }
    $scope.progress_clicked = function ($step) {
        if ($step < $scope.currentStep)
            $scope.gotoStep($step);
    }
    $scope.prev = function () {

        if ($scope.currentStep > 1)$scope.currentStep--
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

    function editSteps($currentStep) {
        switch ($currentStep) {
            case 1:
                $scope.steps[0]["url"] = "#step1"
                break;
            case 2:
                $scope.steps[1]["url"] = "#step2"
                break;
            case 3:
                $scope.steps[2]["url"] = "#step3"
                break;
            case 4:
                $scope.steps[3]["url"] = "#step4"
                break;
            default:
        }
        console.log($scope.steps);
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

    });

}]);


myApp.controller('WizardController', ['$scope', function ($scope) {


    //Model

}]);