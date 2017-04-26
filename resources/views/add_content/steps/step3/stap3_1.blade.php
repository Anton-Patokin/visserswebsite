<?php
$sort_wedstrijd = ['Op tijd' => 'Op tijd',
        'Op gewicht' => 'Op gewicht'];
$hengel = ['Vaste hengel' => 'Vaste hengel',
        'werphengel' => 'Werphengel',
        'dobber' => 'dobber',
        'Alles' => 'Hengelkeuze vrij'];
$visserij = ['Vaste hengel' => 'Vaste hengel',
        'Werphengel' => 'Werphengel',
        'Alles' => 'Alles is toegelaten'];
?>
<div class="col-xs-12 col-ms-6 col-sm-8 col-md-9 col-lg-9">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="form-group">
                {{--<label for="titel" class="pull-right">max 255 leters</label>--}}
                <input name="titel" ng-class="{'alert-danger':input.titel.length>140}" type="title"
                       class="form-control input-lg" ng-focus="classTextFocus =true" ng-blur="classTextFocus =false"
                       id="" placeholder="Titel" ng-model="input.titel" ng-maxlength="150" maxlength="150" required>
                {{--<p ng-show="userForm.username.$error.minlength">Username is too short.</p>--}}
                <div class="space-for-errors">
                    <p class="error alert alert-danger " ng-show="visWedstrijdForm.titel.$error.maxlength && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Title is te lang
                    </p>
                    <p class="error alert alert-danger" ng-show="visWedstrijdForm.titel.$error.required && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Titel van dewedstrijd is verplicht
                    </p>
                    <small ng-if="input.titel.length>5 && !visWedstrijdForm.titel.$error.required"
                           class="pull-right max-charakters"
                           ng-class="{'show':classTextFocus}">@{{150-input.titel.length}} karakters over
                    </small>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <label for="image">Kies een foto*</label>
                <input class="form-control input-lg" type="file" ng-file-select="onFileSelect($files)">
                <div class="space-for-errors">
                    <p class="error alert alert-danger" ng-show="showImageInvalideFileFormat">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Afbeelding moet png,jpg of jpeg format zijn
                    </p>
                    <p class="error alert alert-danger" ng-show="showSelectImageValidation && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Je hebt nog geen afbeelding gekozen.
                    </p>
                    <p class="error alert alert-danger" ng-show="ShowfileSizeValidation">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Afbeelding mag niet groter zijn dan 5mb
                    </p>

                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <label for="prijzen">Prijzen</label>
                <input type="prijzen" ng-class="{'alert-danger':input.prijzen.length>148}"
                       ng-focus="classPrijzenFocus =true" ng-blur="classPrijzenFocus =false"
                       class="form-control input-lg" id="" placeholder="Geldprijzen" ng-model="input.prijzen"
                       maxlength="150">
                <div class="space-for-errors">
                    <small ng-if="input.prijzen.length>5" class="pull-right max-charakters" ng-cloak=""
                           ng-class="{'show':classPrijzenFocus}">@{{150-input.prijzen.length}} karakters over
                    </small>
                </div>
            </div>
        </div>


    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <label for="sel1">Soort wedstrijd*</label>
                {{Form::select('category',$sort_wedstrijd ,'Op tijd',['class'=>'form-control input-lg','ng-model'=>'input.category','required'])}}
                {{--voeg nog ng-class aan form om validatie!--}}
                <div class="space-for-errors">
                    <p class="error alert alert-danger"
                       ng-show="visWedstrijdForm.category.$error.required && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Soort wedstrijd is verplicht
                    </p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <label for="sel1">Soort hengel*</label>
                {{Form::select('hengel',$hengel ,'werphengel',['class'=>'form-control input-lg','ng-model'=>'input.hengel','required'])}}
                <span ng-show="visWedstrijdForm.hengel.$touched && visWedstrijdForm.hengel.$invalid">Titel van wedstrijd is verplicht</span>
                <div class="space-for-errors">
                    <p class="error alert alert-danger" ng-show="visWedstrijdForm.hengel.$error.required && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Soort hangel is verplicht
                    </p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <label for="sel1">Vorm van visserij*</label>
                {{Form::select('visserij', $visserij, 'Op tijd',['class'=>'form-control input-lg','ng-model'=>'input.visserij','required'])}}
                <span ng-show="visWedstrijdForm.visserij.$touched && visWedstrijdForm.visserij.$invalid">Titel van wedstrijd is verplicht</span>
                <div class="space-for-errors">
                    <p class="error alert alert-danger"
                       ng-show="visWedstrijdForm.visserij.$error.required && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Soort Visserij is verplicht
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <label for="kostprijs ">kostprijs in euro*</label>
                <input name="kostprijs" type="number" step="0.50" ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/"
                       class="form-control input-lg" id="" placeholder="34.15" ng-model="input.kostprijs"
                       maxlength="11" ng-focus="classkostprijsFocus =true" ng-blur="classkostprijsFocus =false"
                       required>
                <div class="space-for-errors">
                    <p class="error alert alert-danger "
                       ng-show="!visWedstrijdForm.kostprijs.$valid">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Ongeldig bedraag
                    </p>
                    <p class="error alert alert-danger "
                       ng-show="visWedstrijdForm.kostprijs.$error.maxlength && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Dat is veel geld
                    </p>
                    <p class="error alert alert-danger"
                       ng-show="visWedstrijdForm.kostprijs.$error.required && showError">
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
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <label for="wedstrijdduur">Wedstrijdduur</label>
                <input name="wedstrijdduur" ng-class="{'alert-danger':input.wedstrijdduur.length>98}"
                       ng-focus="classWedstrijdduurFocus =true" ng-blur="classWedstrijdduurFocus =false" type="text"
                       class="form-control input-lg" id="" placeholder="3 uur" ng-model="input.wedstrijdduur"
                       maxlength="100">
                <div class="space-for-errors">
                    <small ng-if="input.wedstrijdduur.length>5" class="pull-right max-charakters" ng-cloak=""
                           ng-class="{'show':classWedstrijdduurFocus}">@{{100-input.wedstrijdduur.length}} karakters
                        over
                    </small>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label for="wedstrijdwater ">Wedstrijdwater</label>
                <input name="wedstrijdwater" ng-class="{'alert-danger':input.wedstrijdwater.length>198}"
                       ng-focus="classWedstrijdwaterFocus =true" ng-blur="classWedstrijdwaterFocus =false" type="text"
                       class="form-control input-lg" id="" placeholder="Groenlose gracht"
                       ng-model="input.wedstrijdwater" maxlength="200">
                <div class="space-for-errors">
                    <small ng-if="input.wedstrijdwater.length>5" class="pull-right max-charakters" ng-cloak=""
                           ng-class="{'show':classWedstrijdwaterFocus}">@{{200-input.wedstrijdwater.length}} karakters
                        over
                    </small>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <label for="datum ">Datum*</label>
                {{--<input type="datum" class="form-control" id="" placeholder="3 uur" ng-model="input.datum">--}}
                <md-datepicker class="col-md-12" ng-model="input.myDate" md-placeholder="Enter date"></md-datepicker>

            </div>
            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <label for="loting ">Loting</label>
                <input ng-class="{'alert-danger':input.loting.length>198}" ng-focus="classLotingFocus =true"
                       ng-blur="classLotingFocus =false" type="loting" class="form-control input-lg" id=""
                       placeholder="tussen 8.00 uur en 08.15 uur aan de waterkant" ng-model="input.loting"
                       maxlength="200">
                <div class="space-for-errors">
                    <small ng-if="input.loting.length>5" class="pull-right max-charakters" ng-cloak=""
                           ng-class="{'show':classLotingFocus}">@{{200-input.loting.length}} karakters over
                    </small>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">


                {{--<label for="comment">Comment:</label>--}}
                <textarea name="text" ng-class="{'alert-danger':input.text.length>990}" ng-focus="classTextFocus =true"
                          ng-blur="classTextFocus =false" class="form-control input-lg" rows="5" ng-model="input.text"
                          placeholder="Extra uitleg" maxlength="1000" required></textarea>
                <span ng-show="visWedstrijdForm.text.$touched && visWedstrijdForm.text.$invalid">Extra uitleg is verplicht</span>
                <div class="space-for-errors">
                    <p class="error alert alert-danger " ng-show="visWedstrijdForm.text.$error.maxlength && showError">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        Extra uitleeg is te lang
                    </p>
                    <p class="error alert alert-danger" ng-show="visWedstrijdForm.text.$error.required && showError">
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
<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3" >
    <div class="thumbnail">
        <div class="head-thumbnail">
            <div class="icon-img-background-left ship"></div>
            <div class="icon">
                <div class="date-string">@{{ input.maand }}</div>
                <div class="date-nummber">@{{ input.dag }}</div>
            </div>
            <div class="icon-img-background-right" ng-class="input.hengel"></div>
        </div>

        <img ng-src="@{{imageSrc}}" alt="">
        <div class="caption">
            <h4>@{{input.titel| limitTo:150}}</h4>
            <p>@{{input.text| limitTo:350}}@{{input.text.length > 350 ? '...' : ''}}</p>
            <p><a href="#" class=" btn-xs" role="button" disabled="true">Meer</a></p>
        </div>
    </div>
</div>
