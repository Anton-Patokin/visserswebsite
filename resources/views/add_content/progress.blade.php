<div class=" margin-bottom-10">
    <div class="row">
        <div class="col-md-12">
            <section>
                <div class="wizard container">
                    <div class="wizard-inner">
                        <div class="connecting-line"></div>
                        <ul class="nav nav-tabs" role="tablist">
                            <li ng-repeat="step in steps" ng-click="progress_clicked(step.step)"
                                ng-class="{active: step.step<=currentStep,'disabled':step.step>currentStep}">
                                <a ng-href="@{{step.url}}" title="Step @{{step.step}}">
                            <span class="round-tab">
                                <i class="glyphicon" ng-class="step.glyphicon"><div ng-hide="step.glyphicon!=''">@{{ $index }}</div></i>
                            </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form class="margin-top-2 min-height-500" role="form">
                    <div class="tab-content">
                        <div ng-show="currentStep == 1" class="container">
                            <div class="row">
                                <div class="col-md-12 col-lg-12">
                                    <h3>Wat wil jij delen? </h3>
                                    @include('add_content.steps.step1')
                                    <input type="text" name="inputType" ng-model="input.type" hidden>
                                </div>
                            </div>
                        </div>
                        <div ng-show="currentStep == 2">
                            <h3>Step 2</h3>
                            <p>This is step 2</p>

                        </div>
                        <div ng-show="currentStep == 3">
                            <h3>Step 3</h3>
                            <p>This is step 3</p>
                        </div>
                        <div ng-show="currentStep == 4">
                            <h3>Complete</h3>
                            <p>You have successfully completed all steps.</p>
                        </div>
                        <div class="clearfix"></div>
                        <ul ng-show="currentStep>1" class="list-inline text-center ">
                            <li>
                                <button ng-click="prev()" type="button" class="btn btn-default">Vorige</button>
                            </li>
                            <li>
                                <button ng-click="next()" type="" class="btn btn-default">Volgende</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </section>
        </div>
    </div>
</div>