<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>

@extends('layouts.app')
@section('content')
    <?php
    $text["waterTypeLeeg"] = "Water type is onbekend";
    ?>
    <div class="container-fluid" ng-controller="GoogleMapsSmaalConroller">
        <?php $head = $message['wedstrijd'];$head_description = $content->titel;?>
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

                            <style>
                                .weisted{
                                    z-index: 20000;
                                    width: 25%;
                                }
                            </style>
                            @if(strtotime($content->datum)<strtotime(\Carbon\Carbon::now()))
                                <div class="col-md-9 weisted">
                                    <img  src="{{url('/images/vorbij.png')}}" alt="stempel vorbij">
                                </div>
                            @endif
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3>Datum </h3>
                                    </div>
                                    <div class="col-md-12">
                                        <h4>{{$content->datum}}</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3>{{$termen['kermerken']}}</h3>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>{{$content->category}}</h4>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>{{$content->hengel}}</h4>
                                    </div>
                                    <div class="col-md-4">
                                        <h4>{{$content->visserij}}</h4>
                                    </div>
                                </div>
                                <div class="row margin-top-3">
                                    <div class="row">
                                        <div class="col-md-12">

                                            <div class="col-md-6">
                                                <h3 class="text-left">
                                                    {{$termen['prijzen']}}
                                                </h3>
                                                <p class="text-left">
                                                    @if(empty($content->prijzen))
                                                        ...
                                                    @endif
                                                    {{$content->prijzen}}
                                                </p>
                                            </div>
                                            <div class="col-md-6">
                                                <h3 class="text-left">
                                                    {{$termen['duur']}}
                                                </h3>
                                                <p class="text-left">
                                                    @if(empty($content->duur))
                                                        ...
                                                    @endif
                                                    {{$content->duur}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <h3 class="text-left">
                                            {{$termen['kostprijs']}}
                                        </h3>
                                        <p class="text-left">
                                            @if(empty($content->kostprijs))
                                                ...
                                            @endif
                                            {{$content->kostprijs}}
                                        </p>
                                    </div>

                                    <div class="col-md-12">
                                        <h3 class="text-left">
                                            {{$termen['water']}}
                                        </h3>
                                        <p class="text-left">
                                            @if(empty($content->water))
                                                ...
                                            @endif
                                            {{$content->water}}
                                        </p>
                                    </div>
                                    <div class="col-md-12">
                                        <h3 class="text-left">
                                            {{$termen['loting']}}
                                        </h3>
                                        <p class="text-left">
                                            @if(empty($content->loting))
                                                ...
                                            @endif
                                            {{$content->loting}}
                                        </p>
                                    </div>
                                    <div class="col-md-12">
                                        <h3 class="text-left">
                                            {{$termen['extra']}}
                                        </h3>
                                        <p class="text-left">
                                            @if(empty($content->text))
                                                ...
                                            @endif
                                            {{$content->text}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 box-card">
                <div class="thumbnail ">
                    <div class="caption">
                        <div class="box-card-head">
                            <h3 class="text-center">{{$termen['relevant']}}</h3>
                        </div>
                        <div class="box-card-body margin-bottom-4">
                            <div class="row" id="vertikalscroll">
                                <div class="circel top" id="go-to-top">
                                    <div class="glyphicon glyphicon-menu-up center"></div>
                                </div>
                                <div class="circel bottom" id="go-to-bottom">
                                    <div class="glyphicon glyphicon-menu-down center"></div>
                                </div>
                                @if(count($relevente)>1)
                                    @foreach($relevente as $key=>$content)
                                        <?php $content_url = url('/' . $content->type . '/' . $content->id . '/' . substr($content->titel, 0, 40))?>

                                        <div class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                            <div class="media">
                                                <div class="media-left">
                                                    <a href="{{$content_url}}" class="popular-img">
                                                        <img src="{{url('/uploads/thumbnail/'.$content->image)}}">
                                                        <div class="p-overlay"></div>
                                                    </a>
                                                </div>
                                                <div class="p-content">
                                                    <a href="{{$content_url}}"
                                                       class="text-uppercase">{{substr($content->titel,0,40)}}</a>
                                                    <span class="p-date">{{ date("d-m-Y", strtotime($content->updated_at))}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @else
                                    <a href="{{url('/home')}}"><h4 class="text-uppercase text-center">Home</h4></a>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
