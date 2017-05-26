<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')

        <?php $head = $message['faq'];$head_description = $message['faq_toevoegen'];?>
        @include('header')

        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="box-card-body">
                            <h3 class="text-uppercase">Formulier</h3>
                            <form class="form-horizontal" role="form" method="POST" action="{{url('/toevoegen/faq')}}">
                                {{ csrf_field() }}

                                <div class="form-group{{ $errors->has('vraag') ? ' has-error' : '' }}">
                                    <label for="vraag" class="col-md-12">Wat is het vraag</label>

                                    <div class="col-md-12">
                                   <textarea ng-init="vraag='{{old('vraag')}}'" id="vraag" type="text"
                                             class="form-control" name="vraag"
                                             class="form-control input-lg" ng-focus="classVraagFocus =true"
                                             ng-blur="classVraagFocus =false" ng-model="vraag"
                                             maxlength="500" rows="3" cols="50"></textarea>
                                        <small ng-if="vraag.length>5"
                                               class="pull-right max-charakters"
                                               ng-class="{'show':classVraagFocus}">@{{500-vraag.length}}
                                            karakters
                                            over
                                        </small>
                                        <div class="space-for-errors">
                                            @if ($errors->has('vraag'))
                                                <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                    {{ $errors->first('vraag') }}
                                                </p>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group{{ $errors->has('antwoord') ? ' has-error' : '' }}">
                                    <label for="antwoord" class="col-md-12">Schrijf hier antwoord</label>

                                    <div class="col-md-12">
                                   <textarea ng-init="antwoord='{{old('antwoord')}}'" id="antwoord" type="text"
                                             class="form-control" name="antwoord"
                                             class="form-control input-lg" ng-focus="classAntwoordFocus =true"
                                             ng-blur="classAntwoordFocus =false" ng-model="antwoord"
                                             maxlength="1500" rows="7" cols="50"></textarea>
                                        <small ng-if="antwoord.length>5"
                                               class="pull-right max-charakters"
                                               ng-class="{'show':classAntwoordFocus}">@{{1500-antwoord.length}}
                                            karakters
                                            over
                                        </small>
                                        <div class="space-for-errors">
                                            @if ($errors->has('antwoord'))
                                                <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                    {{ $errors->first('antwoord') }}
                                                </p>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group{{ $errors->has('volgerde') ? ' has-error' : '' }}">
                                    <label for="volgerde" class="col-md-12">Op welke positie moet het antword
                                        komen</label>
                                    <div class="col-md-12">
                                        <input id="antwoord" type="number" step="1" class="form-control" name="volgerde"
                                               value="<?php
                                               if (old('volgerde')) {
                                                   echo old('volgerde');
                                               } elseif ($max) {
                                                   echo $max;
                                               }
                                               ?>" min="0" max="{{$max}}">
                                        <div class="space-for-errors">
                                            @if ($errors->has('volgerde'))
                                                <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                    {{ $errors->first('volgerde') }}
                                                </p>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-default pull-right btn-lg">
                                            Verzenden
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
