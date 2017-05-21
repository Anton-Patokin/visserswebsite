<?php
$messages = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid" ng-controller="GoogleMapsConroller">
        @include('berichten.cookieBericht')
        <?php $head = $messages['trainers_titel'];$head_description = $messages['trainers_discription'];?>
        @include('header')
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6 box-card">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="box-card-head">

                                    <h3 class="google-maps-titel">Vis activiteiten op de kaart</h3>
                                </div>
                                <div class="box-card-body">
                                    <div class="row">
                                        <div class="form-group">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div ng-if="googleMaps" class=" move-down">
                                                    <input type="text" class="form-control"
                                                           type="text" class="form-control ng-valid input-lg"
                                                           ng-keyup="zoekenOpGoogleMaps(inputZoekenOpGoogleMaps)"
                                                           placeholder="Zoekterm"
                                                           ng-model="inputZoekenOpGoogleMaps">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <ui-gmap-google-map options="map.options" center='map.center' zoom='map.zoom'>
                                    <ui-gmap-search-box options="map.searchbox.options"
                                                        template="map.searchbox.template"
                                                        events="map.searchbox.events"
                                                        position="'top-left'"></ui-gmap-search-box>
                                    <ui-gmap-markers ng-init="initTrainersmarkers()" events="map.markers.wedstrijd.events" fit="true" models="trainerMarkers" coords="'self'"
                                                     icon="{url:'{{url('/images/icon/marker_trainer.png')}}'}">
                                        @include('components.googleWindow')

                                    </ui-gmap-markers>
                                </ui-gmap-google-map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('components.listOfThumbnails')
    </div>
@endsection
