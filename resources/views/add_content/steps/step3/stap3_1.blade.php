<div class="col-xs-12  col-sm-7 col-md-8 col-lg-8">
    <?php $head = $message['wedstrijd'];$head_description = $message['invulen'];?>
    @include('header')

    <div class="row ">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="thumbnail">
                <div class="caption">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            @include('add_content.inputs.title')
                        </div>
                    </div>
                    <div class="row">
                        <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            @include('add_content.inputs.image')
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">

                            {{--<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">--}}
                            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label for="prijzen">Prijzen</label>
                                <input type="prijzen" ng-class="{'alert-danger':input.prijzen.length>148}"
                                       ng-focus="classPrijzenFocus =true" ng-blur="classPrijzenFocus =false"
                                       class="form-control input-lg" id="" placeholder="Geldprijzen"
                                       ng-model="input.prijzen"
                                       maxlength="150">
                                <div class="space-for-errors">
                                    <small ng-if="input.prijzen.length>5" class="pull-right max-charakters" ng-cloak=""
                                           ng-class="{'show':classPrijzenFocus}">@{{150-input.prijzen.length}} karakters
                                        over
                                    </small>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <label for="sel1">Soort wedstrijd*</label>
                                {{--                {{Form::select('category',$category ,'Op tijd',['class'=>'form-control input-lg','ng-model'=>'input.category','required'])}}--}}

                                <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                        ng-model="input.category" required="required" name="category"
                                        aria-invalid="true">
                                    @foreach($category as $type)
                                        <option value="{{$type->category}}">{{$type->category}}</option>
                                    @endforeach
                                </select>

                                {{--voeg nog ng-class aan form om validatie!--}}
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger"
                                       ng-show="visWedstrijdForm.category.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Soort wedstrijd is verplicht
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <label for="sel1">Soort hengel*</label>
                                {{--                {{Form::select('hengel',$hengel ,'werphengel',['class'=>'form-control input-lg','ng-model'=>'input.hengel','required'])}}--}}

                                <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                        ng-model="input.hengel" required="required" name="category" aria-invalid="true">
                                    @foreach($hengel as $type)
                                        <option value="{{$type->hengel}}">{{$type->hengel}}</option>
                                    @endforeach
                                </select>
                                <span ng-show="visWedstrijdForm.hengel.$touched && visWedstrijdForm.hengel.$invalid">Titel van wedstrijd is verplicht</span>
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger"
                                       ng-show="visWedstrijdForm.hengel.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Soort hangel is verplicht
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <label for="sel1">Criteria winnaar*</label>
                                {{--                {{Form::select('visserij', $visserij, 'Op tijd',['class'=>'form-control input-lg','ng-model'=>'input.visserij','required'])}}--}}
                                <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                        ng-model="input.visserij" required="required" name="category"
                                        aria-invalid="true">
                                    @foreach($visserij as $type)
                                        <option value="{{$type->visserij}}">{{$type->visserij}}</option>
                                    @endforeach
                                </select>
                                <span ng-show="visWedstrijdForm.visserij.$touched && visWedstrijdForm.visserij.$invalid">Titel van wedstrijd is verplicht</span>
                                <div class="space-for-errors">
                                    <p class="error alert alert-danger"
                                       ng-show="visWedstrijdForm.visserij.$error.required && showError">
                                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        Soort Criteria is verplicht
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                @include('add_content.inputs.kostprijs')
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {{--<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">--}}
                                <label for="wedstrijdduur">Wedstrijdduur</label>
                                <input name="wedstrijdduur" ng-class="{'alert-danger':input.wedstrijdduur.length>98}"
                                       ng-focus="classWedstrijdduurFocus =true" ng-blur="classWedstrijdduurFocus =false"
                                       type="text"
                                       class="form-control input-lg" id="" placeholder="3 uur"
                                       ng-model="input.wedstrijdduur"
                                       maxlength="100">
                                <div class="space-for-errors">
                                    <small ng-if="input.wedstrijdduur.length>5" class="pull-right max-charakters"
                                           ng-cloak=""
                                           ng-class="{'show':classWedstrijdduurFocus}">@{{100-input.wedstrijdduur.length}}
                                        karakters
                                        over
                                    </small>
                                </div>
                            </div>
                            <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {{--<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">--}}
                                <label for="wedstrijdwater ">Wedstrijdwater</label>
                                <input name="wedstrijdwater" ng-class="{'alert-danger':input.wedstrijdwater.length>198}"
                                       ng-focus="classWedstrijdwaterFocus =true"
                                       ng-blur="classWedstrijdwaterFocus =false"
                                       type="text"
                                       class="form-control input-lg" id="" placeholder="Groenlose gracht"
                                       ng-model="input.wedstrijdwater" maxlength="200">
                                <div class="space-for-errors">
                                    <small ng-if="input.wedstrijdwater.length>5" class="pull-right max-charakters"
                                           ng-cloak=""
                                           ng-class="{'show':classWedstrijdwaterFocus}">@{{200-input.wedstrijdwater.length}}
                                        karakters
                                        over
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <label for="datum ">Datum*</label>
                                {{--<input type="datum" class="form-control" id="" placeholder="3 uur" ng-model="input.datum">--}}
                                <md-datepicker class="col-md-12" ng-model="input.myDate"
                                               md-placeholder="Enter date"></md-datepicker>

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                <label for="loting ">Start</label>
                                <input ng-class="{'alert-danger':input.loting.length>198}"
                                       ng-focus="classLotingFocus =true"
                                       ng-blur="classLotingFocus =false" type="loting" class="form-control input-lg"
                                       id=""
                                       placeholder="tussen 8.00 uur en 08.15 uur aan de waterkant"
                                       ng-model="input.loting"
                                       maxlength="200">
                                <div class="space-for-errors">
                                    <small ng-if="input.loting.length>5" class="pull-right max-charakters" ng-cloak=""
                                           ng-class="{'show':classLotingFocus}">@{{200-input.loting.length}} karakters
                                        over
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {{--<label for="comment">Comment:</label>--}}
                            @include('add_content.inputs.extraInformatie')
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
        <div class="head-thumbnail">
            <div class="icon-img-background-left ship"></div>
            <div class="icon">
                <div class="date-string">@{{ input.maand }}</div>
                <div class="date-nummber">@{{ input.dag }}</div>
            </div>
            <div class="icon-img-background-right" ng-class="input.hengel"></div>
        </div>
        <img class="image_contest" ng-src="@{{imageSrc}}" alt="">
        <div class="caption">
            <h4>@{{input.titel| limitTo:150}}</h4>
            <p>@{{input.text| limitTo:350}}@{{input.text.length > 350 ? '...' : ''}}</p>
            <p><a href="#" class=" btn-xs" role="button" disabled="true">Meer</a></p>
        </div>
    </div>
</div>
