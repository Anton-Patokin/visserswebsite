<?php $tutorialCategories = \App\TutorialCategory::all()?>
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
                    $navbar = ['home', 'plaats', 'wedstrijden', 'nieuws', 'gids', 'tutorial', 'over-ons', 'contact', 'faq'];
                    ?>
                    {{--@if(Menu::isActiveRoute($navbar))--}}

                    @if(Menu::isActiveRoute(['toevoegen']))
                        <li><a ng-click="gotoStep(2);putValue('visPlek')" href="">Visplaats</a></li>
                        <li><a ng-click="gotoStep(2);putValue('wedstrijd')" href="">Wedstrijd</a></li>
                        @if(Auth::user()->trainer==2)
                            <li><a ng-click="gotoStep(2);putValue('trainer')" href="">Trainer worden</a></li>
                        @endif
                        <li class="{{Menu::isActiveList('toevoegen/nieuws')}}"><a href="{{url('/toevoegen/nieuws')}}">Nieuws
                                beriecht</a></li>
                        <li class="{{Menu::isActiveList('toevoegen/tutorial')}}"><a
                                    href="{{url('/toevoegen/tutorial')}}">Tutorial</a></li>
                        @if(Auth::user()->admin)
                                <li class="{{Menu::isActiveList('toevoegen/faq')}}"><a
                                            href="{{url('/toevoegen/faq')}}">FAQ</a></li>
                        @endif
                    @elseif(Menu::isActiveRoute(['dashboard']))
                        <li class="{{Menu::isActiveList('dashboard')}}">
                            <a href="{{url('/dashboard')}}">Jouw overzicht</a>
                        </li>
                        <li class="{{Menu::isActiveList('dashboard/toegevoegd-inhoud')}}">
                            <a href="{{url('dashboard/toegevoegd-inhoud')}}">Toegevoegde inhoud</a>
                        </li>
                        @if(Auth::user()->admin)
                            <li class="{{Menu::isActiveList('dashboard/nieuw-toegevoegd-inhoud')}}">
                                <a href="{{url('dashboard/nieuw-toegevoegd-inhoud')}}">Nieuwe inhoud</a>
                            </li>
                            <li class="{{Menu::isActiveList('dashboard/alle-toegevoegd-inhoud')}}">
                                <a href="{{url('dashboard/alle-toegevoegd-inhoud')}}">Overzicht toegevoegde inhoud</a>
                            </li>
                            <li class="{{Menu::isActiveList('dashboard/alle-verwijderde')}}">
                                <a href="{{url('dashboard/alle-verwijderde')}}">Verwijderde</a>
                            </li>
                            <li class="{{Menu::isActiveList('dashboard/gebruikers')}}">
                                <a href="{{url('dashboard/gebruikers')}}">Gebruikers</a>
                            </li>
                        @endif
                    @else
                        @foreach($navbar as $value)
                            @if($value=='tutorial')
                                <li><a id="user-fish-line-icon" href="#" class="dropdown-toggle" data-toggle="dropdown"
                                       role="button"
                                       aria-expanded="false">Tutorial
                                        <span class="caret pull-right "></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        @foreach($tutorialCategories as $key=>$category)
                                            <li>
                                                <a href="{{url('/tutorials/'.$category->category)}}">
                                                    {{$category->category}}
                                                </a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </li>
                            @else
                                <li class="{{Menu::isActiveHomeList($value)}}"><a
                                            href="{{url('/'.$value)}}">{{$value}}</a>
                                </li>
                            @endif
                        @endforeach
                    @endif
                </ul>
            </div>
        </div>
    </nav>
</div>