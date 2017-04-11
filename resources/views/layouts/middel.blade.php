<div id="navbar-second">
    <nav class="navbar navbar-default" role="navigation">
        <div class="">
            <ul class="nav navbar-nav">
                <li><a class="{{Menu::isActiveRoute('home')}}" href="{{url('/home')}}">Home</a></li>
                <li><a class="{{Menu::isActiveRoute('dashboard')}}" href="{{url('/dashboard')}}">Dashboard</a></li>
                <li  ><a class="{{Menu::isActiveRoute('toevoegen')}}" href="{{url('/toevoegen')}}">Toevoegen</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</div>