@extends('layouts.app')

@section('content')

    <div class="container-fluid" ng-controller="GoogleMapsConroller">
        <?php $head = 'home';$head_description = 'Vis activiteiten onder een dak';?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-md-3 box-card">
                <div class="thumbnail ">
                    <div class="caption">
                        <div class="box-card-head">
                            <h3 class="text-center">RECENTS</h3>
                        </div>
                        <div class="box-card-body margin-bottom-4">
                            <div class="row">
                                @for($i=0;$i<5;$i++)
                                    <div class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#" class="popular-img">
                                                    <img src="{{url('/uploads/thumbnail/20170504080504500-300.jpeg')}}">
                                                    <div class="p-overlay"></div>
                                                </a>
                                            </div>
                                            <div class="p-content">
                                                <a href="#" class="text-uppercase">Home is peaceful Place</a>
                                                <span class="p-date">February 15, 2016</span>
                                            </div>
                                        </div>
                                    </div>
                                @endfor
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 box-card">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="box-card-body">
                                    <div class="row">
                                        <div class="form-group">
                                            <div class="col-xs-12 col-sm-8 col-md-10 col-lg-10">
                                                <input type="text" class="form-control ng-valid input-lg"
                                                       placeholder="Zoeken">
                                            </div>
                                            <div class="col-xs-12 col-sm-4 col-md-2 col-lg-2">
                                                <button type="submit" class="btn btn-default fullwidth">Zoeken</button>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                                <input type="checkbox" id="test2" checked="checked"/>
                                                <label for="test2">Yellow</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail">
                            <div class="caption">

                                <div class="">
                                    <ui-gmap-google-map options="map.options" center='map.center'
                                                        zoom='map.zoom'></ui-gmap-google-map>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 box-card">
                <div class="thumbnail">
                    <div class="caption ">
                        <div class="box-card-head">
                            <h3 class="widget-title text-uppercase text-center ">BLIJF OP DE HOOCHTE</h3>
                        </div>
                        <div class="box-card-body">
                            <form>
                                <div class="form-group">
                                    <input class="form-control grey" type="email"
                                           placeholder="Jouw e-mail adress">
                                    <input type="submit" value="Aboneer je nu"
                                           class="text-uppercase text-center btn btn-subscribe margin-top-3">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row margin-top-2">
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
