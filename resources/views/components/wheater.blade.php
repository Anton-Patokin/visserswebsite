<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 box-card" ng-init="initweaterPrognose()">
    <div class="thumbnail">
        <div class="caption ">
            <div class="box-card-body text-center">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="weer-vandaag-temp">@{{ wearPrognose.vandaag.temp }}&#8451;
                            <i class="weer-vandaag-icon color-red wi" ng-class="wearPrognose.vandaag.icon"></i>
                        </div>
                        <div class="row weer-icon-top">

                            <div class="col-xs-3 text-center">
                                <a href="#" data-toggle="tooltip"
                                   title="Actuele stand van de maan, 1 nieuwe maan - 3 eerste kwartier - 5 volle maan - 7 laatste kwartier">
                                    <i class="color-red wi" ng-class="'wi-moon-'+wearPrognose.vandaag.moon.icon"></i>
                                </a>
                                <div class="weater-sub-icon-font">@{{ wearPrognose.vandaag.moon.moonPhase+1 }}/8</div>

                            </div>

                            <div class="col-xs-3 ">
                                <a href="#" data-toggle="tooltip"
                                   title="Windrichting van 0 - 360 graden">
                                    <i class="color-red wi wi-wind"
                                       ng-class="'towards-'+wearPrognose.vandaag.windDirection+'-deg'"></i>
                                </a>
                                <div class="weater-sub-icon-font">@{{ wearPrognose.vandaag.windDirection }}</div>
                            </div>

                            <div class="col-xs-3 text-center">
                                <a href="#" data-toggle="tooltip"
                                   title="Barometrische druk: stabiel 0, stijgende 1 of dalende 2">
                                    <i class="color-red wi wi-barometer"></i>
                                </a>
                                <div class="weater-sub-icon-font">@{{ wearPrognose.vandaag.pressure }}</div>
                            </div>
                            <div class="col-xs-3 text-center">
                                <a href="#" data-toggle="tooltip"
                                   title="De relatieve luchtvochtigheid, in procenten, geeft aan hoeveel waterdamp zich in de lucht bevindt ten opzichte van de maximale hoeveelheid waterdamp">
                                    <i class="color-red wi wi-humidity"></i>
                                </a>
                                <div class="weater-sub-icon-font">@{{ wearPrognose.vandaag.humidity }}</div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4  voorspeling-weer" ng-repeat="weer in wearPrognose.voorspeling">
                        <div class="">
                            <p>@{{ weer.day }}</p>

                            <p><i class="color-red wi" ng-class="weer.icon"></i></p>
                            @{{ weer.low }} - @{{ weer.high }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>