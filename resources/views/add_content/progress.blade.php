@if(isset($aanpasen))
    <?php $head = 'Aanpasen';$head_description = 'Aanpasen van een bericht';?>
    @if(isset($type) && $type=="wedstrijd")
        <div ng-init="initAanpasenWedstrijd('{{$aanpasen->id}}','{{$aanpasen->lat}}','{{$aanpasen->lng}}','{{$aanpasen->titel}}','{{url('/uploads/thumbnail/'.$aanpasen->image)}}','{{$aanpasen->type}}','{{$aanpasen->prijzen}}','{{$aanpasen->category}}','{{$aanpasen->hengel}}','{{$aanpasen->visserij}}','{{$aanpasen->kostprijs}}','{{$aanpasen->duur}}','{{$aanpasen->water}}','{{$aanpasen->datum}}','{{$aanpasen->dag}}','{{$aanpasen->maand}}','{{$aanpasen->loting}}','{{$aanpasen->text}}')">
        </div>
    @endif
    @if(isset($type) && $type=="plaats")
        <div  ng-init="initAanpasenVisplaats('{{$aanpasen->id}}','{{$aanpasen->lat}}','{{$aanpasen->lng}}','{{$aanpasen->titel}}','{{url('/uploads/thumbnail/'.$aanpasen->image)}}','{{$aanpasen->type}}','{{$aanpasen->watertype}}','{{$aanpasen->viswater}}','{{$aanpasen->reglemente}}','{{$aanpasen->vergunigen}}','{{$aanpasen->nachvissen}}','{{$aanpasen->toilet}}','{{$aanpasen->betaalwater}}','{{$aanpasen->prive}}','{{$aanpasen->vissoorten}}','{{$aanpasen->text}}')"></div>
    @endif
@else
    <div ng-init="initContest('{{$category->first()->category}}','{{$hengel->first()->hengel}}','{{$visserij->first()->visserij}}')"></div>
    <div ng-init="initTrainerfunction('{{Auth::user()->name}}')"></div>
    <div ng-init="initVisersPlek('{{$waterType->first()->waterType}}')"></div>
    <?php $head = 'Toevoegen';$head_description = 'Nice je wilt content toevoegen hier kan je het doen';?>
@endif
@include('header')

<div class="row">
    <div class="col-md-12">
        <section  class="hide-600">
            <div class="wizard ">
                <div class="wizard-inner">
                    <div class="connecting-line"></div>
                    <ul class="nav nav-tabs" role="tablist">
                        <li ng-repeat="step in steps" ng-click="progress_clicked(step.step)"
                            ng-class="{active: step.step<=currentStep,'disabled':step.step>currentStep}">
                            <a ng-href="@{{step.url}}" title="Step @{{step.step}}">
                            <span class="round-tab">
                                <i class="glyphicon" ng-class="step.glyphicon">
                                    <div ng-hide="step.glyphicon!=''">@{{ $index }}</div>
                                </i>
                            </span>
                                <p class="step-description">
                                    @{{step.description}}
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        @include('add_content.forms_select')

        {{--                {{ Form::open(array('url' => 'foo/bar','files' => true,'ng-submit'=>'submitForm()','novalidate')) }}--}}
        <div class="tab-content margin-top-2">
            <div ng-show="currentStep == 1" class="">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        @include('add_content.steps.step1')
                        <input type="text" name="inputType" ng-model="input.type" hidden>
                    </div>
                </div>
            </div>
            <div ng-if="currentStep == 2">
                <div class="margin-top-3">
                    @include('add_content.steps.step2')
                    <ul ng-show="currentStep>1" class="list-inline text-center margin-top-1">
                        <li>
                            <button ng-click="prev()" type="button" class="btn-lg btn-default">
                                Vorige
                            </button>
                        </li>
                        <li>
                            <button ng-if="currentStep ==2 " ng-click="next()" type=""
                                    class="btn-lg btn-default"
                                    ng-disabled="input.lat=='' && input.lng == ''">Volgende
                            </button>
                            <button ng-if="currentStep == 3" type="submit"
                                    class="btn-lg btn-default">
                                Verzenden
                            </button>
                        </li>
                    </ul>
                </div>
                <input type="text" name="lat" ng-model="input.lat" hidden>
                <input type="text" name="lng" ng-model="input.lng" hidden>
            </div>


            <div ng-show="currentStep == 4">
                <h3>Complete</h3>
                <p>Jou bericht is goed opgeslagen</p>
            </div>
            <div class="clearfix"></div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p class="alert alert-danger" ng-if="serverErrorMassage">Er ging iets mis
                        probeer pagina
                        te refreshen een opnieuw te proberen</p>
                </div>
            </div>
        </div>
    </div>
</div>
