<div ng-controller="vissersActiviteitenController">
    @if(Menu::isActiveRoute(['dashboard']))
        <button class="btn btn-default button-add" ng-click="saveViserActiviteit('ja')" data-toggle="modal"
                data-target="#myModal"><i class="glyphicon glyphicon-plus"></i></button>
    @endif
    <div id="snackbar" ng-if="ShowvisActiviteitenPopUp" ng-class='{show:animatePopUp,hide:!animatePopUp}'>

        <img class="worm-icon col-xs-3 hide-600" src="{{url('/images/icon/worm.png')}}">
        <div class="snackbar-box col-xs-9">
            <a href="#" class="snackbar-icon" data-toggle="tooltip"
               title="We verzamelen gegevens van vissers om later voorspelingen te kunnen maken over vangstkansen van toekomstige visdagen.">
                <div class=" glyphicon glyphicon-question-sign pull-right">
                </div>
            </a>
            <div class="row">
                <div class="col-md-12 margin-bottom-3">
                    Ben je deze week gaan vissen?
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button ng-click="saveViserActiviteit('nee')" class="btn btn-default col-md-4 col-md-offset-1">
                            Nee
                        </button>
                        <button  ng-click="saveViserActiviteit('ja')" data-toggle="modal" data-target="#myModal"
                                class="btn btn-default col-md-4 col-md-offset-2">Ja
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('actions.visvangst-modal')
</div>
