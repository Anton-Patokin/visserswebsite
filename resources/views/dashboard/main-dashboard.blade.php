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

        <div class="row margin-top-2">
            <div class="col-md-12">
                <div class="thumbnail">
                    <div class="caption detail">
                        <div class="row">
                            <div class="col-md-12">
                                <div filter-list="search" ng-repeat="dag in alleVisOpDag"
                                     ng-click="toggelOccordion($event,dag[0].vis_dag_id)"
                                     class="panel panel-default margin-0">
                                    <div class="panel-body">
                                        <h3>
                                            <div class="col-xs-1 ">
                                                @{{ $index }}
                                            </div>
                                            <div class="col-xs-10 ">
                                                @{{ dag[0].datum }}
                                            </div>
                                            <div class="col-xs-1 pull-right">
                                                <div class="glyphicon glyphicon-chevron-right"></div>
                                            </div>
                                        </h3>
                                    </div>
                                    <div hidden class="panel-footer">
                                        <p class="margin-top-1 margin-bottom-1"></p>
                                        <div class="row">
                                            <div class="col-md-12" >
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-3 col-md-3">
                                                        <div class="">
                                                            <h3>vissen</h3>
                                                        </div>
                                                        <div ng-repeat="visSoort in dag">
                                                            @{{ visSoort.aantal }} - @{{ visSoort.soort }}
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-9 col-md-9">
                                                        <div class="col-xs-12 col-sm-12 col-md-12">
                                                            <h3>Gegevens over de dag</h3>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>Laagste: @{{visDagGegevens.low}} &#8451;</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>Hoogste: @{{visDagGegevens.high}} &#8451;</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>Gemmidelde: @{{visDagGegevens.temp}} &#8451;</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>stijging of zaking: @{{visDagGegevens.verschilTemp}} &#8451;</h4>
                                                                </div>

                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>zonsopgang tijdstip: @{{visDagGegevens.sunrise}} uur</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>zonsondergang tijdstip: @{{visDagGegevens.sunset}} uur</h4>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">

                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>vochtigheid: @{{visDagGegevens.humidity}} %</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>druk: @{{visDagGegevens.rising}}</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>zichtbaarheid: @{{visDagGegevens.visibility}} %</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>wind snelheid: @{{visDagGegevens.speed}} km/h</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>wind richting: @{{visDagGegevens.direction}}&#176;/360&#176;</h4>
                                                                </div>
                                                                <div class="col-xs-12 col-md-12">
                                                                    <h4>jouw beoordeling: @{{visDagGegevens.beordeling}}</h4>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
