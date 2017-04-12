require('./bootstrap');
var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';
    $scope.show_exampale = 1;

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
            glyphicon: "glyphicon-pencil",
            name: "Second step",
            template: "step2"
        },
        {
            step: 3,
            url: '',
            glyphicon: "glyphicon-map-marker",
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
        console.log(newStep);
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


}]);


myApp.controller('WizardController', ['$scope', function ($scope) {


    //Model

}]);