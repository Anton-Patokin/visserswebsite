<?php
$messages = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')
        <?php $head = $messages['tutorial_titel_short'] . $category;$head_description = $messages['tutorial_discription'];?>
        @include('header')

        @include('components.listOfThumbnails')
        <div class="row">
            <div class="col-md-12 text-center">
                {{ $contents->links() }}
            </div>
        </div>
    </div>
@endsection
