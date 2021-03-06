<div class="col-xs-12  col-sm-7 col-md-8 col-lg-8">
    <?php $head = $message['viePlaats_titel'];$head_description = $message['invulen'];?>
    @include('header')
    <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="thumbnail">
                <div class="caption">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="naam_visplek">Naam van de visstek*</label>
                                <input name="naam_visplek" ng-class="{'alert-danger':input.naam_visplek.length>50}"
                                       type="text"
                                       class="form-control input-lg" ng-focus="classnaam_visplekFocus =true"
                                       ng-blur="classnaam_visplekFocus =false"
                                       id="" ng-model="input.naam_visplek" ng-maxlength="50" maxlength="50"
                                       placeholder="Als de naam nog niet betaat vezien gewoon dan eentje" required>
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger "
                                       ng-show="visPlekForm.naam_visplek.$error.maxlength && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Naam is te lang
                                    </p>
                                    <p class="error alert alert-danger"
                                       ng-show="visPlekForm.naam_visplek.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Naam van de visstek is verplicht
                                    </p>
                                    <small ng-if="input.naam_visplek.length>5 && !visPlekForm.naam_visplek.$error.required"
                                           class="pull-right max-charakters"
                                           ng-class="{'show':classnaam_visplekFocus}">@{{50-input.naam_visplek.length}}
                                        karakters over
                                    </small>
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
                                <label for="watertype">Watertype*</label>
                                <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                        ng-model="input.watertype" required="required" name="watertype"
                                        aria-invalid="true">
                                    @foreach($waterType as $key=>$type)
                                        <option value="{{$type->waterType}}">{{$type->waterType}}</option>
                                    @endforeach
                                </select>
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger"
                                       ng-show="visPlekForm.geslacht.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Watertype is verplicht
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="viswater">Viswater en visstekken*</label>
                <textarea name="viswater" ng-class="{'alert-warning':input.viswater.length>990}"
                          ng-focus="classViswaterFocus =true"
                          ng-blur="classViswaterFocus =false" class="form-control input-lg" rows="5"
                          ng-model="input.viswater"
                          placeholder="Viswater en visstekken" maxlength="1000" required></textarea>
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger "
                                       ng-show="visPlekForm.viswater.$error.maxlength && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Viswater en visstekken is te lang
                                    </p>
                                    <p class="error alert alert-danger"
                                       ng-show="visPlekForm.viswater.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Viswater en visstekken uitleg is verplicht
                                    </p>
                                    <small ng-if="input.viswater.length>5" class="pull-right max-charakters" ng-cloak=""
                                           ng-class="{'show':classViswaterFocus}">@{{1000-input.viswater.length}}
                                        karakters over
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="sel1">Reglementen visvijver</label>
                <textarea name="reglementen" ng-class="{'alert-danger':input.reglementen.length>990}"
                          ng-focus="classreglementenFocus =true"
                          ng-blur="classreglementenFocus =false" class="form-control input-lg" rows="5"
                          ng-model="input.reglementen"
                          placeholder="Reglementen visvijver" maxlength="1000"></textarea>
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger "
                                       ng-show="visPlekForm.reglementen.$error.maxlength && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Reglementen visvijver uitleg is te lang
                                    </p>
                                    <p class="error alert alert-danger"
                                       ng-show="visPlekForm.reglementen.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Reglementen visvijver uitleg is verplicht
                                    </p>
                                    <small ng-if="input.reglementen.length>5" class="pull-right max-charakters"
                                           ng-cloak=""
                                           ng-class="{'show':classreglementenFocus}">@{{1000-input.reglementen.length}}
                                        karakters over
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row margin-bottom-3">
                        <div class="col-md-6">
                            <label for="nachvissen">Mag je er nachtvissen?</label>
                            <div class="row">
                                <div class="col-md-12">
                                    <label class="radio-inline"><input type="radio" name="nachvissen"
                                                                       ng-model="input.nachvissen" value="1">JA</label>
                                    <label class="radio-inline"><input type="radio" name="nachvissen"
                                                                       ng-model="input.nachvissen" value="0" checked>NEE</label>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">
                            <label for="toilet">Kantine of toilet?</label>
                            <div class="row">
                                <div class="col-md-12">
                                    <label class="radio-inline"><input type="radio" name="toilet"
                                                                       ng-model="input.toilet" value="1">JA</label>
                                    <label class="radio-inline"><input type="radio" name="toilet"
                                                                       ng-model="input.toilet" value="0"
                                                                       checked>NEE</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row margin-bottom-3">
                        <div class="col-md-6">
                            <label for="prive">Prive?</label>
                            <div class="row">
                                <div class="col-md-12">
                                    <label class="radio-inline"><input type="radio" name="Prive" ng-model="input.prive"
                                                                       value="1">JA</label>
                                    <label class="radio-inline"><input type="radio" name="Prive" ng-model="input.prive"
                                                                       value="0" checked>NEE</label>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">
                            <label for="betaalwater">betaalwater?</label>
                            <div class="row">
                                <div class="col-md-12">
                                    <label class="radio-inline"><input type="radio" name="betaalwater"
                                                                       ng-model="input.betaalwater" value="1">JA</label>
                                    <label class="radio-inline"><input type="radio" name="betaalwater"
                                                                       ng-model="input.betaalwater" value="0" checked>NEE</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="vergunigen">Vergunningen en rechten</label>
                                <input name="vergunigen" ng-class="{'alert-danger':input.vergunigen.length>250}"
                                       type="text"
                                       class="form-control input-lg" ng-focus="classVergunigenFocus =true"
                                       ng-blur="classVergunigenFocus =false"
                                       id="" ng-model="input.vergunigen" ng-maxlength="250" maxlength="250"
                                       placeholder="Standart post vergunigen">
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger "
                                       ng-show="visPlekForm.vergunigen.$error.maxlength && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Vergunningen en rechten is te lang
                                    </p>
                                    <p class="error alert alert-danger"
                                       ng-show="visPlekForm.vergunigen.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Vergunningen en rechten is verplicht
                                    </p>
                                    <small ng-if="input.vergunigen.length>5 && !visPlekForm.vergunigen.$error.required"
                                           class="pull-right max-charakters"
                                           ng-class="{'show':classVergunigenFocus}">@{{250-input.vergunigen.length}}
                                        karakters over
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="vissoorten">Belangrijkste vissoorten*</label>
                                <input name="vissoorten" ng-class="{'alert-danger':input.vissoorten.length>250}"
                                       type="text"
                                       class="form-control input-lg" ng-focus="classVissoortenFocus =true"
                                       ng-blur="classVissoortenFocus =false"
                                       id="" ng-model="input.vissoorten" ng-maxlength="250" maxlength="250"
                                       placeholder="Carper, Snoek, voorn">
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger "
                                       ng-show="visPlekForm.vissoorten.$error.maxlength && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Naam is te lang
                                    </p>
                                    <p class="error alert alert-danger"
                                       ng-show="visPlekForm.vissoorten.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Naam van de visplek is verplicht
                                    </p>
                                    <small ng-if="input.vissoorten.length>5 && !visPlekForm.vissoorten.$error.required"
                                           class="pull-right max-charakters"
                                           ng-class="{'show':classVissoortenFocus}">@{{250-input.vissoorten.length}}
                                        karakters over
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="text">extra</label>
                <textarea name="text" ng-class="{'alert-danger':input.text.length>990}" ng-focus="classTextFocus =true"
                          ng-blur="classTextFocus =false" class="form-control input-lg" rows="5" ng-model="input.text"
                          placeholder="Extra" maxlength="1000"></textarea>
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger "
                                       ng-show="visPlekForm.text.$error.maxlength && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Extra uitleg is te lang
                                    </p>
                                    <p class="error alert alert-danger"
                                       ng-show="visPlekForm.text.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Extra uitleg is verplicht
                                    </p>
                                    <small ng-if="input.text.length>5" class="pull-right max-charakters" ng-cloak=""
                                           ng-class="{'show':classTextFocus}">@{{1000-input.text.length}} karakters over
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-12 col-sm-5 col-md-4 col-lg-4">
    @include('components.small-header')
    <div class="thumbnail">
        <img ng-src="@{{imageSrc}}" alt="">
        <div class="card-profile pull-right">
            <img src="{{url('/images/icon/fish.jpg')}}">
        </div>
        <div class="caption margin-top-5">
            <h3>@{{input.naam_visplek}}</h3>
            <p>@{{input.viswater| limitTo:350}}@{{input.viswater.length > 350 ? '...' : ''}}</p>
            <p><a href="#" class=" btn-xs" role="button">Meer</a></p>
        </div>
    </div>
</div>
