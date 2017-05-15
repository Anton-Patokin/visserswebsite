<?php $user = Auth::user();?>

@if(isset($aanpasen))
    <?php $user =$aanpasen?>
    <?php $head = 'Aanpasen';$head_description = 'Aanpasen van een bericht';?>
@else
    <?php $head = 'Profiel';$head_description = 'Overzicht van profiel';?>
@endif


@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        @include('berichten.error-handling')
        @if ($errors->has('lat'))
           <div ng-init="show_form=true"></div>
        @endif
        @if(count(old()))
            <div ng-init="initializeProfiel('{{old('naam')}}','{{old('lat')}}','{{old('lng')}}','{{old('ervaring')}}','{{old('geslacht')}}','{{old('leeftijd')}}','{{old('kostprijs')}}','{{old('text')}}','http://placehold.it/500x300','{{old('telefonnummer')}}')"></div>
        @else
            <div ng-init="initializeProfiel('{{$user->name}}','{{$user->lat}}','{{$user->lng}}','{{$user->ervaring}}','{{$user->geslacht}}','{{$user->leeftijd}}','{{$user->vraagprijs}}','{{$user->text}}','{{($user->image)?url('/uploads/thumbnail/'.$user->image):'http://placehold.it/500x300'}}','{{$user->telefonnummer}}','{{($user->image)?'true':'false'}}')"></div>
        @endif
        <div class="row">
            <div class="col-md-12">
                @include('header')
            </div>
        </div>
        <div class="row">
            @if($user->active)
                @include('gebruiker.active')
            @else
                @include('gebruiker.inactive')
            @endif
        </div>

        <div class="row" ng-if="show_form">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <?php $head = 'Locatie kiezen';$head_description = 'Kies locatie waar je meest actiev bent';?>
                        @include('header')
                    </div>
                </div>
                <div class="thumbnail">
                    <div class="caption">
                        <ui-gmap-google-map events="mapAdd.events" options="mapAdd.options" center='mapAdd.center'
                                            zoom='map.zoom'
                                            control="mapAdd.control">
                            <ui-gmap-marker coords="marker.coords" options="marker.options" idkey="marker.id">
                            </ui-gmap-marker>
                        </ui-gmap-google-map>
                    </div>
                    @if ($errors->has('lat'))
                        <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                            {{ $errors->first('lat') }}
                        </p>
                    @endif
                </div>
            </div>
        </div>
        <div class="row" ng-show="show_form">

            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                        <?php $head = 'Formulier';$head_description = 'vul ontbrekende gegevens om jouw profiel te voltooien';?>
                        @include('header')
                    </div>
                </div>
                <form name="visTrainerForm" method="POST" id="submitNieuwForm" accept-charset="UTF-8"
                      enctype="multipart/form-data"
                      role="form" action="{{url('/toevoegen/profiel')}}" novalidate>
                    <div class="thumbnail">
                        <div class="caption">
                            {{ csrf_field() }}
                            <input name="id" value="{{$user->id}}" type="text" hidden>
                            <input name="lat" type="text" ng-model="input.lat" hidden>
                            <input name="lng" type="text" ng-model="input.lng" hidden>
                            <div class="row">
                                <div class="col-md-12">
                                    @include('add_content.inputs.naam')
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    @include('add_content.inputs.image')
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="sel1">geslacht*</label>
                                        <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                                ng-model="input.geslacht" required="required" name="geslacht"
                                                aria-invalid="true">
                                            <option value="Man">Man</option>
                                            <option value="Vrouw">Vrouw</option>
                                            <option value="Andere">Andere</option>
                                        </select>
                                        <div class="space-for-errors">
                                            <p class="error alert alert-danger"
                                               ng-show="visTrainerForm.geslacht.$error.required && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                Geslacht is verplicht
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        {{--<input type="date" max="@{{minAge | date:'yyyy-MM-dd'}}" ng-blur="getAgeOfuser()"/>--}}
                                        <label for="leeftijd">Leeftijd</label>
                                        <input name="leeftijd" type="number" step="1"
                                               class="form-control input-lg" id="" placeholder="18"
                                               ng-model="input.leeftijd" min="0" max="99"
                                               required>
                                        <div class="space-for-errors">
                                            <p class="error alert alert-danger "
                                               ng-show="visTrainerForm.leeftijd.range.$valid && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                leeftijd moet tussen 16 en 100 jaar zijn.
                                            </p>
                                            <p class="error alert alert-danger"
                                               ng-show="visTrainerForm.leeftijd.$error.required && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                Leeftijd is verplicht
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    @include('add_content.inputs.ervaring')
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    @include('add_content.inputs.telefon')
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="kostprijs ">kostprijs in euro per les*</label>
                                        <input name="kostprijs" type="number" step="0.50"
                                               ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/"
                                               class="form-control input-lg" id="" placeholder="34.15"
                                               ng-model="input.kostprijs"
                                               maxlength="11" ng-focus="classkostprijsFocus =true"
                                               ng-blur="classkostprijsFocus =false"
                                               required>
                                        <div class="space-for-errors">
                                            <p class="error alert alert-danger "
                                               ng-show="!visTrainerForm.kostprijs.$valid">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                Ongeldig bedraag
                                            </p>
                                            <p class="error alert alert-danger "
                                               ng-show="visTrainerForm.kostprijs.$error.maxlength && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                Dat is veel geld
                                            </p>
                                            <p class="error alert alert-danger"
                                               ng-show="visTrainerForm.kostprijs.$error.required && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                Korstprijs is verplicht
                                            </p>
                                            <p class="error alert alert-danger"
                                               ng-show="99998<input.kostprijs">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                max 99999 euro
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">

                <textarea name="text" ng-class="{'alert-danger':input.text.length>990}" ng-focus="classTextFocus =true"
                          ng-blur="classTextFocus =false" class="form-control input-lg" rows="5" ng-model="input.text"
                          placeholder="Extra uitleg" maxlength="1000" required></textarea>
                                        <div class="space-for-errors">
                                            <p class="error alert alert-danger "
                                               ng-show="visTrainerForm.text.$error.maxlength && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                Extra uitleeg is te lang
                                            </p>
                                            <p class="error alert alert-danger"
                                               ng-show="visTrainerForm.text.$error.required && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                Extra uitlig is verplicht
                                            </p>
                                            <small ng-if="input.text.length>5" class="pull-right max-charakters"
                                                   ng-cloak=""
                                                   ng-class="{'show':classTextFocus}">@{{1000-input.text.length}}
                                                karakters over
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                @include('components.small-header')
                <div class="thumbnail">
                    <img class="image_contest" ng-src="@{{imageSrc}}" alt="">
                    <h3 class="card-title">Trainer</h3>
                    <h3 class="card-title-naam">@{{ input.naam }}</h3>
                    <div class="card-profile pull-right">
                        <img src="{{url('/images/icon/thumbnail_sprite.png')}}">
                    </div>
                    <div class="caption">
                        <h4 ng-show="input.leeftijd"><span class="glyphicon glyphicon-calendar"></span>
                            Leeftijd: @{{ input.leeftijd }} jaar</h4>
                        <h4 ng-show="input.ervaring"><span class="glyphicon glyphicon-tag"></span>
                            Ervaring: @{{ input.ervaring }}
                        </h4>
                        <h4 ng-show="input.kostprijs"><span class="glyphicon glyphicon-euro"></span>
                            Vraagprijs: @{{ input.kostprijs }},- per les</h4>
                        <p>@{{input.text| limitTo:350}}@{{input.text.length > 350 ? '...' : ''}}</p>
                        <p><a href="#" class=" btn-xs" role="button">Meer</a></p>
                    </div>
                </div>
                <ul class="list-inline text-center margin-top-1">
                    <li>
                        <button ng-click="submitFormProfiel()" class="btn-lg btn-default">
                            Verzenden
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    </div>
@endsection