<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

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
<body ng-app="myApp" ng-controller="MainController">
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

<script>var ROUTEFRONT='http://localhost/einddwerk_visserswebsite/visserswebsite/public';</script>
<script type="text/javascript" src="{{url('/js/libs/angular.min.js')}}"></script>


<script type="text/javascript" src="{{url('/js/libs/lodash.min.js')}}"></script>

<script src="{{url('/js/libs/angular-simple-logger.min.js')}}"></script>
<script src="{{url('/js/libs/angular-google-maps.js')}}"></script>
<script src="{{url('/js/libs/angular-animate.min.js')}}"></script>
<script src="{{url('/js/libs/angular-aria.min.js')}}"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-messages.min.js"></script>--}}
<script src="{{url('/js/libs/angular-material.min.js')}}"></script>




<script src="{{ asset('js/base.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
