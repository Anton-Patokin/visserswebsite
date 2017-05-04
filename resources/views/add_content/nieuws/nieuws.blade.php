@extends('layouts.app')
@section('content')
    <div class="container">
        <form method="POST" id="submitNieuwForm" name="nieuwForm" file='true' role="form" ng-submit="submitNieuwForm()" novalidate>
            {{ csrf_field() }}
            <input name="number" type="text" value="{{Auth::user()->id }}" hidden>
            <div class="row">
                <div class="row">
                    <div class="col-md-9">
                        <h1>Nieuws artikel schrijven</h1>
                        <hr class="line-title">
                    </div>
                    <div class="col-md-3">
                        <h1>Voorbeeld</h1>
                        <hr class="line-title">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="titel" class=" control-label">titel</label>
                                    <input id="titel" type="text" name="titel" required
                                           ng-model="nieuws.titel" maxlength="250" class="form-control input-lg"
                                           ng-focus="classTitelFocus =true"
                                           ng-blur="classTitelFocus =false"
                                           ng-class="{'alert-warning':nieuws.titel.length>245}">
                                    <div class="space-for-errors">
                                        <p class="error alert alert-danger "
                                           ng-show="nieuwForm.titel.$error.maxlength && showError">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                            Naam is te lang
                                        </p>
                                        <p class="error alert alert-danger"
                                           ng-show="nieuwForm.titel.$error.required && showError">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                            Naam van de visplek is verplicht
                                        </p>
                                        <small ng-if="nieuws.titel.length>5 && !nieuwForm.titel.$error.required"
                                               class="pull-right max-charakters"
                                               ng-class="{'show':classTitelFocus}">@{{250-nieuws.titel.length}}
                                            karakters
                                            over
                                        </small>
                                        @if ($errors->has('titel'))
                                            <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                {{ $errors->first('titel') }}
                                            </p>
                                        @endif
                                    </div>
                                </div>
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
                                    <label for="inleiding " class="control-label">Inleiding </label>
                        <textarea id="inleiding" type="text" class="form-control" name="inleiding "
                                  required
                                  class="form-control input-lg" ng-focus="classInleidingFocus =true"
                                  ng-blur="classInleidingFocus =false"
                                  ng-class="{'alert-warning':nieuws.inleiding.length>345}" ng-model="nieuws.inleiding"
                                  maxlength="350"></textarea>

                                    <div class="space-for-errors">
                                        <p class="error alert alert-danger "
                                           ng-show="nieuwForm.inleiding.$error.maxlength && showError">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                            Naam is te lang
                                        </p>
                                        <p class="error alert alert-danger"
                                           ng-show="nieuwForm.inleiding.$error.required && showError">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                            Naam van de visplek is verplicht
                                        </p>
                                        <small ng-if="nieuws.inleiding.length>5 && !nieuwForm.inleiding.$error.required"
                                               class="pull-right max-charakters"
                                               ng-class="{'show':classInleidingFocus}">@{{350-nieuws.inleiding.length}}
                                            karakters
                                            over
                                        </small>
                                        @if ($errors->has('inleiding'))
                                            <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                {{ $errors->first('inleiding') }}
                                            </p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="vergunigen">Maak een nieuws artikel aan</label>
                                    <textarea id="wiziwig" name="wiziwig" class="form-control input-lg"
                                              rows="25" ng-model="wiziwig"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="thumbnail">
                            <img ng-src="@{{imageSrc}}" alt="">
                            <div class="caption">
                                <h4>@{{nieuws.titel}}</h4>
                                <p>@{{nieuws.inleiding}}</p>
                                <p><a href="#" class=" btn-xs" role="button">Meer</a></p>
                            </div>
                        </div>
                        <ul class="list-inline text-center margin-top-1">
                            <li>
                                <button type="submit" class="btn-lg btn-default">
                                    Verzenden
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection
@section('script')
    <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.3/summernote.css" rel="stylesheet">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.3/summernote.js"></script>
    <script>
        $(document).ready(function() {
            $('#wiziwig').summernote({
                height: 600,                 // set editor height
                minHeight: null,             // set minimum height of editor
                maxHeight: null,             // set maximum height of editor
                focus: true                  // set focus to editable area after initializing summernote
            });
        });
    </script>
@endsection


