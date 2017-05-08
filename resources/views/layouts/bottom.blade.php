<div id="nav-bar-bottom">
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <ul class="nav navbar-nav">
                    &nbsp;
                </ul>
                <ul class="nav navbar-nav navbar-left">
                    <?php
                    $navbar = ['home', 'plaatsen', 'wedstrijden', 'nieuws', 'trainer', 'tutorial', 'over-ons', 'contact'];
                    ?>
                    @if(Menu::isActiveRoute($navbar))
                        @foreach($navbar as $value)
                            <li class="{{Menu::isActiveHomeList($value)}}"><a
                                        href="{{url('/'.$value)}}">{{$value}}</a>
                            </li>
                        @endforeach
                    @elseif(Menu::isActiveRoute(['toevoegen']))
                        <li><a ng-click="gotoStep(2);putValue('visPlek')" href="">Visplaats</a></li>
                        <li><a ng-click="gotoStep(2);putValue('wedstrijd')" href="">Wedstrijd</a></li>
                        @if(Auth::user()->trainer=='')
                            <li><a ng-click="gotoStep(2);putValue('trainer')" href="">Trainer worden</a></li>
                        @endif
                        <li class="{{Menu::isActiveList('toevoegen/nieuws')}}"><a href="{{url('/toevoegen/nieuws')}}">Nieuws
                                beriecht</a></li>
                        <li class="{{Menu::isActiveList('toevoegen/tutorial')}}"><a
                                    href="{{url('/toevoegen/tutorial')}}">Tutorial</a></li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>
</div>