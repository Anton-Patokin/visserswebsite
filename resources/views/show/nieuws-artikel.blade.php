<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <?php $head = $message['nieuws_titel_artikel'];$head_description = $content->titel;?>
        @include('header')

        <?php


        ?>
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
