<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>


@extends('layouts.app')
@section('content')
    <div class="container-fluid" ng-controller="GoogleMapsSmaalConroller">
        <?php $head = $message['trainer_titel'];$head_description = $content->titel;?>
        @include('header')

        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col-md-12">
                                        <img src="{{url('/uploads/thumbnail/'.$content->image)}}"
                                             alt="profiel foto van {{$content->name}}">
                                    </div>
                                    <div class="col-md-12 margin-top-5">
                                        <div ng-controller="GoogleMapsConroller">
                                            <ui-gmap-google-map class="small" ng-class="smallGoogleMaps"
                                                                class="small-google-maps"
                                                                options="map.options" center='map.center'
                                                                zoom='map.zoom'>
                                                <ui-gmap-marker coords="marker.coords" options="marker.options"
                                                                idkey="marker.id"
                                                                icon="{url:'{{url('/images/icon/marker_trainer.png')}}'}">
                                                </ui-gmap-marker>
                                            </ui-gmap-google-map>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['naam']}}
                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
                                                {{$content->name}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['email']}}
                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
                                                {{$content->email}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['telefonnummer']}}

                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
                                                {{$content->telefonnummer}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['geslacht']}}
                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
                                                {{$content->geslacht}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['vraagprijs']}}
                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
                                                {{$content->vraagprijs}} euro per uur
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['active_sinds']}}
                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
                                                {{$content->created_at}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['trainer_of_gids']}}
                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
                                                {{($content->active==2)?'aanvaard':'in afwachting'}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <hr>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['ervaring']}}
                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
                                                {{$content->ervaring}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="thumbnail-head">
                                            <h3 class="">
                                                {{$termen['Jouw_verhaal']}}
                                            </h3>
                                        </div>
                                        <div class="thumbnail-body">
                                            <p class="">
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
            @include('components.relevante')
        </div>
    </div>
@endsection
