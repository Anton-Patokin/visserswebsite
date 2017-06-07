@extends('layouts.app')
@section('content')
    <div class="container-fluid" ng-controller="GoogleMapsConroller">
        <?php $head = 'VisPlaatsen';$head_description = 'Hier vind je overzicht van vis plaatsen';?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-md-12">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="row">
                            <div class="col-md-12 margin-bottom-1">
                                <div ng-if="googleMaps" class=" move-down">
                                    <input type="text" class="form-control"
                                           type="text" class="form-control ng-valid input-lg"
                                           ng-keyup="zoekenOpGoogleMapsnaarVisPlatsen(inputZoekenOpGoogleMaps)"
                                           placeholder="Zoekterm"
                                           ng-model="inputZoekenOpGoogleMaps">
                                </div>
                            </div>
                            <div class="col-md-12 box-card">
                                <ui-gmap-google-map options="map.options" center='map.center' zoom='map.zoom'>
                                    <ui-gmap-markers ng-init="initVisPlaatsmarkers()"
                                                     events="map.markers.wedstrijd.events"
                                                     fit="true" models="plaatsMarkers" coords="'self'"
                                                     icon="{url:'{{url('/images/icon/marker_vis.png')}}'}">
                                        @include('components.googleWindow')
                                    </ui-gmap-markers>
                                </ui-gmap-google-map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row margin-top-1">
            <div class="col-md-12">
                <?php $smallThumbnail = true;?>
                @include('components.listOfThumbnails')
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                {{ $contents->links() }}
            </div>
        </div>

    </div>
@endsection
