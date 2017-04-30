<div class="col-xs-12  col-sm-7 col-md-8 col-lg-8" ng-init="initTrainerfunction('{{Auth::user()->name}}')">
    <div class="row">
        <div class="col-md-12">
            <h1>Vul het formulier zo dat andere mensen jouw kunnen vinden trainer</h1>
            <hr class="line-title">
        </div>
    </div>
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
                <div class="row">
                    <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label for="sel1">geslacht*</label>
                        <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                ng-model="input.geslacht" required="required" name="geslacht" aria-invalid="true">
                            <option value="Man">Man</option>
                            <option value="Vrouw">Vrouw</option>
                            <option value="Andere">Andere</option>
                        </select>
                    </div>
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
            <label for="kostprijs ">kostprijs in euro per les*</label>
            <input name="kostprijs" type="number" step="0.50" ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/"
                   class="form-control input-lg" id="" placeholder="34.15" ng-model="input.kostprijs"
                   maxlength="11" ng-focus="classkostprijsFocus =true" ng-blur="classkostprijsFocus =false"
                   required>
            <div class="space-for-errors">
                <p class="error alert alert-danger "
                   ng-show="!visTrainerForm.kostprijs.$valid">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    Ongeldig bedraag
                </p>
                <p class="error alert alert-danger "
                   ng-show="visTrainerForm.kostprijs.$error.maxlength && showError">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    Dat is veel geld
                </p>
                <p class="error alert alert-danger"
                   ng-show="visTrainerForm.kostprijs.$error.required && showError">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    Korstprijs is verplicht
                </p>
                <p class="error alert alert-danger"
                   ng-show="99998<input.kostprijs">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    max 99999 euro
                </p>
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
                    <p class="error alert alert-danger " ng-show="visTrainerForm.text.$error.maxlength && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Extra uitleeg is te lang
                    </p>
                    <p class="error alert alert-danger" ng-show="visTrainerForm.text.$error.required && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Extra uitlig is verplicht
                    </p>
                    <small ng-if="input.text.length>5" class="pull-right max-charakters" ng-cloak=""
                           ng-class="{'show':classTextFocus}">@{{1000-input.text.length}} karakters over
                    </small>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-12 col-sm-5 col-md-4 col-lg-4">
    <div class="row">
        <div class="col-md-12">
            <h1>Live voorbeeld</h1>
            <hr class="line-title">
        </div>
    </div>
    <div class="thumbnail">
        <img class="image_contest" ng-src="@{{imageSrc}}" alt="">
        <h3 class="card-title">Trainer</h3>
        <h3 class="card-title-naam">@{{ input.naam }}</h3>
        <div class="card-profile pull-right" >
            <img src="{{url('/images/icon/thumbnail_sprite.png')}}">
        </div>
        <div class="caption">
            <h4 ng-show="input.leeftijd"><span class="glyphicon glyphicon-calendar"></span> Leeftijd: @{{ input.leeftijd }} jaar</h4>
            <h4 ng-show="input.ervaring"><span class="glyphicon glyphicon-tag"></span> Ervaring: @{{ input.ervaring }}</h4>
            <h4 ng-show="input.kostprijs"><span class="glyphicon glyphicon-euro"></span> Vraagprijs: @{{ input.kostprijs }},- per les</h4>
            <p>@{{input.text| limitTo:350}}@{{input.text.length > 350 ? '...' : ''}}</p>
            <p><a href="#" class=" btn-xs" role="button">Meer</a></p>
        </div>
    </div>


</div>
