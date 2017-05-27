<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')

        <?php $head = $message['faq'];$head_description = $message['faq_description'];?>
        @include('header')
        <div class="row" ng-controller="OccordionConroller">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    @if(count($contents))
                                        @foreach($contents as $key=>$content)
                                            <div ng-click="toggelOccordion($event)"
                                                 class="panel panel-default margin-0">
                                                <div class="panel-body">
                                                    <h3>{{$content->vraag}}
                                                        <div class="pull-right">
                                                            <div class="glyphicon glyphicon-chevron-right"></div>
                                                        </div>
                                                    </h3>
                                                </div>
                                                <div hidden class="panel-footer">
                                                    <p class="margin-top-1 margin-bottom-1">{{$content->antwoord}}</p>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            @if(Auth::user()->admin)
                                                                <div class="pull-right">
                                                                    <a href="{{url('/editFaq/'.$content->id)}}">
                                                                        <div class="glyphicon glyphicon-pencil"></div>
                                                                    </a>
                                                                    <a href="{{url('/verwijderFaq/'.$content->id)}}">
                                                                        <div class="glyphicon glyphicon-trash"></div>
                                                                    </a>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    @else
                                        <h1>Momentel zijn er nog geen vragen gesteld wees eerste die het doen</h1>
                                        <a href="{{url('/contact')}}"><p>Contact</p></a>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center">
                                {{ $contents->links() }}
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