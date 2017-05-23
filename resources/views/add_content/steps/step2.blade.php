<?php $head = $message['locatie'];
$head_description = $message['locatie_description']; ?>
@include('header')

<div class="row margin-bottom-5">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="thumbnail">
            <div class="caption">
                <div class="row">
                    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <ui-gmap-google-map events="mapAdd.events" options="mapAdd.options" center='mapAdd.center'
                                            zoom='map.zoom'
                                            control="mapAdd.control">
                            <ui-gmap-search-box options="mapAdd.searchbox.options"
                                                template="mapAdd.searchbox.template"
                                                events="mapAdd.searchbox.events"
                                                position="'top-left'"></ui-gmap-search-box>
                            <ui-gmap-marker ng-if="showMarker" fit="true" coords="marker.coords"
                                            options="marker.options"
                                            idkey="marker.id">
                            </ui-gmap-marker>
                        </ui-gmap-google-map>
                    </div>


                    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 adres">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4"><h3>Land:</h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"><h4>@{{ input.adres.land }}</h4></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4"><h3>Gewest:</h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"><h4>@{{ input.adres.gewest }}</h4></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4"><h3>Provincie:</h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"><h4>@{{ input.adres.provincie }}</h4></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4"><h3>Stad:</h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"><h4>@{{ input.adres.stad }}</h4></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4"><h3>PostCode:</h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"><h4>@{{ input.adres.postCode }}</h4></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4"><h3>Straat:</h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"><h4>@{{ input.adres.straat }}</h4></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4"><h3>Nummer:</h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"><h4>@{{ input.adres.nummer }}</h4></div>
                        <div class="col-md-12">
                            <ul ng-show="currentStep>1" class="list-inline text-center margin-top-5">
                                <li>
                                    <button ng-click="prev()" type="button" class="btn-lg btn-default">
                                        Vorige
                                    </button>
                                </li>
                                <li>
                                    <button ng-if="currentStep ==2 " ng-click="next()" type=""
                                            class="btn-lg btn-default"
                                            ng-disabled="input.lat=='' && input.lng == ''">Volgende
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
