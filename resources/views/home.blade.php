@extends('layouts.app')

@section('content')
    <div class="container-fluid" ng-controller="GoogleMapsConroller">
        @include('berichten.cookieBericht')
        <?php $head = 'home';$head_description = 'Vis activiteiten onder een dak';?>
        @include('header')
        <div class="row margin-top-1">

            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div class="row">
                    @include('components.calender')
                    @if (!Cookie::has('subscriber'))
                            @include('components.subscribe')
                    @endif
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6 box-card">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail">
                            <div class="caption">
                                <div class="box-card-head">

                                    <h3 class="google-maps-titel">Vis activiteiten op de kaart</h3>
                                </div>
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
                                    <ui-gmap-markers ng-init="initVisPlaatsmarkers()" events="map.markers.wedstrijd.events" fit="true" models="plaatsMarkers" coords="'self'"
                                                     icon="{url:'{{url('/images/icon/marker_vis.png')}}'}">
                                        @include('components.googleWindow')
                                    </ui-gmap-markers>
                                    <ui-gmap-markers ng-init="initTrainersmarkers()" events="map.markers.wedstrijd.events" fit="true" models="trainerMarkers" coords="'self'"
                                                     icon="{url:'{{url('/images/icon/marker_trainer.png')}}'}">
                                        @include('components.googleWindow')

                                    </ui-gmap-markers>
                                    <ui-gmap-markers ng-init="initWedstrijdmarkers()" events="map.markers.wedstrijd.events" fit="true"
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
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 box-card">
                <div class="thumbnail ">
                    <div class="caption">
                        <div class="box-card-head">
                            <h3 class="text-center">RECENT</h3>
                        </div>
                        <div class="box-card-body margin-bottom-4">
                            <div class="row" id="vertikalscroll">
                                <div class="circel top" id="go-to-top">
                                    <div class="glyphicon glyphicon-menu-up center"></div>
                                </div>
                                <div class="circel bottom" id="go-to-bottom">
                                    <div class="glyphicon glyphicon-menu-down center"></div>
                                </div>
                                <?php ?>
                                @foreach($recentPost as $key=>$content)
                                    <div class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#" class="popular-img">
                                                    <img src="{{url('/uploads/thumbnail/'.$content->image)}}">
                                                    <div class="p-overlay"></div>
                                                </a>
                                            </div>
                                            <div class="p-content">
                                                <a href="#" class="text-uppercase">{{substr($content->titel,0,40)}}</a>
                                                <span class="p-date">{{ date("d-m-Y", strtotime($content->updated_at))}}</span>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

@include('components.listOfThumbnails')
                <div class="row">
                    <div class="col-md-12 text-center">
                        {{ $pagination->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>





@endsection

@section('script')


    <script>
        $(document).ready(function () {
            var scrolled = 0;
            var maxScroll = $("#vertikalscroll")[0].scrollHeight - 300;
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

            }, 5000);
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
                $("#vertikalscroll").animate({
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

{{--<div ng-if="googleMaps" class="form-group move-down">--}}
{{--<input type="text" id="Autocomplete" class="form-control"--}}
{{--ng-autocomplete ng-model="latLngFromAdress.result"--}}
{{--type="text" class="form-control ng-valid input-lg"--}}
{{--details="details1" options="options1"--}}
{{--placeholder="Zoeken">--}}
{{--</div>--}}
{{--<div class="col-xs-12 col-sm-4 col-md-2 col-lg-2">--}}
{{--<button ng-click="resenterGoogleMaps(latLngFromAdress.result)"--}}
{{--type="submit" class="btn btn-default fullwidth">Zoeken--}}
{{--</button>--}}
{{--</div>--}}