<?php $head = $message['locatie'];
$head_description = $message['locatie_description']; ?>
@include('header')

<div class="row margin-bottom-5">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="thumbnail">
            <div class="caption detail">
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


                    <div  class="col-xs-12 col-sm-3 col-md-3 col-lg-3 adres">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h3>Land: <small ng-show='input.adres.land'>@{{ input.adres.land }}</small></h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h3>Gewest: <small ng-show='input.adres.land'>@{{ input.adres.gewest }}</small> </h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h3>Provincie: <small ng-show='input.adres.land'>@{{ input.adres.provincie }}</small></h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h3>Stad: <small ng-show='input.adres.land'>@{{ input.adres.stad }}</small></h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h3>PostCode: <small ng-show='input.adres.land'>@{{ input.adres.postCode }}</small></h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h3>Straat: <small ng-show='input.adres.land'>@{{ input.adres.straat }}</small></h3></div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h3>Nummer: <small ng-show='input.adres.land'>@{{ input.adres.nummer }}</small></h3></div><div class="col-md-12">
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
