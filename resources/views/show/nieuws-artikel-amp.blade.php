<?php $messages = Config::get('constant.Headings');?>
@extends('layouts.app-amp')
@section('content')
    <div class="container-fluid">
        <?php $head = $messages['nieuws_titel_artikel'];$head_description = $content->titel;?>
            <h1>{{$head}}</h1>
    </div>
@endsection
