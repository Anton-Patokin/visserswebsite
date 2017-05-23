<div ng-show="currentStep == 3">
    <div ng-show="input.type=='wedstrijd'" class="row">
        <form name="visWedstrijdForm" class=" min-height-500"
              role="form"
              ng-submit="submitForm()"
              novalidate>
            @include('add_content.steps.step3.stap3_1')
            <ul ng-show="currentStep>1"
                class="list-inline text-center margin-top-1">
                <li>
                    <button ng-click="prev()" type="button"
                            class="btn-lg btn-default">Vorige
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
        </form>
    </div>
    <div ng-show="input.type=='trainer'" class="row">
        <form name="visTrainerForm" class=" min-height-500" role="form"
              ng-submit="submitForm()"
              novalidate>
            @include('add_content.steps.step3.stap3_2')

            <ul ng-show="currentStep>1"
                class="list-inline text-center margin-top-1">
                <li>
                    <button ng-click="prev()" type="button"
                            class="btn-lg btn-default">Vorige
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

        </form>
    </div>
    <div ng-show="input.type=='plaats'" class="row">
        <form name="visPlekForm" class=" min-height-500" role="form"
              ng-submit="submitForm()"
              novalidate>
            @include('add_content.steps.step3.stap3_3')
            <ul ng-show="currentStep>1"
                class="list-inline text-center margin-top-1">
                <li>
                    <button ng-click="prev()" type="button"
                            class="btn-lg btn-default">Vorige
                    </button>
                </li>
                <li>
                    <button ng-if="currentStep == 3" type="submit"
                            class="btn-lg btn-default">
                        Verzenden
                    </button>
                </li>
            </ul>
        </form>
    </div>
</div>