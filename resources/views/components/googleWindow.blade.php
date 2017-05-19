<ui-gmap-windows show="map.mark.wedstrijd.wedstrijdWindowShow"
                 closeClick="'closeClick'" ng-cloak>
    <div ng-non-bindable >
        {{--@{{ info.titel}}--}}
        <div class="container-300px">
            <div class="post-container">
                <div class="post-thumb"><img ng-if="info.image"
                            src="@{{info.image}}"/></div>
                <div class="post-content">
                    <h5 class="post-title">@{{ info.titel }}</h5>
                    <p>@{{ info.text }} </p>
                </div>
                <a href="{{url('/')}}/@{{ info.type }}/@{{ info.id }}"><p class="pull-right">Meer</p></a>
            </div>
        </div>
    </div>
</ui-gmap-windows>