<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <?php $head = $message['dashboard'];$head_description = $message['dahboard_description'];?>
                @include('header')

            </div>
        </div>
    </div>
@endsection
