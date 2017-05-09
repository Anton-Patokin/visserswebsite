@extends('layouts.app')
@section('content')



    <div class="container-fluid" ng-controller="GoogleMapsConroller">
        <?php $head = 'VisPlaatsen';$head_description = 'Hier vind je overzicht van vis plaatsen';?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-md-8 box-card">
                <div class="row">
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div>
                                    <ui-gmap-google-map options="map.options" center='map.center'
                                                        zoom='map.zoom'></ui-gmap-google-map>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 box-card">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="box-card-body">
                            <div class="row">
                                <div class="col-md-10">
                                    <input type="text" class="form-control ng-valid" placeholder="Zoeken">
                                </div>
                                <div class="col-md-2">
                                    <button type="submit" class="btn btn-default fullwidth">Zoeken</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div class="row margin-top-1">
            @foreach($contents as $key=>$content)
                <div class="col-md-3">
                    @include('components.visplek_thumbnail')
                </div>
            @endforeach
        </div>

    </div>
@endsection
