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
<body>


<div id="nav-bar-top" class="navbar navbar-default navbar-static-top" role="navigation">


    <div class="container">
        <div class="col-md-2 col-sm-2 hidden-xs nopadding">
            <div id="brand-logo">
                <a href="{{url('/home')}}"> <img src="{{url('/images/logo/logo-with-background.jpg')}}" alt="Home"/></a>
            </div>
        </div>


        <div class="navbar-header"><a class="navbar-brand" href="{{url('/home')}}">Fishing Friends</a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-menubuilder">
                @if (Auth::guest())
                    <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span>
                    <span class="icon-bar"></span><span class="icon-bar"></span>
                @else
                    <a href="{{url("/user")}}"><span class="user-icon"><img
                                    src="{{url('/images/icon/user-icon.png')}}"></span>
                    </a>
                @endif
            </button>
        </div>
        <div class="col-md-10 col-sm-10 nopadding">

            <div class="collapse {{(Auth::guest())?'navbar-collapse navbar-menubuilder':''}} navbar-collapse ">
                <ul class="nav navbar-nav navbar-right">
                    @if (Auth::guest())
                        <li><a href="{{ route('login') }}">Login</a></li>
                        <li><a href="{{ route('register') }}">Register</a></li>
                    @else
                        <li><a id="user-fish-line-icon" href="#" class="dropdown-toggle" data-toggle="dropdown"
                               role="button"
                               aria-expanded="false"><span class="user-icon"><img
                                            src="{{url('/images/icon/user-icon.png')}}"></span>{{Auth::user()->name }}
                                <span
                                        class="caret pull-right"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                          style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid nav-top-img">
    <div class="row">
        <img src="{{url('/images/other/nav-top-baner.jpg')}}" id="bg" alt="">

    </div>
</div>


<div id="navbar-second">
    <nav class="navbar navbar-default" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="">
            <ul class="nav navbar-nav">
                <li class="active"><a href="{{url('/home')}}">Home</a></li>
                <li><a href="{{url('/dashboard')}}">Dashboard</a></li>
                <li><a href="{{url('/toevoegen')}}">Toevoegen</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</div>


<div id="app">
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    &nbsp;
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                    @if (Auth::guest())
                        <li><a href="{{ route('login') }}">Login</a></li>
                        <li><a href="{{ route('register') }}">Register</a></li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                          style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>

    @yield('content')
</div>

<!-- Scripts -->
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
