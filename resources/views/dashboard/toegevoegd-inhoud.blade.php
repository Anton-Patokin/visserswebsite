@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')

        <?php $head = 'Dashboard';$head_description = 'Hier vind ja overzicht van alle door jouw toegevoegde inhoud';?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-md-12 box-card">
                <div class="thumbnail">
                    <div class="caption">
                        @if(isset($showContentToevoegen)&&$showContentToevoegen==true)
                            @include('components.voeg-content-toe')
                        @else
                            <div class="form-group">
                                <input class="form-control" type="search" ng-model="search" placeholder="Filter"/>
                            </div>
                            @include('dashboard.tabel-toegevoegd')
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection