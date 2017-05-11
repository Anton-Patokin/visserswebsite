@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')
        <?php $head = 'Dashboard';$head_description = 'Overzicht van alle inhoud';?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-md-12 box-card">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="form-group">
                            <input class="form-control" type="search" ng-model="search" placeholder="Filter"/>
                        </div>
                        @include('dashboard.tabel-toegevoegd')
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection