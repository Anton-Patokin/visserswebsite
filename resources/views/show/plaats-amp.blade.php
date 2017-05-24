<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');

?>
@extends('layouts.app-amp')

@section('head')
    <title>{{$message['viePlaats_titel']}} | {{substr($content->titel, 0,150 ) }}</title>
    <meta name="description" content="{{substr($content->text, 0,250 ) }}">
    <link rel="canonical" href="{{url('/'.$content->type.'/'.$content->id)}}"/>
@endsection
@section('jsonLd')
    @include('jsonLd.nieuwsArtikel-jsonLd')
@endsection
@section('content')
    <div class="row">
        <div class="col-xs-12 text-center margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
                    <p class="heading">{{$message['viePlaats_titel']}}</p>
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
                            <h4>{{$content->watertype}}</h4>
                        </div>
                        <div class="col-xs-12">
                            <h4>{{($content->nachvissen)?'Nacht vissen':'Dag vissen'}}</h4>
                        </div>
                        <div class="col-xs-12">
                            <h4>{{($content->toilet)?'er is openbare ruimte':'geen openbare ruimte'}}</h4>
                        </div>
                        <div class="col-xs-12">
                            <h4>{{($content->prive)?'Prive water':'Openbaar water'}}</h4>
                        </div>
                        <div class="col-xs-12">
                            <h4>{{($content->betaalwater)?'Extra bijbetalen':'Stads tarieven'}}</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12">
                            <h3 class="text-uppercase">{{$termen['vissoorten']}}</h3>
                            {{$content->vissoorten}}
                        </div>
                        <div class="col-xs-12">
                            <h3 class="text-uppercase">{{$termen['waterType']}}</h3>
                            {{$content->viswater}}
                        </div>
                        <div class="col-xs-12">
                            <h3 class="text-uppercase">{{$termen['reglementen']}}</h3>
                            {{$content->reglementen}}
                        </div>
                        <div class="col-xs-12">
                            <h3 class="text-uppercase">{{$termen['extra']}}</h3>
                            {{$content->text}}
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
