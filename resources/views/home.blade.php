@extends('layouts.app')

@section('content')
    <div class="container-fluid" ng-controller="GoogleMapsConroller">
        <div class="row">
            <ui-gmap-google-map options="map.options" center='map.center' zoom='map.zoom'></ui-gmap-google-map>
        </div>
        <div class="container">
            <div class="row margin-top-5">
                <div class="col-md-12">
                    @foreach($wedstrijden as $key=>$wedstrijd)
                        <?php
                        $title = $wedstrijd->titel;
                        $description = substr($wedstrijd->text, 0, 350) . '...';
                        $image = url('/uploads/thumbnail') . "/" . $wedstrijd->image;
                        ?>
                        <div class="col-md-4">
                            @include('components.new_contest')
                        </div>
                    @endforeach

                    @foreach($trainers as $key=>$trainer)
                        <?php
                            $leeftijd = $trainer->leeftijd;
                            $ervaring = $trainer->ervaring;
                            $vraagprijs =$trainer->vraagprijs ;
                            $naam = $trainer->name;
                            $image=url('/uploads/thumbnail') . "/" . $trainer->image;
                            $description = substr($trainer->text, 0, 350) . '...';

                            ?>
                        <div class="col-md-4">
                            @include('components.trainer_thumbnail')
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
