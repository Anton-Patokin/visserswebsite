<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app-amp')

@section('head')
    <title>Vis wedstrijd | {{$content->titel}}</title>
    <meta name="description" content="Overzicht van de  vis wedstrijd met algemene informatie zoals locatie, loting, adres ...
    {{substr($content->text, 0,250 ) }}">
    <link rel="canonical" href="{{url('/'.$content->type.'/'.$content->id)}}"/>
@endsection
@section('jsonLd')
    @include('jsonLd.event')
@endsection
@section('content')
    <div class="row">
        <div class="col-xs-12 text-center margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
                    <p class="heading">{{$message['wedstrijd']}}</p>
                    <h1 class="heading-titel">{{$content->titel}}</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
                    <amp-img src="{{url('/uploads/thumbnail/'.$content->image)}}" height="300" width="500"
                             class="grey-placeholder"
                             layout="responsive">
                    </amp-img>
                    <div class="row margin-top-2">
                        <div class="col-xs-12 text-uppercase">
                            <h3>{{$termen['kermerken']}}</h3>
                        </div>
                        <div class="col-xs-12">
                            <h4>{{$content->category}}</h4>
                        </div>

                        <div class="col-xs-12">
                            <h4>{{$content->hengel}}</h4>
                        </div>
                        <div class="col-xs-12">
                            <h4>{{$content->visserij}}</h4>
                        </div>
                    </div>
                    <div class="row margin-top-2">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-md-6">
                                    <h3 class="text-left">
                                        {{$termen['prijzen']}}
                                    </h3>
                                    <p class="text-left">
                                        {{$content->prijzen}}
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="text-left">
                                        {{$termen['duur']}}
                                    </h3>
                                    <p class="text-left">
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
                                {{$content->kostprijs}}
                            </p>
                        </div>
                        <div class="col-md-12">
                            <h3 class="text-left">
                                {{$termen['water']}}
                            </h3>
                            <p class="text-left">
                                {{$content->water}}
                            </p>
                        </div>
                        <div class="col-md-12">
                            <h3 class="text-left">
                                {{$termen['loting']}}
                            </h3>
                            <p class="text-left">
                                {{$content->loting}}
                            </p>
                        </div>
                        <div class="col-md-12">
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
    <div class="row">
        <div class="col-xs-12 margin-bottom-2">
            <div class="thumbnail">
                <h3 class="text-uppercase text-center text-relevant">{{$termen['relevant']}}</h3>
                <?php $content_url = url('/' . $content->type . '/' . $content->id . '/' . substr($content->titel, 0, 40))?>
                @if(count($relevente)>1)
                    @foreach($relevente as $key=>$content)
                        <?php $content_url = url('/' . $content->type . '/' . $content->id . '/' . substr($content->titel, 0, 40) . '/amp')?>

                        <div class="row media">
                            <div class="col-xs-4">
                                <a href="{{$content_url}}">
                                    <amp-img src="{{url('/uploads/thumbnail/'.$content->image)}}" height="72"
                                             width="120"
                                             class="grey-placeholder small-img">
                                    </amp-img>
                                </a>
                            </div>
                            <div class="col-xs-8 ">
                                <div class="margin-right">
                                    <a href="{{$content_url}}"><h3>{{substr($content->titel,0,40)}}</h3></a>
                                    <p>
                                        {{ date("d-m-Y", strtotime($content->updated_at))}}
                                    </P>
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
@endsection
