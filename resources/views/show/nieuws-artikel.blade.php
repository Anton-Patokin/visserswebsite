<?php $messages = Config::get('constant.Headings');?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <?php $head = $messages['nieuws_titel_artikel'];$head_description = $content->titel;?>
        @include('header')
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="thumbnail">
                    <div class="caption">

                        {!! $content->wiziwig !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
