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

</head>
<body ng-app="myApp" ng-controller="MainController" class="background-gray">

@include('layouts.top')
@include('layouts.banner')
@include('layouts.middel')
@include('layouts.bottom')

<div id="app">
    @yield('content')
</div>

<footer class="mt-5">
    <div class="container-fluid bg-faded mt-5">
        <div class="container-fluid">
            <div class="row margin-top-2 margin-bottom-2">
                <!-- footer column 1 start -->
                <div class="col-md-4">
                    <!-- row start -->
                    <div class="row">
                        <a href="https://www.facebook.com/groups/403149159889643/">
                            <div class="col-sm-3 hidden-md-down">
                                <div class="icon-background facebook"></div>
                            </div>
                        </a>
                        <div class="col-sm-9">
                            <h4>Facebook</h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip.
                            <a href="https://www.facebook.com/groups/403149159889643/"><p>meer</p></a>
                        </div>
                    </div>
                    <!-- row end -->
                </div>
                <!-- footer column 1 end -->
                <!-- footer column 2 start -->
                <div class="col-md-4">
                    <!-- row start -->
                    <div class="row">
                        <a href="{{url('/contact')}}">
                            <div class="col-sm-3 hidden-md-down">
                                <div class="icon-background home"></div>
                            </div>
                        </a>
                        <div class="col-sm-9">
                           <h4>Contacteer ons</h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            <p>Waarom niet?</p>
                            <a href="{{url('/contact')}}"><p>meer</p></a>
                        </div>
                    </div>
                    <!-- row end -->
                    <!-- row start -->
                    {{--<div class="row">--}}
                        {{--<a class=" " href="{{url('/cookie')}} ">--}}
                            {{--<div class="col-sm-3 hidden-md-down">--}}
                                {{--<a class="bg-circle bg-info" href="#">--}}
                                    {{--<i class="fa fa-2x fa-fw fa-laptop" aria-hidden="true "></i>--}}
                                {{--</a>--}}
                            {{--</div>--}}
                        {{--</a>--}}
                        {{--<div class="col-sm-9">--}}
                            {{--<h4>Cookie beleid</h4>--}}
                            {{--<p class=" ">Wij gebruiken <a class=" " href="{{url('/cookie')}} ">cookies </a></p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    <!-- row end -->
                </div>
                <!-- footer column 2 end -->
                <!-- footer column 3 start -->
                <div class="col-md-4">
                    <div class="row">
                        <a href="{{url('/over-ons')}}">
                            <div class="col-sm-3 hidden-md-down">
                                <div class="icon-background winkel"></div>
                            </div>
                        </a>
                        <div class="col-sm-9">
                            <h4>Info</h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            <a href="{{url('/over-ons')}}"><p>Over ons</p></a>
                        </div>
                    </div>
                    <!-- row ended -->
                </div>
                <!-- footer column 3 end -->
            </div>
        </div>
    </div>


    <div class="container-fluid bg-primary py-3">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-md-12 margin-top-1">
                    <p class="text-white">Gemaakt door Patokin anton</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Scripts -->
{{--<script src="{{url('/js/angular-min.js')}}"></script>--}}
{{--<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js"></script>--}}
{{--<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-animate.min.js"></script>--}}
{{--<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4&libraries=places&sensor=false"></script>--}}
{{--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4&libraries=places" async defer></script>--}}
<script>var ROUTEFRONT = 'http://localhost/einddwerk_visserswebsite/visserswebsite/public';</script>
<script type="text/javascript" src="{{url('/js/libs/angular.min.js')}}"></script>


<script type="text/javascript" src="{{url('/js/libs/lodash.min.js')}}"></script>

<script src="{{url('/js/libs/angular-simple-logger.min.js')}}"></script>
<script src="{{url('/js/libs/angular-google-maps.js')}}"></script>
<script src="{{url('/js/libs/angular-animate.min.js')}}"></script>
<script src="{{url('/js/libs/angular-aria.min.js')}}"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-messages.min.js"></script>--}}
<script src="{{url('/js/libs/angular-material.min.js')}}"></script>
{{--<script src="{{url('/js/libs/ngAutocomplete.js')}}"></script>--}}
<script src="{{ asset('js/base.js') }}"></script>
<script src="{{url('/js/file-reader.js')}}"></script>
<script src="{{url('/js/MainGoogleMaps.js')}}"></script>
<script src="{{url('/js/smallGoogleMaps.js')}}"></script>

<script src="{{ asset('js/app.js') }}"></script>
<script id="searchbox.tpl.html" type="text/ng-template">
    <input class="form-search input-sm" type="text" placeholder="Locatie">
</script>


@yield('script')

</body>
</html>
