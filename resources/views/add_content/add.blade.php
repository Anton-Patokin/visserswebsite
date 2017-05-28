<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid" ng-init="input.id={{Auth::user()->id }}">
        @include('add_content.progress')
    </div>
@endsection
{{--@section('script')--}}
    {{--<link href="{{ asset('css/angular-material.min.css') }}" rel="stylesheet">--}}

{{--@endsection--}}