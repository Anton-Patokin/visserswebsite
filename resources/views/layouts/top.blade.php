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