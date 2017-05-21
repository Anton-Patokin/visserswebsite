<?php
$termen = Config::get('constant.Termen')

?>
@extends('layouts.app-amp')

@section('head')
    <title>Visplaats | {{substr($content->titel, 0,150 ) }}</title>
    <meta name="description" content="{{substr($content->text, 0,250 ) }}">
    <link rel="canonical" href="{{url('/'.$content->type.'/'.$content->id)}}"/>
@endsection
@section('jsonLd')
    <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "Visplaats",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "<?php echo url('/')?>"
          },
          "headline": "<?php echo $content->titel;?>",
          "image": {
            "@type": "ImageObject",
            "url": "<?php echo url('/uploads/thumbnail/'.$content->image)?>",
            "height": 300,
            "width": 500
          },
          "datePublished": "<?php echo $content->created_at;?>",
          "dateModified": "<?php echo $content->updated_at;?>",
          "author": {
            "@type": "Person",
            "name": "<?php echo $content->user->name?>"
          },
           "publisher": {
            "@type": "Organization",
            "name": "Fishing friends",
            "logo": {
              "@type": "ImageObject",
              "url": "<?php echo url('/images/icon/logo-600-60.jpg')?>",
              "width": 600,
              "height": 60
            }
          },
          "description": "Vis plaats | <?php echo $content->watertype;?> | <?php echo $content->vissoorten;?> |<?php echo substr($content->text, 0,200 );?>"
        }
    </script>
@endsection
@section('content')
    <div class="row">
        <div class="col-xs-12 text-center margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
                    <p class="heading">Vis plaats</p>
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
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
                    <div class="row">
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
                </div>
            </div>
        </div>

        <div class="col-xs-12 margin-bottom-2 margin-bottom-2">
            <div class="thumbnail">
                <div class="caption">
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
@endsection
