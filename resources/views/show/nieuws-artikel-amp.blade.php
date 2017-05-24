<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');

?>
@extends('layouts.app-amp')

@section('head')
    <title>{{$message['viePlaats_titel']}} | {{substr($content->titel, 0,150 ) }}</title>
    <meta name="description" content="{{substr($content->inleiding, 0,250 ) }}">
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
                    <p class="heading">{{$message['nieuws_titel_artikel']}}</p>
                    <h1 class="heading-titel">{{$content->titel}}</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                ------------>{!!strlen($content->wiziwig) !!}
                <?php

                $output = preg_replace('/(<[^>]+) style=".*?"/i', '$1', $content->wiziwig);

                function ampify($html = '')
                {
                    # Replace img, audio, and video elements with amp custom elements

                    $html = preg_replace_callback('/' . 'src="(.*?)"' . '/',
                            function($match) {
                                $size = getimagesize($match[1],$size);
                                return "src='".$match[1]."'".$size[3] .' layout="responsive"';
                            }, $html);

                    $html = str_ireplace(
                            ['<img', '<video', '/video>', '<audio', '/audio>'],
                            ['<amp-img  ', '<amp-video', '/amp-video>', '<amp-audio', '/amp-audio>'],
                            $html
                    );
                    $html = preg_replace('/<amp-img(.*?)>/', '<amp-img$1></amp-img>', $html);
                    # Whitelist of HTML tags allowed by AMP
                    $html = strip_tags($html, '<h1><h2><h3><h4><h5><h6><a><p><ul><ol><li><blockquote><q><cite><ins><del><strong><em><code><pre><svg><table><thead><tbody><tfoot><th><tr><td><dl><dt><dd><article><section><header><footer><aside><figure><time><abbr><div><span><hr><small><br><amp-img><amp-audio><amp-video><amp-ad><amp-anim><amp-carousel><amp-fit-rext><amp-image-lightbox><amp-instagram><amp-lightbox><amp-twitter><amp-youtube>');
                    return $html;
                }


                $output= ampify($output);

                ?>


                {!!$output !!}
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