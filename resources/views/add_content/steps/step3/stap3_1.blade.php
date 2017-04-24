<?php
$sort_wedstrijd = ['Op tijd' => 'Op tijd',
        'Op gewicht' => 'Op gewicht'];
$hengel = ['Vaste hengel' => 'Vaste hengel',
        'werphengel' => 'Werphengel',
        'dobber'=>'dobber',
        'Alles' => 'Hengelkeuze vrij'];
$visserij = ['Vaste hengel' => 'Vaste hengel',
        'Werphengel' => 'Werphengel',
        'Alles' => 'Alles is toegelaten'];
?>
<div class="col-md-9">
@{{visWedstrijdForm.$valid}}
    <div class="form-group">
        {{--<label for="titel" class="pull-right">max 255 leters</label>--}}
        <input name="titel" ng-class="{'alert-danger':input.titel.length>148}" type="title" class="form-control" ng-focus="classTextFocus =true" ng-blur="classTextFocus =false" id="" placeholder="Titel" ng-model="input.titel" maxlength="150" required>
        <span ng-show="visWedstrijdForm.titel.$touched && visWedstrijdForm.titel.$invalid">Titel van wedstrijd is verplicht</span>
        <small class="pull-right max-charakters" ng-cloak="" ng-class="{'show':classTextFocus}">@{{150-input.titel.length}} karakters over</small>
    </div>
    <div class="form-group margin-top-2">
        <div class="row">
            <div class="col-md-6">
                <label for="image">Kies een foto*</label>
                <input class="form-control" type="file" ng-file-select="onFileSelect($files)">
                {{--<progress ng-if="progress" class="col-md-12" value="@{{progress}}"></progress>--}}
                {{--                {{Form::file('image',['class'=>'form-control'])}}--}}
            </div>
            <div class="col-md-6">
                <label for="prijzen">Prijzen</label>
                <input type="prijzen" ng-class="{'alert-danger':input.prijzen.length>148}" ng-focus="classPrijzenFocus =true" ng-blur="classPrijzenFocus =false" class="form-control" id="" placeholder="Geldprijzen" ng-model="input.prijzen" maxlength="150">
                <small class="pull-right max-charakters" ng-cloak="" ng-class="{'show':classPrijzenFocus}">@{{150-input.prijzen.length}} karakters over</small>
            </div>
        </div>


    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-4">
                <label for="sel1">Soort wedstrijd*</label>
                {{Form::select('category',$sort_wedstrijd ,'Op tijd',['class'=>'form-control','ng-model'=>'input.category','required'])}}
                {{--voeg nog ng-class aan form om validatie!--}}
                <span ng-show="visWedstrijdForm.category.$touched && visWedstrijdForm.category.$invalid">Titel van wedstrijd is verplicht</span>
            </div>
            <div class="col-md-4">
                <label for="sel1">Soort hengel*</label>
                {{Form::select('hengel',$hengel ,'werphengel',['class'=>'form-control','ng-model'=>'input.hengel','required'])}}
                <span ng-show="visWedstrijdForm.hengel.$touched && visWedstrijdForm.hengel.$invalid">Titel van wedstrijd is verplicht</span>
            </div>
            <div class="col-md-4">
                <label for="sel1">Vorm van visserij*</label>
                {{Form::select('visserij', $visserij, 'Op tijd',['class'=>'form-control','ng-model'=>'input.visserij','required'])}}
                <span ng-show="visWedstrijdForm.visserij.$touched && visWedstrijdForm.visserij.$invalid">Titel van wedstrijd is verplicht</span>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-3">
                <label for="kostprijs ">kostprijs in euro*</label>
                <input name="kostprijs" type="text" ng-class="{'alert-danger':input.kostprijs.length>10}" class="form-control" id="" placeholder="34.15" ng-model="input.kostprijs"  maxlength="11">
            </div>
            <div class="col-md-3">
                <label for="wedstrijdduur">Wedstrijdduur</label>
                <input name="wedstrijdduur" ng-class="{'alert-danger':input.wedstrijdduur.length>98}" ng-focus="classWedstrijdduurFocus =true" ng-blur="classWedstrijdduurFocus =false" type="text" class="form-control" id="" placeholder="3 uur" ng-model="input.wedstrijdduur"  maxlength="100">
                <small class="pull-right max-charakters" ng-cloak="" ng-class="{'show':classWedstrijdduurFocus}">@{{100-input.wedstrijdduur.length}} karakters over</small>
            </div>
            <div class="col-md-6">
                <label for="wedstrijdwater ">Wedstrijdwater</label>
                <input name="wedstrijdwater" ng-class="{'alert-danger':input.wedstrijdwater.length>198}" ng-focus="classWedstrijdwaterFocus =true" ng-blur="classWedstrijdwaterFocus =false" type="text" class="form-control" id="" placeholder="Groenlose gracht" ng-model="input.wedstrijdwater" maxlength="200">
                <small class="pull-right max-charakters" ng-cloak="" ng-class="{'show':classWedstrijdwaterFocus}">@{{200-input.wedstrijdwater.length}} karakters over</small>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-4">
                <label for="datum ">Datum*</label>
                {{--<input type="datum" class="form-control" id="" placeholder="3 uur" ng-model="input.datum">--}}
                <md-datepicker class="col-md-12" ng-model="input.myDate" md-placeholder="Enter date"></md-datepicker>

            </div>
            <div class="col-md-8">
                <label for="loting ">Loting</label>
                <input ng-class="{'alert-danger':input.loting.length>198}" ng-focus="classLotingFocus =true" ng-blur="classLotingFocus =false" type="loting" class="form-control" id=""
                       placeholder="tussen 8.00 uur en 08.15 uur aan de waterkant" ng-model="input.loting" maxlength="200">
                <small class="pull-right max-charakters" ng-cloak="" ng-class="{'show':classLotingFocus}">@{{200-input.loting.length}} karakters over</small>
            </div>
        </div>
    </div>
    <div class="form-group">
        {{--<label for="comment">Comment:</label>--}}
        <textarea name="text" ng-class="{'alert-danger':input.text.length>198}" ng-focus="classTextFocus =true" ng-blur="classTextFocus =false"  class="form-control" rows="5" ng-model="input.text" placeholder="Extra uitleg" maxlength="1000" required></textarea>
        <span ng-show="visWedstrijdForm.text.$touched && visWedstrijdForm.text.$invalid">Extra uitleg is verplicht</span>
        <small class="pull-right max-charakters" ng-cloak="" ng-class="{'show':classTextFocus}">@{{1000-input.text.length}} karakters over</small>
    </div>
</div>
<div class="col-md-3">
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
