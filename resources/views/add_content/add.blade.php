@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        @include('add_content.progress')
    </div>
@endsection
@section('script')
    <link href="{{ asset('css/angular-material.min.css') }}" rel="stylesheet">

@endsection