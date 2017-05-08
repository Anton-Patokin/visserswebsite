@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <h1>plaatsen</h1>
        @foreach($contents as $key=>$content)
            <div class="col-md-3">
                @include('components.visplek_thumbnail')
            </div>
        @endforeach
    </div>
@endsection
