@extends('layouts.app')

@section('content')
    <div class="container-fluid" ng-controller="GoogleMapsConroller">

        {{--<div class="row margin-top-1">--}}
        {{--<ui-gmap-google-map options="map.options" center='map.center' zoom='map.zoom'></ui-gmap-google-map>--}}
        {{--</div>--}}
        <div class="row">


            <div class="col-sm-12 col-md-6 margin-top-3">
                <div class="card bordered">
                    <div class="card-header">
                        <h1 class="card-title h1-small"><i class="glyphicon glyphicon-map-marker"></i> Zoek naar
                            visplatsen, wedstrijden of trainers in jouw buurt</h1>
                    </div>
                    <div class="card-content">
                        <form class="ng-pristine ng-valid">
                            <div class="row margin-top-1 margin-bottom-1">
                                <div class="col-md-12">
                                    <div class="col-md-10">
                                        <input type="text" class="form-control ng-valid" placeholder="Search"
                                               ng-model="query">
                                    </div>
                                    <div class="col-md-2">
                                        <button type="submit" class="btn btn-default fullwidth">Zoeken</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <ui-gmap-google-map options="map.options" center='map.center'
                                            zoom='map.zoom'></ui-gmap-google-map>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 margin-top-3">
                <div class="card bordered">
                    <div class="card-content">
                        <h1>hallo</h1>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <div class="container">
        <div class="row margin-top-5">
            <div class="col-md-12">
                <div class="row">
                    @foreach($wedstrijden as $key=>$wedstrijd)
                        <?php
                        $title = $wedstrijd->titel;
                        $description = substr($wedstrijd->text, 0, 350) . '...';
                        $image = url('/uploads/thumbnail') . "/" . $wedstrijd->image;
                        ?>
                        <div class="col-md-3">
                            @include('components.new_contest')
                        </div>
                    @endforeach
                    @foreach($trainers as $key=>$trainer)
                        <?php
                        $leeftijd = $trainer->leeftijd;
                        $ervaring = $trainer->ervaring;
                        $vraagprijs = $trainer->vraagprijs;
                        $naam = $trainer->name;
                        $image = url('/uploads/thumbnail') . "/" . $trainer->image;
                        $description = substr($trainer->text, 0, 350) . '...';
                        ?>
                        <div class="col-md-3">
                            @include('components.trainer_thumbnail')
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

@endsection
