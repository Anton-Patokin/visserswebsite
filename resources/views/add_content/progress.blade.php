<div class=" margin-bottom-10 container">
    <div class="">
        <div class="col-md-12">
            <section>
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

                {{--                {{ Form::open(array('url' => 'foo/bar','files' => true,'ng-submit'=>'submitForm()','novalidate')) }}--}}
                <div class="tab-content margin-top-5" ng-init="input.id={{Auth::user()->id }}">
                    <div ng-show="currentStep == 1" class="">
                        <div class="row">
                            <div class="col-md-12 col-lg-12">
                                <h3>Wat wil jij delen? </h3>
                                @include('add_content.steps.step1')
                                <input type="text" name="inputType" ng-model="input.type" hidden>
                            </div>
                        </div>
                    </div>
                    <div ng-if="currentStep == 2">
                        <h3 class="">Kies best pasende locatie voor je @{{ input.type }}</h3>
                        <div class=" margin-top-3">
                            @include('add_content.steps.step2')
                            <ul ng-show="currentStep>1" class="list-inline text-center margin-top-1">
                                <li>
                                    <button ng-click="prev()" type="button" class="btn-lg btn-default">Vorige
                                    </button>
                                </li>
                                <li>
                                    <button ng-if="currentStep ==2 " ng-click="next()" type=""
                                            class="btn-lg btn-default"
                                            ng-disabled="input.lat=='' && input.lng == ''">Volgende
                                    </button>
                                    <button ng-if="currentStep == 3" type="submit" class="btn-lg btn-default">
                                        Verzenden
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <input type="text" name="lat" ng-model="input.lat" hidden>
                        <input type="text" name="lng" ng-model="input.lng" hidden>
                    </div>
                    <div ng-show="currentStep == 3">
                        <div ng-show="input.type=='wedstrijd'" class="row">
                            <form name="visWedstrijdForm" class="margin-top-2 min-height-500" role="form"
                                  ng-submit="submitForm()"
                                  novalidate>
                                @include('add_content.steps.step3.stap3_1')
                                <ul ng-show="currentStep>1" class="list-inline text-center margin-top-1">
                                    <li>
                                        <button ng-click="prev()" type="button" class="btn-lg btn-default">Vorige
                                        </button>
                                    </li>
                                    <li>
                                        <button ng-if="currentStep ==2 " ng-click="next()" type=""
                                                class="btn-lg btn-default"
                                                ng-disabled="input.lat=='' && input.lng == ''">Volgende
                                        </button>
                                        <button ng-if="currentStep == 3" type="submit" class="btn-lg btn-default">
                                            Verzenden
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div ng-show="input.type=='trainer'" class="row">
                            <form name="visTrainerForm" class="margin-top-2 min-height-500" role="form"
                                  ng-submit="submitForm()"
                                  novalidate>
                                @include('add_content.steps.step3.stap3_2')

                                <ul ng-show="currentStep>1" class="list-inline text-center margin-top-1">
                                    <li>
                                        <button ng-click="prev()" type="button" class="btn-lg btn-default">Vorige
                                        </button>
                                    </li>
                                    <li>
                                        <button ng-if="currentStep ==2 " ng-click="next()" type=""
                                                class="btn-lg btn-default"
                                                ng-disabled="input.lat=='' && input.lng == ''">Volgende
                                        </button>
                                        <button ng-if="currentStep == 3" type="submit" class="btn-lg btn-default">
                                            Verzenden
                                        </button>
                                    </li>
                                </ul>

                            </form>
                        </div>
                        <div ng-show="input.type=='visPlek'" class="row">
                            <form name="visPlekForm" class="margin-top-2 min-height-500" role="form"
                                  ng-submit="submitForm()"
                                  novalidate>
                                @include('add_content.steps.step3.stap3_3')
                                <ul ng-show="currentStep>1" class="list-inline text-center margin-top-1">
                                    <li>
                                        <button ng-click="prev()" type="button" class="btn-lg btn-default">Vorige
                                        </button>
                                    </li>
                                    <li>
                                        <button ng-if="currentStep ==2 " ng-click="next()" type=""
                                                class="btn-lg btn-default"
                                                ng-disabled="input.lat=='' && input.lng == ''">Volgende
                                        </button>
                                        <button ng-if="currentStep == 3" type="submit" class="btn-lg btn-default">
                                            Verzenden
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    <div ng-show="currentStep == 4">
                        <h3>Complete</h3>
                        <p>Jou bericht is goed opgeslagen</p>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <p class="alert alert-danger" ng-if="serverErrorMassage">Er ging iets mis probeer pagina
                                te refreshen een opnieuw te proberen</p>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    </div>
</div>