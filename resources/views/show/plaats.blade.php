@extends('layouts.app')
@section('content')
    <?php
    $text["waterTypeLeeg"] = "Water type is onbekend";
    ?>
    <div class="container-fluid" ng-controller="GoogleMapsSmaalConroller">
        <?php $head = 'VisPlaats';$head_description = $content->naam;?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <img src="{{url('/uploads/thumbnail/'.$content->image)}}" alt="{{$content->naam}}">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <ui-gmap-google-map options="map.options" center='map.center'
                                                    zoom='map.zoom'></ui-gmap-google-map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                <div class="row">
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="text-center">
                                        {{$content->watertype}}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="text-center">
                                        {{($content->nachvissen)?'Nacht vissen':'Dag vissen'}}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="text-center">
                                        {{($content->toilet)?'er is openbare ruimte':'geen openbare ruimte'}}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="text-center">
                                        {{($content->prive)?'Prive water':'Openbaar water'}}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="text-center">
                                        {{($content->betaalwater)?'Extra bijbetalen':'Stads tarieven'}}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                <div class="row">
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="text-left">
                                        Meest voorkomende vissoorten
                                    </h4>
                                </div>
                                <div class="thumbnail-body">
                                    <p class="text-left">
                                        {{$content->vissoorten}}

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="">
                                        Over water
                                    </h4>
                                </div>
                                <div class="thumbnail-body">
                                    <p class="">
                                        {{$content->viswater}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="">
                                        reglementen
                                    </h4>
                                </div>
                                <div class="thumbnail-body">
                                    <p class="">
                                        {{$content->reglementen}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="thumbnail-head">
                                    <h4 class="text-left">
                                       Extra informatie
                                    </h4>
                                </div>
                                <div class="thumbnail-body">
                                    <p class="text-left">
                                        {{$content->text}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection
