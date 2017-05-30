<style>
    #snackbar {
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        padding: 16px;
        position: fixed;
        z-index: 100;
        left: 15%;
        bottom: 10px;
        font-size: 17px;
    }

    #snackbar.show {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 29.5s;
        animation: fadein 0.5s, fadeout 0.5s 29.5s;
    }

    @-webkit-keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 10px;
            opacity: 1;
        }
    }

    @keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 10px;
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeout {
        from {
            bottom: 10px;
            opacity: 1;
        }
        to {
            bottom: 0;
            opacity: 0;
        }
    }

    @keyframes fadeout {
        from {
            bottom: 10px;
            opacity: 1;
        }
        to {
            bottom: 0;
            opacity: 0;
        }
    }

    .snackbar-icon {
        font-size: 10px;
        position: absolute;
        right: 5%;
        top: 5%;
    }

    .snackbar-icon + .tooltip > .tooltip-inner {
        background-color: #323b44;
        color: #fff;
    }

    .modal-header-success {
        color: #fff;
        background-color: #007d9b;
        margin-right: -1px;
    }

    .modal {
        text-align: center;
    }

    @media screen and (min-width: 768px) {
        .modal:before {
            display: inline-block;
            vertical-align: middle;
            content: " ";
            height: 100%;
        }
    }

    .modal-content {
        border-radius: 5px;
    }

    .modal-dialog {
        display: inline-block;
        text-align: left;
        vertical-align: middle;
    }
    .md-datepicker-calendar-pane.md-pane-open{
        z-index: 20000!important;
    }
</style>
<div ng-controller="vissersActiviteitenController">
    <div id="snackbar" ng-if="ShowvisActiviteitenPopUp">
        <a href="#" class="snackbar-icon" data-toggle="tooltip"
           title="We verzamelen gegevens van vissers om later voorspelingen te kunnen maken over vangstkansen van toekomstige visdagen.
             ">
            <div class=" glyphicon glyphicon-question-sign pull-right">
            </div>
        </a>
        <div class="row">
            <div class="col-md-12 margin-bottom-3">
                Ben je deze week gaan vissen?
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button ng-click="saveViserActiviteit('nee')" class="btn btn-default col-md-4 col-md-offset-1">Nee
                    </button>
                    <button ng-click="saveViserActiviteit('ja')" data-toggle="modal" data-target="#myModal"
                            class="btn btn-default col-md-4 col-md-offset-2">Ja
                    </button>
                </div>
            </div>
        </div>
    </div>
    @include('actions.visvangst-modal')
</div>
