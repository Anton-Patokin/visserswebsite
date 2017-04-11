<div id="navbar-second">
    <nav class="navbar navbar-default" role="navigation">
        <div class="">
            <ul class="nav navbar-nav">
                <li><a class="active" href="{{url('/home')}}">Home</a></li>
                <li><a href="{{url('/dashboard')}}">Dashboard</a></li>
                <li {{isActiveRoute('toevoegen')}}><a href="{{url('/toevoegen')}}">Toevoegen</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</div>