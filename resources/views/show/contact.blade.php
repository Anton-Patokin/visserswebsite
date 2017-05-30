<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        @include('berichten.cookieBericht')
        <?php $head = $message['contact'];$head_description = $message['contact_description'];?>
        @include('header')
        <div class="row margin-top-1">
            <div class="col-xs-12 col-sm-7 col-md-4">
                <div class="thumbnail">
                    <div class="caption">
                        <h3 class="text-uppercase">Werkwijze</h3>
                        <p>Bij FAQ staan reeds veel antwoorden op frequente vragen. VInd je hier niet de gewenste info,</p>
                        stuur ons dan via deze pagina je vraag of verzoek.
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-5 col-md-8">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="box-card-body">
                            <h3 class="text-uppercase">Formulier</h3>
                            <form class="form-horizontal" role="form" method="POST" action="{{url('/contact')}}">
                                {{ csrf_field() }}
                                <div class="form-group{{ $errors->has('naam') ? ' has-error' : '' }}">
                                    <label for="naam" class="col-md-12">Naam</label>
                                    <div class="col-md-12">
                                        <input id="naam" type="text" class="form-control" name="naam"
                                               value="<?php
                                                       if(old('naam')){
                                                           echo old('naam');
                                                       }elseif(Auth::user()){
                                                           echo Auth::user()->name;
                                                       }
                                               ?>" placeholder="Anton" value="" autofocus required>

                                        <div class="space-for-errors">
                                            @if ($errors->has('naam'))
                                                <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                    {{ $errors->first('naam') }}
                                                </p>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group{{ $errors->has('mail') ? ' has-error' : '' }}">
                                    <label for="mail" class="col-md-12">E-Mail</label>
                                    <div class="col-md-12">
                                        <input id="mail" type="email" class="form-control" name="mail"
                                               value="<?php
                                               if(old('mail')){
                                                   echo old('mail');
                                               }elseif(Auth::user()){
                                                   echo Auth::user()->email;
                                               }
                                               ?>" placeholder="Patokin.anton@gmail.com">
                                        <div class="space-for-errors">
                                            @if ($errors->has('mail'))
                                                <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                    {{ $errors->first('mail') }}
                                                </p>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group{{ $errors->has('bericht') ? ' has-error' : '' }}">
                                    <label for="bericht" class="col-md-12">Bericht</label>

                                    <div class="col-md-12">
                                   <textarea ng-init="bericht = '{{old('bericht')}}'" id="inleiding" type="text" class="form-control" name="bericht"
                                             class="form-control input-lg" ng-focus="classInleidingFocus =true"
                                             ng-blur="classInleidingFocus =false" ng-model="bericht"
                                             maxlength="1500" rows="7" cols="50" ></textarea>
                                        <small ng-if="bericht.length>5"
                                               class="pull-right max-charakters"
                                               ng-class="{'show':classInleidingFocus}">@{{1500-bericht.length}}
                                            karakters
                                            over
                                        </small>
                                        <div class="space-for-errors">
                                            @if ($errors->has('bericht'))
                                                <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                    {{ $errors->first('bericht') }}
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
@endsection