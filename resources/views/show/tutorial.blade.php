<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <?php $head = $message['tutorial_titel'];$head_description = $content->titel;?>
        @include('header')

        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <div class="thumbnail">
                    <div class="caption">
                        {!! File::get('files/'.$content->url.'.php') !!}
                    </div>
                </div>
            </div>
            @include('components.relevante')
        </div>
    </div>
    </div>
@endsection
