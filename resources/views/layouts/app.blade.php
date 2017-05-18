<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi">
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
<body ng-app="myApp" ng-controller="MainController"  class="background-gray">
<style>
    .background-gray{
        /*background-color: #f5f5f5;*/
    }
</style>
@include('layouts.top')
@include('layouts.banner')
@include('layouts.middel')
@include('layouts.bottom')

<div id="app">
    @yield('content')
</div>

<!-- Scripts -->
{{--<script src="{{url('/js/angular-min.js')}}"></script>--}}
{{--<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js"></script>--}}
{{--<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-animate.min.js"></script>--}}
{{--<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4&libraries=places&sensor=false"></script>--}}
{{--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJBGY58S0ptq6KlFxYIpNLTIEW8mBKhk4&libraries=places" async defer></script>--}}
<script>var ROUTEFRONT='http://localhost/einddwerk_visserswebsite/visserswebsite/public';</script>
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
@yield('script')

</body>
</html>
