myApp.controller('GoogleMapsConroller', ['$scope', '$http', function ($scope, $http) {
    $scope.plaatsMarkers = [];
    $scope.trainerMarkers = [];
    $scope.wedsrijdMarkers = [];


    $scope.zoekenOpGoogleMapsnaarGidsen = function (input) {

        $http({
            method: 'POST',
            url: ROUTEFRONT + '/api/zoeken/googleMaps/gids',
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

    $scope.zoekenOpGoogleMapsnaarVisPlatsen = function (input) {
        $http({
            method: 'POST',
            url: ROUTEFRONT + '/api/zoeken/googleMaps/visPlatsen',
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
            info: {
                id: value['id'],
                titel: value['titel'].substring(0, 40),
                text: value['text'].substring(0, 100),
                type: value['type'],
                image: 'uploads/thumbnail/' + value['image'],
            }
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

    var counterror = 0;
    $scope.initVisPlaatsmarkers = function () {
        $http({
            method: 'GET',
            url: ROUTEFRONT + '/api/get/markers/visPlaats'
        }).success(function (data) {
            angular.forEach(data, function (value, key) {

                inializeMarkerVariabele(value, 'plaats');
            });
        }).error(function () {
            counterror++;
            if (counterror < 5) {
                $scope.initVisPlaatsmarkers();
            }
            console.log('iets verkeerd met api call bij visplaatsen aanvraag');
        });
    }


    $scope.initTrainersmarkers = function () {
        $http({
            method: 'GET',
            url: ROUTEFRONT + '/api/get/markers/trainers'
        }).success(function (data) {
            angular.forEach(data, function (value, key) {
                inializeMarkerVariabele(value, 'trainer');
            });
        }).error(function () {
            counterror++;
            if (counterror < 5) {
                $scope.initTrainersmarkers();
            }
            console.log('iets verkeerd met api call bij trainer aanvraag');
        });
    }

    $scope.initWedstrijdmarkers = function () {
        $http({
            method: 'GET',
            url: ROUTEFRONT + '/api/get/markers/wedstrijden'
        }).success(function (data) {
            angular.forEach(data, function (value, key) {
                inializeMarkerVariabele(value, 'wedstrijd');

            });
        }).error(function () {
            counterror++;
            if (counterror < 5) {
                $scope.initWedstrijdmarkers();
            }
            console.log('iets verkeerd met api call bij visplaatsen aanvraag');
        });

    }


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
                place_changed: function (autocomplete) {
                    place = autocomplete.getPlace();
                    resenterGoogleMaps(place.geometry.location)
                }
                // places_changed: function (searchBox) {
                //     console.log('search pleas');
                //     resenterGoogleMaps(searchBox.getPlaces()[0].geometry.location)
                // }
            },
            options: {
                autocomplete: true,
                types: ['(cities)'],
                componentRestrictions: {country: ['be', 'nl'],}
            }
        },
        options: {
            scrollwheel: false,
            minZoom: 7,
            maxZoom: 17,
        },
        zoom: 8,
        markers: {
            wedstrijd: {
                events: {
                    click: function ($value) {
                        console.log('marker kicked', $value.model.title);
                        $scope.markerTitel = $value.model.title;
                        $scope.map.markers.wedstrijd.wedstrijdWindowShow = true;
                        $scope.$apply();
                    }
                },
                wedstrijdWindowShow: false,
            },
        }
    };


    $scope.changeCalenderMonth = function (value) {
        calender(value);
    }

    $scope.toon_wedstrijd_list = function ($value) {
        if ($value.length) {
            eraseMarkers();
            angular.forEach($value, function (value, id) {
                inializeMarkerVariabele(value, 'wedstrijd');
                console.log(value);
            });
        }
    }


    var THarviMoon = new Object();
    THarviMoon = function () {
        this.Day = 0;
        this.Month = 0;
        this.Year = 0;
        this.GetMoonDay = function (day, month, year) {
            this.Day = day;
            this.Month = month;
            this.Year = year;

            if (month <= 2) {
                month += 12;
                year -= 1;
            }
            ;
            var nc = Math.floor(year / 100);
            var vc = ((Math.floor(nc / 3) + Math.floor(nc / 4)) + 6) - nc;
            var a = (year / 19);
            var b = ((a - parseInt(a)) * 209);
            var c = ( b + month + day + vc ) / 30;
            var MoonDay = Math.round(((c - parseInt(c)) * 30) + 1);
            return MoonDay;
        };

        this.SetNowDate = function (date) {

            if (date) {
                var dNow = date;
            } else {
                var dNow = new Date();

            }
            this.Day = dNow.getDate();
            this.Month = dNow.getMonth() + 1;
            this.Year = dNow.getYear();
            if (this.Year < 1000) this.Year += 1900;
        };

        this.NowMoonDay = function (date) {

            this.SetNowDate(date);
            return this.GetMoonDay(this.Day, this.Month, this.Year);
        };
    };


    calender();
    function calender(custumDate) {
        var hm = new THarviMoon();
        var datumString = [];
        var $ym = "";
        var $timestamp = "";
        var $today;
        var date = new Date();
        var $html_title = "";
        var $prev = '';
        var $next = '';
        var curenYearMonth = ""
        var $day_count = "";
        $scope.calender = {
            titel: "",
            prev: "",
            next: "",
            offset: "",
            html: "",
        }
// Get prev & next month
        if (custumDate) {
            $ym = custumDate;
        } else {
            // This month
            $ym = date.getFullYear() + "-" + (Number(date.getMonth()) + 1);
        }

// Check format
//         $timestamp = strtotime($ym, "-01");
        $timestamp = new Date($ym);

        if ($timestamp === false) {
            $timestamp = time();
        }

// For H3 title
        $html_title = getMaand($timestamp.getMonth()) + '-' + $timestamp.getFullYear()
        $scope.calender.titel = $html_title;
// Create prev & next month link     mktime(hour,minute,second,month,day,year)

        $prev = $timestamp.getFullYear() + '-' + $timestamp.getMonth();
        if ($timestamp.getMonth() == 0) {
            $prev = ($timestamp.getFullYear() - 1) + '-' + 12;
        }
        $scope.calender.prev = $prev;


        $next = $timestamp.getFullYear() + '-' + ($timestamp.getMonth() + 2)
        if ($timestamp.getMonth() >= 11) {
            $next = ($timestamp.getFullYear() + 1) + '-' + 1;
        }
        $scope.calender.next = $next;

// Number of days in the month
        var d = new Date($timestamp.getFullYear(), $timestamp.getMonth() + 1, 0);
        $day_count = d.getDate();
        var year = $timestamp.getFullYear();
        var month = ($timestamp.getMonth() + 1);

// // 0:Sun 1:Mon 2:Tue ...
//         $str = date('w', mktime(0, 0, 0, date('m', $timestamp), 1, date('Y', $timestamp)));
        var offset = ($timestamp.getDay() === 0 ? 0 : $timestamp.getDay());
        offset = Number(offset);
// Add empty cell
        $today = new Date();
        var thisMonth = $today.getMonth() + 1
        $today = $today.getDate()
        var html_bulder_week = [];
        var html_bulder_weeks = [];


        var badDayToFish = [1, 2, 12, 13, 14, 15, 16, 26, 27, 28, 29, 30];
        var notSadDayToFish = [11, 17, 18, 23, 24, 25];
        var veryGoodDayToFish = [4, 5, 6, 7, 8, 19];
        var goodDayToFish = [3, 9, 10, 20, 21, 22];

        for (var i = 0; i < offset; i++) {
            html_bulder_week.push({day: '', today: false, activity: ''});
        }
        for (var i = 1; i <= $day_count; i++) {
            var today = '';
            var day = i;
            if ($today == i && thisMonth == month) {
                today = 'today';
            }

            var dd = new Date($timestamp.getFullYear(), $timestamp.getMonth(), $timestamp.getDate() + (i - 1));

            var moon_day = hm.NowMoonDay(dd);
            // moon_day= moon_day.toString();
            var fishResult = "";
            if (badDayToFish.indexOf(moon_day) != -1) {
                fishResult = 'fish-bad';
            }
            if (notSadDayToFish.indexOf(moon_day) != -1) {
                fishResult = 'fish-meddium';
            }
            if (veryGoodDayToFish.indexOf(moon_day) != -1) {
                fishResult = 'fish-veryGood';
            }
            if (goodDayToFish.indexOf(moon_day) != -1) {
                fishResult = 'fish-good';
            }
            html_bulder_week.push({day: day, today: today, activity: '', fishActivity: fishResult});
            if (offset % 7 == 6 || day == $day_count) {
                html_bulder_weeks.push(html_bulder_week);
                html_bulder_week = [];
            }
            offset++;
        }
        $scope.calender.html = html_bulder_weeks;
        console.log($scope.calender.html);
        $http({
            method: 'GET',
            url: ROUTEFRONT + '/api/get/wedstrijden/' + year + '/' + month
        }).success(function (data) {
            var wedstrijden_array = [];
            angular.forEach(html_bulder_weeks, function (week, week_key) {
                angular.forEach(week, function (day, day_key) {
                    wedstrijden_array = [];
                    angular.forEach(data, function (content, data_key) {
                        var contestDate = new Date(content.datum).getDate();
                        if (day.day == contestDate) {
                            wedstrijden_array.push(content);
                            data.splice(data_key, 1);
                        }
                    });
                    html_bulder_weeks[week_key][day_key]['activity'] = wedstrijden_array;
                });
            });
        }).error(function () {
            console.log('iets fout met ophalen van wedstrijden');
        });
    }

    function getMaand(maandNumber) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[maandNumber].substring(0, 3);
    }

    function time() {
        return Math.floor(new Date().getTime() / 1000)
    }

}]);