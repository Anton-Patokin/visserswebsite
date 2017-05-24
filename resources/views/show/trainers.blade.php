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
                            <div class="col-md-12">
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
        <div class="row margin-top-1">
            @foreach($contents as $key=>$content)
                <div class="col-md-3">
                    @include('components.trainer_thumbnail')
                </div>
            @endforeach
        </div>

    </div>
@endsection
