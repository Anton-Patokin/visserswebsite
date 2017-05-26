<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <?php $head = $message['faq'];$head_description = $message['faq_description'];?>
        @include('header')


        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="thumbnail">
                    <div class="caption">

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
