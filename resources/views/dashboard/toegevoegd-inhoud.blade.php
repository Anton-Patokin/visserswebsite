@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')

        <?php $head = 'Dashboard';$head_description = 'Hier vind je een overzicht van de nieuw toegevoegde inhoud';?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-md-12 box-card">
                <div class="thumbnail">
                    <div class="caption">
                        @if(isset($showContentToevoegen)&&$showContentToevoegen==true)
                            @include('components.voeg-content-toe')
                        @else


                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-12">
                                        <input class="form-control filterSearch" type="search" ng-model="search" placeholder="Filter"/>
                                    </div>
                                </div>

                            </div>
                            @include('dashboard.tabel-toegevoegd')
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection