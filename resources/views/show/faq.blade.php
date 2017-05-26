<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <?php $head = $message['faq'];$head_description = $message['faq_description'];?>
        @include('header')


        <div class="row" ng-controller="OccordionConroller">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <div class="thumbnail">
                    <div class="caption">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="col-xs-12 col-sm-12 col-md-12">

                                    @foreach($contents as $key=>$content)
                                        <style>
                                            .panel.margin-0 {
                                                margin-bottom: 0px;

                                            }

                                            .panel .panel-body {
                                                background-color: #323b44;
                                            }
                                            .panel .panel-body h3 {
                                                color: #fff;
                                            }
                                            .panel .panel-body p {
                                                font-size: 1.2em;
                                            }
                                        </style>

                                        <div ng-click="toggelOccordion($event)" class="panel panel-default margin-0">
                                            <div class="panel-body">
                                                <h3>{{$content->vraag}}
                                                    <div class="pull-right">
                                                        <div class="glyphicon glyphicon-chevron-right"></div>
                                                    </div>
                                                </h3>
                                            </div>
                                            <div hidden class="panel-footer">
                                                <p class="margin-top-1 margin-bottom-1">{{$content->antwoord}}</p></div>
                                        </div>
                                    @endforeach
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
@section('script')
    <script src="{{url('/js/occordion.js')}}"></script>
@endsection