myApp.controller('GenericChartCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

    $scope.myChartObject = {};
    $scope.totaalAantalVissenGevangen = {};
    $scope.alleVisOpDag = '';
    $scope.myChartObject.type = "PieChart";
    $scope.totaalAantalVissenGevangen.type = "ColumnChart";
    $scope.onions = [
        {v: "Onions"},
        {v: 3},
    ];


    $scope.initUser = function ($id) {
        console.log('user', $id);
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

        if ($id.length) {
            $timeout(function () {
                $http({
                    method: 'POST',
                    url: ROUTEFRONT + '/api/get/alleVissen',
                    data: {id: $id}
                }).success(function (datas, status, headers, config) {
                    console.log(datas)
                    $scope.alleVisOpDag = datas;
                })
            }, 200);

        }


    }

    $scope.visDagGegevens='';
    $scope.toggelOccordion = function ($event,$id) {

        $http({
            method: 'POST',
            url: ROUTEFRONT + '/api/get/visWeer',
            data: {id: $id}
        }).success(function (datas, status, headers, config) {
            console.log(datas)
            $scope.visDagGegevens=datas;
        })
        $('.panel-footer').hide();

        var div =angular.element(event.currentTarget);


        var h3 =div.children()[0];
        $( '.glyphicon').removeClass('glyphicon-chevron-down');
        $( h3).find(".glyphicon").addClass('glyphicon-chevron-down');
        var p =div.children()[1];
        $(p).slideToggle(200);

    };

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
        $scope.totaalAantalVissenGevangen.data = {
            "cols": [
                {id: "t", label: "Soort", type: "string"},
                {id: "s", label: "Aantal", type: "number"}
            ], "rows": $aantalvissenArray
        };

        $scope.totaalAantalVissenGevangen.options = {
            'title': 'Aantal gevangen vissoorten per soort'
        };
    }


}]);