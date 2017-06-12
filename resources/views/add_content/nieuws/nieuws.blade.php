@extends('layouts.app')
@section('content')
    @if(isset($aanpasen))
        <?php $head = 'Aanpasen';$head_description = 'Hier kunt u tutorial artikel aanpasen';?>
        @include('header')
    @else
        <?php $head = 'Toevoegen';$head_description = 'Maak niew tutorial aan';?>
    @endif
    <div class="container-fluid">
        <form method="POST" id="submitNieuwForm" name="nieuwForm" accept-charset="UTF-8" enctype="multipart/form-data"
              role="form" action="{{url('/toevoegen/nieuws')}}" novalidate>
            @if(isset($aanpasen)&& !count(old()))
                <div ng-init="initAanpassenNieuwsArtikel('{{$aanpasen->titel}}','{{$aanpasen->inleiding}}','{{url('/uploads/thumbnail/'.$aanpasen->image)}}','true')"></div>
                <input name="aanpasen" type="text" value="{{$aanpasen->id}}" hidden>
            @else
                <div ng-init="initAanpassenNieuwsArtikel('{{ old('titel') }}','{{ old('inleiding') }}','http://placehold.it/500x300','false')"></div>
            @endif
            {{ csrf_field() }}
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-lg-9">
                            @include('header')
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="thumbnail">
                                        <div class="caption">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group {{ $errors->has('titel') ? ' has-error' : '' }}">
                                                        <label for="titel" class=" control-label">Titel</label>
                                                        <input id="titel" type="text" name="titel" required
                                                               ng-model="nieuws.titel" maxlength="250"
                                                               class="form-control input-lg"
                                                               ng-focus="classTitelFocus =true"
                                                               ng-blur="classTitelFocus =false"
                                                               ng-class="{'alert-warning':nieuws.titel.length>245}">
                                                        <div class="space-for-errors">
                                                            {{--<p class="error alert alert-danger "--}}
                                                            {{--ng-show="nieuwForm.titel.$error.maxlength && showError">--}}
                                                            {{--<span class="glyphicon glyphicon-exclamation-sign"--}}
                                                            {{--aria-hidden="true"></span>--}}
                                                            {{--Naam is te lang--}}
                                                            {{--</p>--}}
                                                            {{--<p class="error alert alert-danger"--}}
                                                            {{--ng-show="nieuwForm.titel.$error.required && showError">--}}
                                                            {{--<span class="glyphicon glyphicon-exclamation-sign"--}}
                                                            {{--aria-hidden="true"></span>--}}
                                                            {{--Naam van de visplek is verplicht--}}
                                                            {{--</p>--}}
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
                                                    <div class="form-group{{ $errors->has('image') ? ' has-error' : '' }}">
                                                        <label for="image">Kies een foto*</label>
                                                        <input name="image" class="form-control input-lg" type="file"
                                                               ng-file-select="onFileSelect($files)">
                                                        <div class="space-for-errors">
                                                            {{--<p class="error alert alert-danger" ng-show="showImageInvalideFileFormat">--}}
                                                            {{--<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>--}}
                                                            {{--Afbeelding moet png,jpg of jpeg format zijn--}}
                                                            {{--</p>--}}
                                                            {{--<p class="error alert alert-danger" ng-show="showSelectImageValidation && showError">--}}
                                                            {{--<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>--}}
                                                            {{--Je hebt nog geen afbeelding gekozen.--}}
                                                            {{--</p>--}}
                                                            {{--<p class="error alert alert-danger" ng-show="ShowfileSizeValidation">--}}
                                                            {{--<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>--}}
                                                            {{--Afbeelding mag niet groter zijn dan 5mb--}}
                                                            {{--</p>--}}
                                                            @if ($errors->has('image'))
                                                                <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                                    {{ $errors->first('image') }}
                                                                </p>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group{{ $errors->has('inleiding') ? ' has-error' : '' }}">
                                                        <label for="inleiding " class="control-label">Inleiding </label>
                        <textarea id="inleiding" type="text" class="form-control" name="inleiding"
                                  required
                                  class="form-control input-lg" ng-focus="classInleidingFocus =true"
                                  ng-blur="classInleidingFocus =false"
                                  ng-class="{'alert-warning':nieuws.inleiding.length>345}" ng-model="nieuws.inleiding"
                                  maxlength="350"></textarea>

                                                        <div class="space-for-errors">
                                                            {{--<p class="error alert alert-danger "--}}
                                                            {{--ng-show="nieuwForm.inleiding.$error.maxlength && showError">--}}
                                                            {{--<span class="glyphicon glyphicon-exclamation-sign"--}}
                                                            {{--aria-hidden="true"></span>--}}
                                                            {{--Naam is te lang--}}
                                                            {{--</p>--}}
                                                            {{--<p class="error alert alert-danger"--}}
                                                            {{--ng-show="nieuwForm.inleiding.$error.required && showError">--}}
                                                            {{--<span class="glyphicon glyphicon-exclamation-sign"--}}
                                                            {{--aria-hidden="true"></span>--}}
                                                            {{--Naam van de visplek is verplicht--}}
                                                            {{--</p>--}}
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
                                                    <div class="form-group{{ $errors->has('wiziwig') ? ' has-error' : '' }}">
                                                        <label for="wiziwig">Maak een nieuws artikel aan</label>
                                    <textarea id="wiziwig" name="wiziwig" class="form-control input-lg"
                                              rows="25">
                                        {{ old('wiziwig') }}
                                        @if(isset($aanpasen))
{{--                                            {{$aanpasen->wiziwig}}--}}
                                            {!! File::get('files/'.$aanpasen->url.'.php') !!}

                                        @endif
                                    </textarea>
                                                        <div class="space-for-errors">
                                                            @if ($errors->has('wiziwig'))
                                                                <p class="error alert alert-danger">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                                    {{ $errors->first('wiziwig') }}
                                                                </p>
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            @include('components.small-header')
                            <div class="thumbnail">
                                <img ng-src="@{{imageSrc}}" alt="">
                                <div class="caption">
                                    <h3>@{{nieuws.titel}}</h3>
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
            </div>
        </form>
    </div>
@endsection
@section('script')
    <link href="{{url('/css/summernote.css')}}" rel="stylesheet">
    <script src="{{url('/js/libs/summernote.js')}}"></script>
    <script>
        $(document).ready(function () {
            $('#wiziwig').summernote({
                height: 600,                 // set editor height
                minHeight: null,             // set minimum height of editor
                maxHeight: null,             // set maximum height of editor
                focus: true                  // set focus to editable area after initializing summernote
            });
        });
    </script>
@endsection


