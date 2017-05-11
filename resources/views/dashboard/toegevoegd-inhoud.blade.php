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
                        <div class="form-group">
                            <input class="form-control" type="search" ng-model="search" placeholder="Filter"/>
                        </div>
                        @include('dashboard.tabel-toegevoegd')
                        <div class="row">
                            <div class="col-md-12 " id="navigation-legande">
                                <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                                    <h5 class="border-right text-uppercase">legende</h5>
                                </div>
                                <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                                    <div >
                                        <ul>
                                            <li><div class="glyphicon glyphicon-trash"></div> Verwijderen</li>
                                            <li><div class="glyphicon glyphicon-plus"></div> Terugzetten</li>
                                            <li><div class="glyphicon glyphicon-pencil"></div> Bijwerken</li>
                                            <li><div class="glyphicon glyphicon-zoom-in"></div> Bekijken</li>
                                            <li><div class="box green"> </div> Toegevoegd</li>
                                            <li><div class="box blue"> </div> Niet goed gekeurd</li>
                                            <li><div class="box red"></div> Verwijderd</li>



                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection