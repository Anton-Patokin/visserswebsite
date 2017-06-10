<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi">
    <link rel="shortcut icon" href="{{url('/images/icon/favicon.png')}}" type="image/x-icon">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    {{--<!-- Scripts -->--}}
    {{--<script>--}}
    {{--window.Laravel = {!! json_encode([--}}
    {{--'csrfToken' => csrf_token(),--}}
    {{--]) !!};--}}
    {{--</script>--}}
    @yield('head')
</head>
<body ng-app="myApp" ng-controller="MainController" class="background-gray">
@include('layouts.top')
@include('layouts.banner')
@include('layouts.middel')
@include('layouts.bottom')
<div id="app">
    @yield('content')
</div>

<button id="go_top" class="btn btn-default button-up"><i class="glyphicon glyphicon-menu-up"></i></button>

@if(Auth::user())
@include('actions.vis-vangst')
@endif
@include('components.footer')

        <!-- Scripts -->
{{--<script src="{{url('/js/angular-min.js')}}"></script>--}}
{{--<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js"></script>--}}
{{--<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-animate.min.js"></script>--}}
{{--<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4&libraries=places&sensor=false"></script>--}}
{{--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4&libraries=places" async defer></script>--}}
<script>var ROUTEFRONT = 'https://www.fishingfriends.be';</script>
<script type="text/javascript" src="{{url('/js/libs/angular.min.js')}}"></script>

<script type="text/javascript" src="{{url('/js/libs/lodash.min.js')}}"></script>

<script src="{{url('/js/libs/angular-simple-logger.min.js')}}"></script>
<script src="{{url('/js/libs/angular-google-maps.js')}}"></script>
<script src="{{url('/js/libs/angular-messages.js')}}"></script>

//test
<script src="{{url('/js/libs/angular-animate.min.js')}}"></script>
<script src="{{url('/js/libs/angular-aria.min.js')}}"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-messages.min.js"></script>--}}
<script src="{{url('/js/libs/angular-material.min.js')}}"></script>
{{--<script src="{{url('/js/libs/ngAutocomplete.js')}}"></script>--}}
<script src="{{ asset('js/base.js') }}"></script>
<script src="{{url('/js/file-reader.js')}}"></script>
<script src="{{url('/js/MainGoogleMaps.js')}}"></script>
<script src="{{asset('js/vissersActiviteiten.js')}}"></script>
<script src="{{asset('js/GenericChartCtrl.js')}}"></script>
<script src="{{url('/js/smallGoogleMaps.js')}}"></script>
<script type="text/javascript" src="{{url('/js/libs/angular-cookies.min.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-google-chart/1.0.0-beta.1/ng-google-chart.min.js" type="text/javascript"></script>

<script src="{{ asset('js/app.js') }}"></script>
<script id="searchbox.tpl.html" type="text/ng-template">
    <input class="form-search input-sm" type="text" placeholder="Locatie" z-index="50000">
</script>
<link href="{{ asset('css/angular-material.min.css') }}" rel="stylesheet">

<script>
    $(document).ready(function () {

        $(document).scroll(function ($this) {

            var y = window.scrollY;
            if (y >= 400) {
                $('#go_top').fadeIn();
            } else {
                $('#go_top').fadeOut();
            }


        })
        $('#go_top').click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        })

        $('[data-toggle="tooltip"]').tooltip();

        if ($("#vertikalscroll").length) {
            console.lo
            var scrolled = 0;
            var maxScroll = $("#vertikalscroll")[0].scrollHeight - 300;
            var move = false;
            var moveSize = 300;
            $("#go-to-top").hide();
            var moveDown = true;


            if (maxScroll < 400) {
                $("#go-to-bottom").hide();
                $("#go-to-top").hide();
            } else {
                setInterval(function () {
                    if (moveDown) {
                        if (!move) {
                            move = true;
                            scrolled = scrolled + moveSize;
                            $("#go-to-top").show();
                            if (scrolled > maxScroll) {
                                scrolled = maxScroll;
                                scrolled = maxScroll - moveSize;
                                $("#go-to-bottom").hide();
                                moveDown = false;
                            }
                            scrolY(scrolled)
                        }
                    } else {
                        if (!move) {
                            move = true;
                            scrolled = scrolled - moveSize;
                            $("#go-to-bottom").show();

                            if (scrolled < 0) {
                                scrolled = 0
                                moveDown = true;
                                $("#go-to-top").hide();
                            }
                            scrolY(scrolled)
                        }
                    }

                }, 5000);
            }

            $("#go-to-bottom").on("click", function () {
                if (!move) {
                    move = true;
                    scrolled = scrolled + moveSize;
                    $("#go-to-top").show();
                    if (scrolled > maxScroll) {
                        scrolled = maxScroll;
                        scrolled = maxScroll - moveSize;
                        $("#go-to-bottom").hide();

                    }
                    scrolY(scrolled)
                }
            });
            $("#go-to-top").on("click", function () {
                if (!move) {
                    move = true;
                    scrolled = scrolled - moveSize;
                    $("#go-to-bottom").show();

                    if (scrolled < 0) {
                        scrolled = 0
                        $("#go-to-top").hide();
                    }
                    scrolY(scrolled)
                }
            });
            function scrolY(scroll) {
                $("#vertikalscroll").animate({
                    scrollTop: scrolled
                }, 2000, function () {
                    move = false;
                });
            }

            $(".clearValue").on("click", function () {
                scrolled = 0;
            });
        }
    });
</script>

@yield('script')

</body>
</html>
