<?php
$messages = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')
        <?php $head = $messages['nieuws_titel'];$head_description = $messages['nieuws_discription'];?>
        @include('header')
        @include('components.listOfThumbnails')

    </div>
@endsection
