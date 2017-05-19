@extends('layouts.app')
<?php
$messages = Config::get('constant.Headings');


?>
@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')
        <?php $head = $messages['wedstrijden_titel'];$head_description = $messages['wedstrijden_discription'];?>
        @include('header')


        <div class="row margin-top-1 text-center">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 box-card">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="box-card-head text-center">
                            <div class="row datum">
                                <a href="{{url('/wedstrijden/'.$prevdatum)}}">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <p class="text-center text-uppercase">
                                        <div class="maand">{{$nexMontText['maand']}}</div>
                                        /
                                        <div class="jaar">{{$nexMontText['jaar']}}</div>
                                        </p>
                                    </div>
                                </a>
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 active">
                                    <p class="text-center text-uppercase border-right">
                                    <div class="maand">{{$currentMontText['maand']}}</div>
                                    /
                                    <div class="jaar">{{$currentMontText['jaar']}}</div>
                                    </p>
                                </div>
                                <a href="{{url('/wedstrijden/'.$nextdatum)}}">
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <p class="text-center text-uppercase">
                                        <div class="maand">{{$nexMontText['maand']}}</div>
                                        /
                                        <div class="jaar">{{$nexMontText['jaar']}}</div>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 box-card" ng-controller="GoogleMapsConroller">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="box-card-body">
                                    <div class="row">
                                        <div class="form-group">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div ng-if="googleMaps" class=" move-down">
                                                    <input type="text" class="form-control"
                                                           type="text" class="form-control ng-valid input-lg"
                                                           ng-keyup="zoekenOpGoogleMaps(inputZoekenOpGoogleMaps)"
                                                           placeholder="Zoekterm"
                                                           ng-model="inputZoekenOpGoogleMaps">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <ui-gmap-google-map options="map.options" center='map.center' zoom='map.zoom'>
                                    <ui-gmap-search-box options="map.searchbox.options"
                                                        template="map.searchbox.template"
                                                        events="map.searchbox.events"
                                                        position="'top-left'"></ui-gmap-search-box>
                                    <ui-gmap-markers ng-init="initWedstrijdmarkers()"
                                                     events="map.markers.wedstrijd.events" fit="true"
                                                     models="wedsrijdMarkers" coords="'self'"
                                                     icon="{url:'{{url('/images/icon/marker_wedstrijd.png')}}'}">
                                        @include('components.googleWindow')

                                    </ui-gmap-markers>
                                </ui-gmap-google-map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 box-card hide-800">
                <div class="thumbnail ">
                    <div class="caption">
                        <div class="box-card-head">
                            <div class="row ">
                                <h3 class="col-xs-12 col-sm-3 col-md-2 col-lg-2 border-right">Datum</h3>
                                <h3 class="col-xs-12 col-sm-3 col-md-3 col-lg-3  border-right">Loting</h3>
                                <h3 class="col-xs-12 col-sm-6 col-md-7 col-lg-7">Informatie</h3>
                            </div>
                        </div>
                        <div class="box-card-body margin-bottom-4">
                            <div class="row" id="vertikalscrollWedstrijden">
                                <div class="circel top" id="go-to-top">
                                    <div class="glyphicon glyphicon-menu-up center"></div>
                                </div>
                                <div class="col-md-12 margin-bottom-10">
                                    <div class="row">
                                        @foreach($contents as $key=>$content)
                                            <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                                                <div class="row text-center">
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                        <div class="datum-dag">
                                                            {{$content->dag}}
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
                                                        <div class="datum-maand">
                                                            {{$content->maand}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                                                {{$content->loting}}
                                            </div>
                                            <div class="col-xs-12 col-sm-6 col-md-7 col-lg-7">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h5>
                                                            <strong>Titel:</strong> {{$content->titel}}
                                                        </h5>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <hr>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 border-right">
                                                        {{$content->category}}
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 border-right">
                                                        {{$content->hengel}}
                                                    </div>
                                                    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                                        {{$content->visserij}}
                                                    </div>
                                                    <div class="col-md-12">
                                                        <hr>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 border-right">
                                                        <strong>Prijs</strong>: {{$content->kostprijs}} euro
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <strong>Duur</strong>: {{$content->duur}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <hr>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                                <div class="circel bottom" id="go-to-bottom">
                                    <div class="glyphicon glyphicon-menu-down center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include('components.listOfThumbnails')
        <div class="row">
            <div class="col-md-12 text-center">
                <ul class="pagination">
                    <li><a href="{{url('/wedstrijden/'.$prevdatum)}}"><span>&laquo;</span></a></li>
                    <li><a href="{{url('/wedstrijden/'.$nextdatum)}}" rel="next">&raquo;</a></li>
                </ul>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script>
        $(document).ready(function () {
            var scrolled = 0;
            var maxScroll = $("#vertikalscrollWedstrijden")[0].scrollHeight - 200;
            var move = false;
            var moveSize = 300;
            $("#go-to-top").hide();
            var moveDown = true;
            setInterval(function () {
                if (moveDown) {
                    if (!move) {
                        move = true;
                        scrolled = scrolled + moveSize;
                        $("#go-to-top").show();
                        if (scrolled > maxScroll) {
                            scrolled = maxScroll;
                            scrolled = maxScroll - moveSize;
                            $("#go-to-bottom").hide();
                            moveDown = false;
                        }
                        scrolY(scrolled)
                    }
                } else {
                    if (!move) {
                        move = true;
                        scrolled = scrolled - moveSize;
                        $("#go-to-bottom").show();

                        if (scrolled < 0) {
                            scrolled = 0
                            moveDown = true;
                            $("#go-to-top").hide();
                        }
                        scrolY(scrolled)
                    }
                }
            }, 10000);
            $("#go-to-bottom").on("click", function () {
                if (!move) {
                    move = true;
                    scrolled = scrolled + moveSize;
                    $("#go-to-top").show();
                    if (scrolled > maxScroll) {
                        scrolled = maxScroll;
                        scrolled = maxScroll - moveSize;
                        $("#go-to-bottom").hide();

                    }
                    scrolY(scrolled)
                }
            });
            $("#go-to-top").on("click", function () {
                if (!move) {
                    move = true;
                    scrolled = scrolled - moveSize;
                    $("#go-to-bottom").show();

                    if (scrolled < 0) {
                        scrolled = 0
                        $("#go-to-top").hide();
                    }
                    scrolY(scrolled)
                }
            });
            function scrolY(scroll) {
                $("#vertikalscrollWedstrijden").animate({
                    scrollTop: scrolled
                }, 2000, function () {
                    move = false;
                });

            }

            $(".clearValue").on("click", function () {
                scrolled = 0;
            });
        });
    </script>
@endsection
