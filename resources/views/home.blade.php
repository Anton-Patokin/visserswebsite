@extends('layouts.app')

@section('content')
    <div class="container-fluid" ng-controller="GoogleMapsConroller">
        <div class="row">
            <ui-gmap-google-map options="map.options" center='map.center'></ui-gmap-google-map>
        </div>
    </div>
@endsection
