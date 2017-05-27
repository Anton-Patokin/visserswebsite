<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');

?>
@extends('layouts.app-amp')

@section('head')
    <title>FAQ| meest gestelde vragen voor Fishing Friends</title>
    <meta name="description"
          content="Hier vind je overzicht van alle belangerijke vragen die gesteld werden aan fishing friends miss vind je hier jouw antwoord">
    <link rel="canonical" href="{{url('/faq')}}"/>
@endsection
@section('jsonLd')
    {{--    @include('jsonLd.nieuwsArtikel-jsonLd')--}}
@endsection
@section('script')
    <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
@endsection
@section('content')


    <div class="row">
        <div class="col-xs-12 text-center margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
                    <p class="heading">{{$message['faq']}}</p>
                    <h1 class="heading-titel">{{$message['faq_description']}}</h1>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 text-center margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
                    <amp-accordion>
                        @foreach($contents as $key=>$content)
                            <section expanded>
                                <h3>{{$content->vraag}}</h3>
                                <p>{{$content->antwoord}}</p>
                            </section>
                        @endforeach
                    </amp-accordion>
                    <div class="col-md-12 text-center">
                        {{ $contents->links() }}
                    </div>
                </div>
            </div>
        </div>

    </div>



@endsection
