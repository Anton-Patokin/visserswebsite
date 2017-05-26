<!doctype html>
<html amp lang="en">
<head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    @yield('head')
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <link rel="shortcut icon" href="{{url('/images/icon/favicon.png')}}" type="image/x-icon">
    @yield('jsonLd')
    @include('layouts.amp.ampCss')
    @include('layouts.amp.css')
    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <script async custom-element="amp-iframe"
            src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
</head>
<body class="background-gray">
<div class="container-fluid">
    <div class="row navbar margin-bottom-5">
        <div class="col-xs-12">
            <div class="col-xs-10">
                <amp-img class="hamburger" src="{{url('/images/icon/logo-horizontal.png')}}" width="200" height="30"
                         alt="close sidebar" on="tap:sidebar.toggle" role="button" tabindex="0"></amp-img>
            </div>
            <div class="col-xs-2">
                <amp-img class="hamburger" src="{{url('/images/icon/hamburger.jpg')}}" width="35" height="35"
                         alt="close sidebar" on="tap:sidebar.toggle" role="button" tabindex="0"></amp-img>
            </div>
        </div>
    </div>
</div>
<amp-sidebar id="sidebar" layout="nodisplay" side="right">
    <amp-img class="amp-close-image" src="{{url('/images/icon/close.jpg')}}" width="20" height="20" alt="close sidebar"
             on="tap:sidebar.close" role="button" tabindex="0"></amp-img>
    <ul>
        <?php $navbar = ['home', 'plaats', 'wedstrijden', 'nieuws', 'trainer', 'tutorial', 'over-ons', 'contact','faq'];?>
        @foreach($navbar as $value)
            {{--@if($value=='tutorial')--}}
            {{--<li><a id="user-fish-line-icon" href="#" class="dropdown-toggle" data-toggle="dropdown"--}}
            {{--role="button"--}}
            {{--aria-expanded="false">Tutorial--}}
            {{--<span class="caret pull-right "></span></a>--}}
            {{--<ul class="dropdown-menu" role="menu">--}}
            {{--@foreach($tutorialCategories as $key=>$category)--}}
            {{--<li>--}}
            {{--<a href="{{url('/gebruiker')}}">--}}
            {{--{{$category->category}}--}}
            {{--</a>--}}
            {{--</li>--}}
            {{--@endforeach--}}
            {{--</ul>--}}
            {{--</li>--}}
            {{--@else--}}
            <li class="{{Menu::isActiveHomeList($value)}}"><a href="{{url('/'.$value)}}">{{$value}}</a></li>
            {{--@endif--}}
        @endforeach

    </ul>
</amp-sidebar>
<div class="container-fluid">
    @yield('content')
</div>

</body>
</html>