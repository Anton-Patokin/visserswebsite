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

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
