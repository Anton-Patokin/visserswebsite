myApp.controller('GenericChartCtrl', ['$scope', '$http','$timeout', function ($scope, $http, $timeout) {

    $scope.myChartObject = {};
    $scope.totaalAantalVissenGevangen={};

    $scope.myChartObject.type = "PieChart";
    $scope.totaalAantalVissenGevangen.type = "ColumnChart";
    $scope.onions = [
        {v: "Onions"},
        {v: 3},
    ];



    $scope.initUser = function ($id) {
        var url = '/api/get/pieChart/' + $id;

        if ($id.length) {
            $timeout(function () {
                $http({
                    method: 'POST',
                    url: ROUTEFRONT + '/api/get/pieChart',
                    data: {id: $id}
                }).success(function (datas, status, headers, config) {
                    $soortValues = [];
                    angular.forEach(datas, function (data, key) {

                        var aantalvissen = 0;
                        angular.forEach(data, function (value, key_value) {
                            aantalvissen += value.aantal;
                        })

                        $soortValues.push({
                            c: [
                                {v: key},
                                {v: aantalvissen},
                            ]
                        });
                    });
                    pichartInitalize($soortValues);
                    totaalAantalVissenGevangenInitialize($soortValues);
                })
            }, 200);

        }
    }


    function pichartInitalize($soortValues) {
        $scope.myChartObject.data = {
            "cols": [
                {id: "t", label: "Soort", type: "string"},
                {id: "s", label: "Aantal", type: "number"}
            ], "rows": $soortValues
        };
        $scope.myChartObject.options = {
            'title': 'Percentual gevangen vissoorten'
        };
    }
    function totaalAantalVissenGevangenInitialize($aantalvissenArray) {
        $scope.totaalAantalVissenGevangen.data = {"cols": [
            {id: "t", label: "Soort", type: "string"},
            {id: "s", label: "Aantal", type: "number"}
        ], "rows": $aantalvissenArray};

        $scope.totaalAantalVissenGevangen.options = {
            'title': 'Aantal gevangen vissoorten per soort'
        };
    }




}]);