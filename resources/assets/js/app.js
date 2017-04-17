var center = {latitude: 51.218826, longitude: 4.402950};


require('./bootstrap');
require('./lib/lodash.min');
require('./lib/angular-min');
require('./lib/angular-google-maps')
require('./lib/angular-simple-logger.min');

var myApp = angular.module('myApp', ['uiGmapgoogle-maps']);

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

myApp.controller('MainController', ['$scope', 'uiGmapGoogleMapApi', function ($scope, uiGmapGoogleMapApi) {
    $scope.greeting = 'Hola!';
    $scope.show_exampale = 1;

    $scope.input = {
        type: "",
    }

    $scope.currentStep = 1;
    $scope.steps = [
        {
            step: 1,
            url: '',
            glyphicon: "glyphicon-bullhorn",
            name: "First step",
            template: "step1"
        },
        {
            step: 2,
            url: '',
            glyphicon: "glyphicon-map-marker",
            name: "Second step",
            template: "step2"
        },
        {
            step: 3,
            url: '',
            glyphicon: "glyphicon-pencil",
            name: "Third step",
            template: "step3"
        }, {
            step: 4,
            url: '',
            glyphicon: "glyphicon-ok",
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
                var coordinats=$position[0].latLng;
                $scope.marker.coords = {
                    latitude: coordinats.lat(),
                    longitude: coordinats.lng(),
                };
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