<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi">
    <link rel="shortcut icon" href="{{url('/images/icon/favicon.png')}}" type="image/x-icon">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Fishing Friends') }}</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
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
{{url('')}}
@if(url('/')== 'https://fishingfriends.be')
    <script>var ROUTEFRONT = '';</script>

@else
    <script>var ROUTEFRONT = 'http://localhost/einddwerk_visserswebsite/visserswebsite/public';</script>

@endif
<script type="text/javascript" src="{{url('/js/libs/angular.min.js')}}"></script>
<script type="text/javascript" src="{{url('/js/libs/lodash.min.js')}}"></script>
<script type="text/javascript" src="{{url('/js/libs/angular-simple-logger.min.js')}}"></script>
<script type="text/javascript" src="{{url('/js/libs/angular-google-maps.js')}}"></script>
<script type="text/javascript" src="{{url('/js/libs/angular-messages.js')}}"></script>
<script type="text/javascript" src="{{url('/js/libs/angular-animate.min.js')}}"></script>
<script type="text/javascript" src="{{url('/js/libs/angular-aria.min.js')}}"></script>
<script type="text/javascript" src="{{url('/js/libs/angular-material.min.js')}}"></script>
<script type="text/javascript" src="{{ asset('js/base.js') }}"></script>
<script type="text/javascript" src="{{url('/js/libs/angular-cookies.min.js')}}"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-google-chart/1.0.0-beta.1/ng-google-chart.min.js"></script>

<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
<script id="searchbox.tpl.html" type="text/ng-template">
    <input class="form-search input-sm" type="text" placeholder="Locatie" z-index="50000">
</script>
<link href="{{ asset('css/angular-material.min.css') }}" rel="stylesheet">

<script async type="text/javascript">
    $(document).ready(function(){function o(o){$("#vertikalscroll").animate({scrollTop:t},2e3,function(){i=!1})}if($(document).scroll(function(o){window.scrollY>=400?$("#go_top").fadeIn():$("#go_top").fadeOut()}),$("#go_top").click(function(){$("html, body").animate({scrollTop:0},"slow")}),$('[data-toggle="tooltip"]').tooltip(),$("#vertikalscroll").length){console.lo;var t=0,l=$("#vertikalscroll")[0].scrollHeight-300,i=!1;$("#go-to-top").hide();var n=!0;l<400?($("#go-to-bottom").hide(),$("#go-to-top").hide()):setInterval(function(){n?i||(i=!0,t+=300,$("#go-to-top").show(),t>l&&(t=l,t=l-300,$("#go-to-bottom").hide(),n=!1),o(t)):i||(i=!0,t-=300,$("#go-to-bottom").show(),t<0&&(t=0,n=!0,$("#go-to-top").hide()),o(t))},5e3),$("#go-to-bottom").on("click",function(){i||(i=!0,t+=300,$("#go-to-top").show(),t>l&&(t=l,t=l-300,$("#go-to-bottom").hide()),o(t))}),$("#go-to-top").on("click",function(){i||(i=!0,t-=300,$("#go-to-bottom").show(),t<0&&(t=0,$("#go-to-top").hide()),o(t))}),$(".clearValue").on("click",function(){t=0})}});
</script>

@yield('script')

</body>
</html>
