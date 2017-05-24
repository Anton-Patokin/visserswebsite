<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>

@extends('layouts.app')

@section('head')
    @include('jsonLd.nieuwsArtikel-jsonLd')
@endsection



@section('content')
    <?php
    $text["waterTypeLeeg"] = "Water type is onbekend";
    ?>
    <div class="container-fluid" ng-controller="GoogleMapsSmaalConroller">
        <?php $head = $message['viePlaats_titel'];$head_description = $content->titel;?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                <div class="thumbnail">
                    <div class="caption detail">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col-md-12">
                                        <img src="{{url('/uploads/thumbnail/'.$content->image)}}"
                                             alt="{{$content->titel}}">
                                    </div>
                                    <div class="col-md-12 margin-top-2">
                                        <ui-gmap-google-map options="map.options" center='map.center'
                                                            zoom='map.zoom'></ui-gmap-google-map>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3>{{$termen['kermerken']}}</h3>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>
                                            {{$content->watertype}}
                                        </h4>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>
                                            {{($content->nachvissen)?'Nacht vissen':'Dag vissen'}}
                                        </h4>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>
                                            {{($content->toilet)?'er is openbare ruimte':'geen openbare ruimte'}}
                                        </h4>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>
                                            {{($content->prive)?'Prive water':'Openbaar water'}}
                                        </h4>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>
                                            {{($content->betaalwater)?'Extra bijbetalen':'Stads tarieven'}}
                                        </h4>
                                    </div>
                                </div>
                                <div class="row margin-top-3">
                                    <div class="col-md-12">
                                        <h3 class="text-left">
                                            {{$termen['vissoorten']}}
                                        </h3>
                                        <p class="text-left">
                                            {{$content->vissoorten}}

                                        </p>
                                        <h3 class="">
                                            {{$termen['waterType']}}
                                        </h3>

                                        <p class="">
                                            {{$content->viswater}}
                                        </p>
                                        <h3 class="">
                                            {{$termen['reglementen']}}
                                        </h3>

                                        <p class="">
                                            {{$content->reglementen}}
                                        </p>

                                        <h3 class="text-left">
                                            {{$termen['extra']}}
                                        </h3>
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
            @include('components.relevante')
        </div>
    </div>


@endsection
