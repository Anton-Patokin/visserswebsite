<div class="container">
    <div class="row">
        <section>
            <div class="wizard">
                <div class="wizard-inner">
                    <div class="connecting-line"></div>
                    <ul class="nav nav-tabs" role="tablist">
                        <li  ng-repeat="step in steps" ng-click="progress_clicked(step.step)" ng-class="{active: step.step<=currentStep,'disabled':step.step>currentStep}" >
                            <a ng-href="@{{step.url}}"  title="Step @{{step.step}}" >
                            <span class="round-tab">
                                <i class="glyphicon @{{ step.glyphicon }}"></i>
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <form class="margin-top-5" role="form">
                    <div class="tab-content">
                        <div ng-show="currentStep == 1">
                            @include('add_content.steps.step1')
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
                        <ul ng-show="currentStep>1" class="list-inline text-center margin-top-5">
                            <li>
                                <button ng-click="prev()" type="button" class="btn btn-default">Vorige</button>
                            </li>
                            <li>
                                <button ng-click="next()" type="" class="btn btn-default">Volgende</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </section>
    </div>
</div>