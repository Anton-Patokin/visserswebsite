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
{{--    @include('jsonLd.nieuwsArtikel-jsonLd')--}}
@endsection
@section('content')
    <div class="row">
        <div class="col-xs-12 text-center margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
                    <p class="heading">{{$message['trainer_titel']}}</p>
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
