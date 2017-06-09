<div id="nav-bar-top" class="navbar navbar-default navbar-static-top" role="navigation">
    <div class="container-fluid">
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
                    <a href="{{url("/gebruiker")}}"><span class="user-icon"><img
                                    src="{{url('/images/icon/user-icon.png')}}"></span>
                    </a>
                @endif
            </button>
        </div>
        <div class="col-md-10 col-sm-10 nopadding">

            <div class="collapse {{(Auth::guest())?'navbar-collapse navbar-menubuilder':''}} navbar-collapse ">
                <ul class="nav navbar-nav navbar-right">

                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <div id="imaginary_container">
                                <div class="input-group stylish-input-group">
                                    <input ng-keyup="zoeken(zoeken_alles)" ng-model="zoeken_alles" type="text"
                                           class="form-control" placeholder="Zoeken">
                    <span class="input-group-addon">
                        <button type="submit">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>
                    </span>

                                    <style>

                                        #imaginary_container {
                                            position: relative;
                                            display: inline-block;
                                        }

                                        .stylish-input-group .input-group-addon {
                                            background: none;
                                            border: none;
                                            border-bottom: 1px solid white;
                                            color: #fff;
                                        }

                                        .stylish-input-group .form-control {
                                            border: none;
                                            border-bottom: 1px solid white;
                                            background: none;
                                        }

                                        .stylish-input-group .form-control:focus {
                                            color: #fff;
                                            box-shadow: none;
                                            -moz-box-shadow: none;
                                            -webkit-box-shadow: none;
                                        }

                                        .stylish-input-group button {
                                            border: none;
                                            border: 0;
                                            background: none;
                                        }

                                        #myUL {
                                            /*display: none;*/
                                            top:50px;
                                            left: 0;
                                            padding: 0;
                                            position: absolute;
                                            min-width: 100%;
                                            z-index: 1;
                                            list-style-type: none;
                                            margin: 0;
                                        }

                                        #myUL li a {
                                            border: 1px solid #ddd; /* Add a border to all links */
                                            background-color: #f6f6f6; /* Grey background color */
                                            padding: 12px; /* Add some padding */
                                            text-decoration: none; /* Remove default text underline */
                                            font-size: 18px; /* Increase the font-size */
                                            color: black; /* Add a black text color */
                                            display: block; /* Make it into a block element to fill the whole list */
                                        }

                                    </style>


                                    <ul id="myUL">
                                        <div ng-repeat="search in search_all_resualt">
                                            <li ><a href="#">@{{ search.titel }}</a></li>
                                        </div>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </form>
                    @if (Auth::guest())
                        <li><a href="{{ route('login') }}">Inloggen</a></li>
                        <li><a href="{{ route('register') }}">Registreren</a></li>
                    @else
                        <li><a id="user-fish-line-icon" href="#" class="dropdown-toggle" data-toggle="dropdown"
                               role="button"
                               aria-expanded="false"><span class="user-icon"><img
                                            src="{{url('/images/icon/user-icon.png')}}"></span>{{Auth::user()->name }}
                                <span
                                        class="caret pull-right"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="{{url('/gebruiker')}}">
                                        Profiel
                                    </a>
                                    <a href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        Uitloggen
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