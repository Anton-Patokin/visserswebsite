<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')

@section('content')
    <div class="container-fluid" ng-controller="GenericChartCtrl" ng-init="initUser('{{Auth::user()->id}}')">
        <div class="row">
            <div class="col-md-12">
                <?php $head = $message['dashboard'];$head_description = $message['dahboard_description'];?>
                @include('header')


            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="thumbnail">
                    <div class="caption">
                        <h2>{{$totaalDagen}}</h2>
                        keer gaan vissen
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <div class="caption">
                        <h2>{{$totaalVissen}} </h2>
                        vissen gevangen

                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <div class="caption">
                        <h2>{{$gemmideldeGevangenVissen}} </h2>
                        Gemmidelde gevangen vissen
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div google-chart chart="myChartObject" style="height:300px; width:100%;"></div>
            </div>


            <div class="col-md-8">
                <div google-chart chart="totaalAantalVissenGevangen" style="height:300px; width:100%;"></div>
            </div>
        </div>
    </div>

@endsection
