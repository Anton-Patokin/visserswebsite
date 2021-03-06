var center = {
    latitude: 51.218826,
    longitude: 4.40295
}, MAX_SIZE = 5e6, myApp = angular.module("myApp", ["uiGmapgoogle-maps", "ngMaterial", "ngCookies", "ngMessages", "googlechart"]);
myApp.controller("MainController", ["$scope", "uiGmapGoogleMapApi", "fileReader", "$http", "$window", "$timeout", function (e, t, n, i, o, r) {
    function a(e) {
        return ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"][e].substring(0, 3)
    }

    function s() {
        console.log("refreschAddContent"), 1 == e.currentStep && (e.marker.coords = {
            latitude: "",
            longitude: ""
        }, e.showError = !1, e.imageSrc = "https://placehold.it/500x300", e.input.ervaring = "", e.input.telefonnummer = "", e.input.type = "trainer", e.input.lat = "", e.input.lng = "", e.input.naam_visplek = "", e.input.vergunigen = "", e.input.reglementen = "", e.input.geslacht = "Man", e.input.leeftijd = "", e.input.titel = "", e.input.file_image = "", e.input.prijzen = "", e.input.kostprijs = 0, e.input.wedstrijdduur = "", e.input.wedstrijdwater = "", e.input.myDate = c, e.input.dag = c.getDate(), e.input.maand = a(c.getMonth()), e.input.loting = "", e.input.text = "", e.input.viswater = "", e.input.aanpasen = "false", e.input.adres = {}, e.showSelectImageValidation = !0), e.showMarker = !1
    }

    function l(t, n) {
        e.showMarker = !0, e.marker.coords = {latitude: t, longitude: n}, e.input.lat = t, e.input.lng = n
    }

    function u(t, n) {
        l(t, n), e.adress(t, n)
    }

    e.latLngFromAdress = {result: ""}, e.options1 = {
        country: "be",
        types: "(cities)"
    }, e.details1 = "", e.imageSrc = "https://placehold.it/500x300";
    var p = new FormData;
    e.showImageInvalideFileFormat = !1, e.showSelectImageValidation = !0, e.ShowfileSizeValidation = !1, e.greeting = "Hola!", e.show_exampale = 1, e.currentStep = 1, e.serverErrorMassage = !1, e.showMarker = !1, e.oneAtATime = !0, e.status = {
        isCustomHeaderOpen: !1,
        isFirstOpen: !0,
        isFirstDisabled: !1
    };
    var c = new Date;
    e.nieuws = {inleiding: "", titel: ""}, e.input = {
        id: "",
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
        myDate: c,
        dag: c.getDate(),
        maand: a(c.getMonth()),
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
        adres: {nummer: "", straat: "", provincie: "", postCode: "", gewest: "", stad: "", land: ""}
    }, e.blurSearch = function () {
        r(function () {
            e.search_show = !1
        }, 200)
    }, e.search_all_resualt = "", e.zoeken = function (t) {
        i({method: "POST", url: ROUTEFRONT + "/api/zoeken/alles", data: {input: t}}).success(function (t) {
            console.log(t), e.search_all_resualt = t
        }).error(function (e, t, n, i) {
            console.log("error bij het zoeken")
        })
    }, e.wearPrognose = {}, e.initweaterPrognose = function () {
        console.log("weater"), i({method: "GET", url: ROUTEFRONT + "/api/get/wheater/f"}).success(function (t) {
            var n = ["Tornado", "Tropische storm", "Orkaan", "Onweersbui", "Onweer", "Gemengde regen en sneeuw", "Gemengde regen en sleet", "Gemengde sneeuw en sleet", "Bevroren motregen", "Motregen", "Ijskoude regen", "Douches", "Douches", "Sneeuwvlotten", "Lichte sneeuwbuien", "Sneeuw blazen", "Sneeuw", "Wees gegroet", "Natte sneeuw", "Stof", "Mistig", "Nevel", "Rokerig", "Stormachtige", "Winderig", "Koude", "Bewolkt", "Meestal bewolkt (nacht)", "Meestal bewolkt (dag)", "Gedeeltelijk bewolkt (nacht)", "Gedeeltelijk bewolkt (dag)", "Heldere nacht)", "Zonnig", "Eerlijk (night)", "Eerlijk (dag)", "Gemengde regen en hagel", "Warm", "Geïsoleerde onweersbui", "Verspreide onweersbui", "Verspreide onweersbui", "Verspreide douches", "zware sneeuw", "Verspreide sneeuwbuien", "zware sneeuw", "Half bewolkt", "Onweersbuien", "Sneeuwbuien", "Geïsoleerde onweersbuien"], i = ["Mon", "Ma", "Tue", "Di", "Wed", "Wo", "Thu", "Do", "Fri", "Vr", "Sat", "Za", "Sun", "Zo"], o = t.weater.query.results.channel, r = o.item.condition.code;
            e.wearPrognose = {
                vandaag: {
                    humidity: o.atmosphere.humidity,
                    pressure: Math.floor(o.atmosphere.rising),
                    windDirection: Math.floor(o.wind.direction),
                    moon: {icon: t.moon, moonPhase: t.moonPhase},
                    wind: o.wind.speed,
                    temp: o.item.condition.temp,
                    icon: "wi-yahoo-" + r,
                    text: n[r]
                },
                voorspeling: {
                    1: {
                        low: o.item.forecast[0].low,
                        high: o.item.forecast[0].high,
                        day: i[i.indexOf(o.item.forecast[0].day) + 1],
                        icon: "wi-yahoo-" + Math.floor(o.item.forecast[0].code)
                    },
                    2: {
                        low: o.item.forecast[1].low,
                        high: o.item.forecast[1].high,
                        day: i[i.indexOf(o.item.forecast[1].day) + 1],
                        icon: "wi-yahoo-" + Math.floor(o.item.forecast[1].code)
                    },
                    3: {
                        low: o.item.forecast[2].low,
                        high: o.item.forecast[2].high,
                        day: i[i.indexOf(o.item.forecast[2].day) + 1],
                        icon: "wi-yahoo-" + Math.floor(o.item.forecast[2].code)
                    }
                }
            }, console.log("weater", o.item.forecast[2].code)
        })
    }, e.initAanpasenWedstrijd = function (t, n, i, o, r, a, s, l, p, c, g, d, m, h, w, f, v, y) {
        e.currentStep++, e.input.aanpasen = t, u(n, i), e.input.lat = n, e.input.lng = i, e.input.titel = o, e.imageSrc = r, e.input.type = a, e.input.visserij = c, e.input.hengel = p, e.input.category = l, e.input.prijzen = s, e.input.kostprijs = Number(g), e.input.wedstrijdduur = d, e.input.wedstrijdwater = m;
        var S = h, k = (S = S.split("-"))[1] + "," + S[2] + "," + S[0];
        e.input.myDate = new Date(k), e.input.dag = w, e.input.maand = f, e.input.loting = v, e.input.text = y, e.showSelectImageValidation = !1, e.showImageInvalideFileFormat = !1, e.showSelectImageValidation = !1, e.showMarker = !0, console.log("wedstrijd")
    }, e.initAanpasenVisplaats = function (t, n, i, o, r, a, s, l, p, c, g, d, m, h, w, f) {
        e.currentStep++, console.log(a), e.input.aanpasen = t, u(n, i), e.input.lat = n, e.input.lng = i, e.input.naam_visplek = o, e.imageSrc = r, e.input.type = a, e.input.watertype = s, e.input.viswater = l, e.input.reglementen = p, e.input.vergunigen = c, e.input.toilet = d, e.input.nachvissen = g, e.input.betaalwater = m, e.input.prive = h, e.input.vissoorten = w, e.input.text = f, e.showSelectImageValidation = !1, e.showImageInvalideFileFormat = !1, e.showSelectImageValidation = !1, e.showMarker = !0, console.log("plaats")
    }, e.initializeProfiel = function (t, n, i, o, r, a, s, l, p, c, g) {
        e.marker.coords = {
            latitude: n,
            longitude: i
        }, e.input.naam = t, e.input.lat = n, e.input.lng = i, u(n, i), e.input.ervaring = o, e.input.geslacht = r, e.input.leeftijd = Number(a), e.input.kostprijs = Number(s), e.input.text = l, e.imageSrc = p, e.input.telefonnummer = c, e.showImageInvalideFileFormat = !g, e.showSelectImageValidation = !g, e.showMarker = !0, console.log("Profiel")
    }, e.faqinit = function (t, n) {
        e.vraag = t, e.antwoord = n
    }, e.initAanpassenNieuwsArtikel = function (t, n, i) {
        e.nieuws = {inleiding: n, titel: t}, e.imageSrc = i
    };
    var g = new Date;
    e.minAge = new Date(g.getFullYear() - 18, g.getMonth(), g.getDate()), e.getAgeOfuser = function () {
    }, e.initVisersPlek = function (t) {
        e.input.watertype = t
    }, e.initTrainerfunction = function (t) {
        e.input.naam = t
    }, e.initContest = function (t, n, i) {
        e.input.category = t, e.input.hengel = n, e.input.visserij = i
    }, e.tutorialCategory = "", e.initTutorialCategory = function (t, n, i, o) {
        e.tutorialCategory = i, e.nieuws.titel = t, e.nieuws.inleiding = n, e.imageSrc = o
    }, e.submitNieuwForm = function () {
        e.showError = !1, $("form").get(0).setAttribute("action", "test.html"), document.getElementById("submitNieuwForm").submit(), !e.nieuwForm.$valid || e.showImageInvalideFileFormat || e.showSelectImageValidation ? e.showError = !0 : e.showError = !1
    }, e.submitFormProfiel = function () {
        console.log("send form"), !e.visTrainerForm.$valid || e.showImageInvalideFileFormat || e.showSelectImageValidation ? e.showError = !0 : (e.showError = !1, document.getElementById("submitNieuwForm").submit())
    }, e.submitForm = function () {
        e.showError = !1, p.append("input", [e.input.id]), !(e.visPlekForm.$valid || e.visTrainerForm.$valid || e.visWedstrijdForm.$valid) || e.showImageInvalideFileFormat || e.showSelectImageValidation ? e.showError = !0 : (e.showError = !1, e.model = {
            name: "",
            comments: ""
        }, i({
            method: "POST",
            url: ROUTEFRONT + "/api/add/content",
            headers: {"Content-Type": void 0},
            transformRequest: function (e) {
                var t = new FormData;
                return t.append("input", angular.toJson(e.input)), t.append("file", e.file), t
            },
            data: {input: e.input, file: e.file}
        }).success(function (t, n, i, o) {
            "success" == t ? (e.serverErrorMassage = !1, e.currentStep++) : e.serverErrorMassage = !0
        }).error(function (t, n, i, o) {
            e.serverErrorMassage = !0
        }))
    }, e.getFile = function () {
        p.append("file", e.file), e.progress = 0, n.readAsDataUrl(e.file, e).then(function (t) {
            e.imageSrc = t
        })
    }, e.$on("fileProgress", function (t, n) {
        e.progress = n.loaded / n.total
    }), e.$watch("input.myDate", function () {
        var t = e.input.myDate;
        e.input.dag = t.getDate(), e.input.maand = a(t.getMonth())
    }), e.steps = [{
        step: 1,
        url: "",
        glyphicon: "glyphicon-bullhorn",
        description: "Artikel",
        name: "First step",
        template: "step1"
    }, {
        step: 2,
        url: "",
        glyphicon: "glyphicon-map-marker",
        description: "Locatie",
        name: "Second step",
        template: "step2"
    }, {
        step: 3,
        url: "",
        glyphicon: "glyphicon-pencil",
        description: "Formulier",
        name: "Third step",
        template: "step3"
    }, {
        step: 4,
        url: "",
        glyphicon: "glyphicon-ok",
        description: "Opgeslagen",
        name: "Third step",
        template: "step3"
    }], e.gotoStep = function (t) {
        e.currentStep = t, s()
    }, e.progress_clicked = function (t) {
        t < e.currentStep && e.gotoStep(t)
    }, e.prev = function () {
        e.currentStep > 1 && e.currentStep--, s()
    }, e.next = function () {
        e.currentStep < 4 && e.currentStep++, console.log(e.currentStep)
    }, e.putValue = function (t) {
        switch (e.input.type = t, console.log(t), t) {
            case"recept":
                e.steps[1].glyphicon = "glyphicon-map-marker", e.steps[2].glyphicon = "glyphicon-pencil"
        }
    }, e.mapAdd = {
        center: {latitude: center.latitude, longitude: center.longitude},
        options: {scrollwheel: !1, minZoom: 7, maxZoom: 17},
        control: {refresh: {latitude: center.latitude, longitude: center.longitude}},
        searchbox: {
            template: "searchbox.tpl.html", events: {
                places_changed: function (t) {
                    console.log("search pleas");
                    var n = t.getPlaces()[0].geometry.location;
                    console.log(t.getPlaces());
                    var i = n.lat(), o = n.lng();
                    e.mapAdd.center.latitude = i, e.mapAdd.center.longitude = o, e.mapAdd.zoom = 15, l(n.lat(), n.lng()), e.adress(n.lat(), n.lng())
                }
            }, options: {autocomplete: !1, types: ["(cities)"], componentRestrictions: {country: ["be", "nl"]}}
        },
        zoom: 10,
        events: {
            click: function (t, n, i) {
                console.log(t.data);
                var o = i[0].latLng;
                l(o.lat(), o.lng()), e.adress(o.lat(), o.lng())
            }
        }
    }, e.adress = function (t, n) {
        i({
            method: "GET",
            url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + t + "," + n + "&key=AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4"
        }).success(function (t) {
            console.log(t);
            var n = t.results[0].address_components, i = "", o = "", r = "", a = "", s = "", l = "", u = "";
            n[0] && (i = n[0].long_name), n[1] && (o = n[1].long_name), n[3] && (r = n[3].long_name), n[6] && (a = n[6].long_name), n[4] && (s = n[4].long_name), n[2] && (l = n[2].long_name), n[5] && (u = n[5].long_name), e.input.adres = {
                nummer: i,
                straat: o,
                provincie: r,
                postCode: a,
                gewest: s,
                stad: l,
                land: u
            }, console.log(e.input.adres)
        }).error(function () {
            console.log("iets fout met ophalen van adress")
        })
    }, e.marker = {id: 1, coords: {latitude: "", longitude: ""}, options: ""}, t.then(function (t) {
        e.googleMaps = !0
    })
}]);
myApp.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4',
        v: '3.20',
        libraries: "places,geometry,visualization"
    });
});
myApp.config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function (date) {
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
!function (e) {
    var n = function (e, n) {
        var a = function (e, n, a) {
            return function () {
                a.$apply(function () {
                    n.resolve(e.result)
                })
            }
        }, r = function (e, n, a) {
            return function () {
                a.$apply(function () {
                    n.reject(e.result)
                })
            }
        }, i = function (e, n) {
            return function (e) {
                n.$broadcast("fileProgress", {total: e.total, loaded: e.loaded})
            }
        }, t = function (e, n) {
            var t = new FileReader;
            return t.onload = a(t, e, n), t.onerror = r(t, e, n), t.onprogress = i(0, n), t
        };
        return {
            readAsDataUrl: function (n, a) {
                var r = e.defer();
                return t(r, a).readAsDataURL(n), r.promise
            }
        }
    };
    e.factory("fileReader", ["$q", "$log", n])
}(angular.module("myApp")), myApp.directive("ngFileSelect", function () {
    return {
        link: function (e, n) {
            n.bind("change", function (n) {
                e.file = (n.srcElement || n.target).files[0];
                var a = e.file.name.match(/\.(.+)$/)[1];
                "jpg" === angular.lowercase(a) || "jpeg" === angular.lowercase(a) || "png" === angular.lowercase(a) ? (e.showImageInvalideFileFormat = !1, e.ShowfileSizeValidation = !0, e.file.size < MAX_SIZE && (e.ShowfileSizeValidation = !1, e.showSelectImageValidation = !1, e.input.file = e.file, e.getFile())) : e.showImageInvalideFileFormat = !0, e.$apply()
            })
        }
    }
});
myApp.controller("GoogleMapsConroller", ["$scope", "$http", function (e, t) {
    function n(t, n) {
        var a = {
            latitude: t.lat,
            longitude: t.lng,
            info: {
                id: t.id,
                titel: t.titel.substring(0, 40),
                text: t.text.substring(0, 100),
                type: t.type,
                image: "uploads/thumbnail/" + t.image
            }
        };
        a.id = t.id, "plaats" == n && e.plaatsMarkers.push(a), "trainer" == n && e.trainerMarkers.push(a), "wedstrijd" == n && e.wedsrijdMarkers.push(a)
    }

    function a() {
        e.plaatsMarkers = [], e.trainerMarkers = [], e.wedsrijdMarkers = []
    }

    function r(t) {
        console.log(t), e.map.center.latitude = t.lat(), e.map.center.longitude = t.lng(), e.map.zoom = 15
    }

    function o(n) {
        var a, r = new c, o = "", l = "", u = new Date, h = "", d = "", g = "", f = "";
        e.calender = {
            titel: "",
            prev: "",
            next: "",
            offset: "",
            html: ""
        }, o = n || u.getFullYear() + "-" + (Number(u.getMonth()) + 1), !1 === (l = new Date(o)) && (l = s()), h = i(l.getMonth()) + "-" + l.getFullYear(), e.calender.titel = h, d = l.getFullYear() + "-" + l.getMonth(), 0 == l.getMonth() && (d = l.getFullYear() - 1 + "-12"), e.calender.prev = d, g = l.getFullYear() + "-" + (l.getMonth() + 2), l.getMonth() >= 11 && (g = l.getFullYear() + 1 + "-1"), e.calender.next = g, f = new Date(l.getFullYear(), l.getMonth() + 1, 0).getDate();
        var p = l.getFullYear(), m = l.getMonth() + 1, M = 0 === l.getDay() ? 0 : l.getDay();
        M = Number(M);
        var k = (a = new Date).getMonth() + 1;
        a = a.getDate();
        for (var v = [], y = [], w = [1, 2, 12, 13, 14, 15, 16, 26, 27, 28, 29, 30], D = [11, 17, 18, 23, 24, 25], O = [4, 5, 6, 7, 8, 19], T = [3, 9, 10, 20, 21, 22], E = 0; E < M; E++)v.push({
            day: "",
            today: !1,
            activity: ""
        });
        for (E = 1; E <= f; E++) {
            var b = "", j = E;
            a == E && k == m && (b = "today");
            var F = new Date(l.getFullYear(), l.getMonth(), l.getDate() + (E - 1)), R = r.NowMoonDay(F), Y = "";
            -1 != w.indexOf(R) && (Y = "fish-bad"), -1 != D.indexOf(R) && (Y = "fish-meddium"), -1 != O.indexOf(R) && (Y = "fish-veryGood"), -1 != T.indexOf(R) && (Y = "fish-good"), v.push({
                day: j,
                today: b,
                activity: "",
                fishActivity: Y
            }), M % 7 != 6 && j != f || (y.push(v), v = []), M++
        }
        e.calender.html = y, console.log(e.calender.html), t({
            method: "GET",
            url: ROUTEFRONT + "/api/get/wedstrijden/" + p + "/" + m
        }).success(function (e) {
            var t = [];
            angular.forEach(y, function (n, a) {
                angular.forEach(n, function (n, r) {
                    t = [], angular.forEach(e, function (a, r) {
                        var o = new Date(a.datum).getDate();
                        n.day == o && (t.push(a), e.splice(r, 1))
                    }), y[a][r].activity = t
                })
            })
        }).error(function () {
            console.log("iets fout met ophalen van wedstrijden")
        })
    }

    function i(e) {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e].substring(0, 3)
    }

    function s() {
        return Math.floor((new Date).getTime() / 1e3)
    }

    e.plaatsMarkers = [], e.trainerMarkers = [], e.wedsrijdMarkers = [], e.zoekenOpGoogleMapsnaarGidsen = function (e) {
        t({method: "POST", url: ROUTEFRONT + "/api/zoeken/googleMaps/gids", data: {input: e}}).success(function (e) {
            a(), angular.forEach(e, function (e, t) {
                angular.forEach(e, function (e, a) {
                    n(e, t)
                })
            })
        }).error(function (e, t, n, a) {
            console.log("error bij het zoeken")
        })
    }, e.zoekenOpGoogleMapsnaarVisPlatsen = function (e) {
        t({
            method: "POST",
            url: ROUTEFRONT + "/api/zoeken/googleMaps/visPlatsen",
            data: {input: e}
        }).success(function (e) {
            a(), angular.forEach(e, function (e, t) {
                angular.forEach(e, function (e, a) {
                    n(e, t)
                })
            })
        }).error(function (e, t, n, a) {
            console.log("error bij het zoeken")
        })
    }, e.zoekenOpGoogleMaps = function (e) {
        t({method: "POST", url: ROUTEFRONT + "/api/zoeken/googleMaps", data: {input: e}}).success(function (e) {
            a(), angular.forEach(e, function (e, t) {
                angular.forEach(e, function (e, a) {
                    n(e, t)
                })
            })
        }).error(function (e, t, n, a) {
            console.log("error bij het zoeken")
        })
    };
    var l = 0;
    e.initVisPlaatsmarkers = function () {
        t({method: "GET", url: ROUTEFRONT + "/api/get/markers/visPlaats"}).success(function (e) {
            angular.forEach(e, function (e, t) {
                n(e, "plaats")
            })
        }).error(function () {
            ++l < 5 && e.initVisPlaatsmarkers(), console.log("iets verkeerd met api call bij visplaatsen aanvraag")
        })
    }, e.initTrainersmarkers = function () {
        t({method: "GET", url: ROUTEFRONT + "/api/get/markers/trainers"}).success(function (e) {
            angular.forEach(e, function (e, t) {
                n(e, "trainer")
            })
        }).error(function () {
            ++l < 5 && e.initTrainersmarkers(), console.log("iets verkeerd met api call bij trainer aanvraag")
        })
    }, e.initWedstrijdmarkers = function () {
        t({method: "GET", url: ROUTEFRONT + "/api/get/markers/wedstrijden"}).success(function (e) {
            angular.forEach(e, function (e, t) {
                n(e, "wedstrijd")
            })
        }).error(function () {
            ++l < 5 && e.initWedstrijdmarkers(), console.log("iets verkeerd met api call bij visplaatsen aanvraag")
        })
    }, e.options = {
        autocomplete: !0,
        types: ["(cities)"],
        componentRestrictions: {country: "be"}
    }, e.map = {
        center: {latitude: center.latitude, longitude: center.longitude},
        searchbox: {
            template: "searchbox.tpl.html", events: {
                place_changed: function (e) {
                    place = e.getPlace(), r(place.geometry.location)
                }
            }, options: {autocomplete: !0, types: ["(cities)"], componentRestrictions: {country: ["be", "nl"]}}
        },
        options: {scrollwheel: !1, minZoom: 7, maxZoom: 17},
        zoom: 8,
        markers: {
            wedstrijd: {
                events: {
                    click: function (t) {
                        console.log("marker kicked", t.model.title), e.markerTitel = t.model.title, e.map.markers.wedstrijd.wedstrijdWindowShow = !0, e.$apply()
                    }
                }, wedstrijdWindowShow: !1
            }
        }
    }, e.changeCalenderMonth = function (e) {
        o(e)
    }, e.toon_wedstrijd_list = function (e) {
        e.length && (a(), angular.forEach(e, function (e, t) {
            n(e, "wedstrijd"), console.log(e)
        }))
    };
    var c = new Object;
    c = function () {
        this.Day = 0, this.Month = 0, this.Year = 0, this.GetMoonDay = function (e, t, n) {
            this.Day = e, this.Month = t, this.Year = n, t <= 2 && (t += 12, n -= 1);
            var a = Math.floor(n / 100), r = Math.floor(a / 3) + Math.floor(a / 4) + 6 - a, o = n / 19, i = (209 * (o - parseInt(o)) + t + e + r) / 30;
            return Math.round(30 * (i - parseInt(i)) + 1)
        }, this.SetNowDate = function (e) {
            if (e)t = e; else var t = new Date;
            this.Day = t.getDate(), this.Month = t.getMonth() + 1, this.Year = t.getYear(), this.Year < 1e3 && (this.Year += 1900)
        }, this.NowMoonDay = function (e) {
            return this.SetNowDate(e), this.GetMoonDay(this.Day, this.Month, this.Year)
        }
    }, o()
}]);
myApp.controller("vissersActiviteitenController", ["$scope", "$http", "$cookies", "$timeout", "$window", function (e, t, a, o, n) {
    function s(t, a) {
        e.visvanstMapMarker.coords = {latitude: t, longitude: a}, e.visVagst.lat = t, e.visVagst.lng = a
    }

    e.ShowvisActiviteitenPopUp = !a.get("visActiviteitenWeek"), e.showModalVisActiviteiten = !1, e.animatePopUp = !1, e.visVagnstShowGoolgeMaps = !1, e.visvanstMapMarkershowMarker = !1, a.get("visActiviteitenWeek") || o(function () {
        e.animatePopUp = !a.get("visActiviteitenWeek")
    }, 3e4);
    var i = new Date;
    e.visVagst = {
        id: "",
        vissen: [{aantal: 0, soort: ""}],
        lat: "",
        lng: "",
        gevangen: "3",
        nietGevangen: "3",
        vangst: "",
        myDate: i,
        isOpen: !1
    }, e.nogEenVisSoort = function () {
        e.visVagst.vissen.push({aantal: 0, soort: ""})
    }, e.verwijderVisSoort = function (t) {
        e.visVagst.vissen.splice(t, 1)
    }, e.minDate = new Date(i.getFullYear(), i.getMonth() - 1, i.getDate()), e.maxDate = new Date(i.getFullYear(), i.getMonth(), i.getDate());
    var r = i;
    e.onlyWeekendsPredicate = function (e) {
        var t = e.getDate(), a = e.getMonth();
        return console.log("day", a), t <= r.getDate() || a < r.getMonth()
    }, e.submitVisVangstModalForm = function () {
        e.visVangstModalForm.$valid ? (console.log("send form"), e.showError = !1, e.model = {
            name: "",
            comments: ""
        }, t({
            method: "POST",
            url: ROUTEFRONT + "/api/save/visVangst",
            data: {input: e.visVagst}
        }).success(function (t, a, o, s) {
            console.log(t), e.serverErrorMassage = "success" != t, l && (n.location.reload(), console.log("reload page now"))
        }).error(function (t, a, o, n) {
            e.serverErrorMassage = !0
        }), e.show_message = !0) : e.showError = !0
    }, e.visvanstMap = {
        center: {latitude: center.latitude, longitude: center.longitude},
        options: {scrollwheel: !1, minZoom: 7, maxZoom: 17},
        control: {refresh: {latitude: center.latitude, longitude: center.longitude}},
        searchbox: {
            template: "searchbox.tpl.html", events: {
                places_changed: function (t) {
                    var a = t.getPlaces()[0].geometry.location;
                    console.log(t.getPlaces());
                    var o = a.lat(), n = a.lng();
                    e.visvanstMap.center.latitude = o, e.visvanstMap.center.longitude = n, e.visvanstMap.zoom = 15, e.visvanstMapMarkershowMarker = !0, s(a.lat(), a.lng()), e.$apply()
                }
            }, options: {autocomplete: !1, types: ["(cities)"], componentRestrictions: {country: ["be", "nl"]}}
        },
        zoom: 10,
        events: {
            click: function (t, a, o) {
                console.log(t.data);
                var n = o[0].latLng;
                e.visvanstMapMarkershowMarker = !0, s(n.lat(), n.lng()), e.$apply()
            }
        }
    }, e.visvanstMapMarker = {id: 1, coords: {latitude: "", longitude: ""}, options: ""};
    var l = !1;
    e.reloadPgage = function (e) {
        l = e
    }, e.saveViserActiviteit = function (t) {
        e.show_message = !1, e.animatePopUp = !1, e.vangstVanVandaag = function () {
            e.show_gevangen = e.visVagst.vangst, e.visVagnstShowGoolgeMaps = !0
        };
        var o = new Date;
        o.setDate(o.getDate() + 1), a.put("visActiviteitenWeek", "false", {expires: o}), "ja" == t && e.$watch("visVagst.myDate", function () {
            var t = e.visVagst.myDate;
            console.log(t)
        })
    }
}]);
myApp.controller("GenericChartCtrl", ["$scope", "$http", "$timeout", function (e, n, t) {
    function a(n) {
        e.myChartObject.data = {
            cols: [{id: "t", label: "Soort", type: "string"}, {
                id: "s",
                label: "Aantal",
                type: "number"
            }], rows: n
        }, e.myChartObject.options = {title: "Percentual gevangen vissoorten"}
    }

    function o(n) {
        e.totaalAantalVissenGevangen.data = {
            cols: [{id: "t", label: "Soort", type: "string"}, {
                id: "s",
                label: "Aantal",
                type: "number"
            }], rows: n
        }, e.totaalAantalVissenGevangen.options = {title: "Aantal gevangen vissoorten per soort"}
    }

    e.myChartObject = {}, e.totaalAantalVissenGevangen = {}, e.alleVisOpDag = "", e.myChartObject.type = "PieChart", e.totaalAantalVissenGevangen.type = "ColumnChart", e.onions = [{v: "Onions"}, {v: 3}], e.initUser = function (l) {
        console.log("user", l);
        l.length && t(function () {
            n({method: "POST", url: ROUTEFRONT + "/api/get/pieChart", data: {id: l}}).success(function (e, n, t, l) {
                $soortValues = [], angular.forEach(e, function (e, n) {
                    var t = 0;
                    angular.forEach(e, function (e, n) {
                        t += e.aantal
                    }), $soortValues.push({c: [{v: n}, {v: t}]})
                }), a($soortValues), o($soortValues)
            })
        }, 200), l.length && t(function () {
            n({method: "POST", url: ROUTEFRONT + "/api/get/alleVissen", data: {id: l}}).success(function (n, t, a, o) {
                console.log(n), e.alleVisOpDag = n
            })
        }, 200)
    }, e.visDagGegevens = "", e.toggelOccordion = function (t, a) {
        n({method: "POST", url: ROUTEFRONT + "/api/get/visWeer", data: {id: a}}).success(function (n, t, a, o) {
            console.log(n), e.visDagGegevens = n
        }), $(".panel-footer").hide();
        var o = angular.element(t.currentTarget), l = o.children()[0];
        $(".glyphicon").removeClass("glyphicon-chevron-down"), $(l).find(".glyphicon").addClass("glyphicon-chevron-down");
        var s = o.children()[1];
        $(s).slideToggle(200)
    }
}]);
myApp.controller("GoogleMapsSmaalConroller", ["$scope", function (o) {
    o.map = {options: {scrollwheel: !1, minZoom: 7, maxZoom: 17}, zoom: 10}
}]);


myApp.controller("coockieSetController", ["$scope", "$cookies", function (o, e) {
    o.show_cookie_accesp = !e.get("cookieFishingFriendsAccord"), o.show_cookie_accesp_action = function () {
        console.log("klick");
        var c = new Date;
        c.setDate(c.getDate() + 30), e.put("cookieFishingFriendsAccord", "true", {expires: c}), o.show_cookie_accesp = !1
    }
}]);






