<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 box-card" ng-init="initweaterPrognose()">
    <div class="thumbnail">
        <div class="caption ">
            <div class="box-card-body text-center">
                <div class="row">

                    <style>
                        .weer-vandaag-icon {
                            font-size: 75px;
                        }

                        .weer-vandaag-temp {
                            font-size: 95px;
                            font-weight: 600;
                        }

                        .voorspeling-weer {
                            font-size: 22px;
                            border-right: 1px solid grey;
                        }

                        .weer-icon-top{
                            margin-top: -25px;
                            font-size: 50px;
                        }
                        .weater-sub-icon-font{
                            text-align: center;
                            margin-top: -20px;
                            font-size: 18px;
                        }
                        .voorspeling-weer:last-child { border-right: none; }
                    </style>
                    <div class="col-xs-12">

                        <div class="weer-vandaag-temp">@{{ wearPrognose.vandaag.temp }}&#8451;
                            <i class="weer-vandaag-icon color-red wi" ng-class="wearPrognose.vandaag.icon"></i>
                        </div>
                        <div class="row weer-icon-top">
                            <div class="col-xs-3 text-center">
                                <i class="wi" ng-class="'wi-moon-'+wearPrognose.vandaag.moon.icon"></i>
                                <div class="weater-sub-icon-font">@{{ wearPrognose.vandaag.moon.moonPhase }}/8</div>

                            </div>
                            <div class="col-xs-3 ">
                                <i class="wi wi-wind" ng-class="'towards-'+wearPrognose.vandaag.windDirection+'-deg'"></i>
                                <div class="weater-sub-icon-font">@{{ wearPrognose.vandaag.windDirection }}</div>
                            </div>

                            <div class="col-xs-3 text-center">
                                <i class="wi wi-barometer"></i>
                                <br>
                                <div class="weater-sub-icon-font">@{{ wearPrognose.vandaag.pressure }}</div>
                            </div>
                            <div class="col-xs-3 text-center">
                                <i class="wi wi-wind" ng-class="wearPrognose.vandaag.windDirection"></i>
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