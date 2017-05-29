<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header modal-header-success">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Hartstiken goed bezich, hoe is het geweest?</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                        <p>Wij verzamelen gegeven van vissers hoe hun vis dag is geweest om in toekomst voorspelingen te
                            kunnen doen van welke dagen goed zijn om te gaan vissen</p>
                    </div>
                    <div class="col-md-12">
                        <form name="visVangstModalForm" class="" role="form"
                              ng-submit="submitVisVangstModalForm()"
                              novalidate>
                            <div ng-init="visVagst.id = '{{Auth::user()->id}}'">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label for="datum ">Wanneer ben je gaan vissen?</label>
                                <md-datepicker class="col-md-12" md-min-date="minDate" md-max-date="maxDate"
                                               ng-model="visVagst.myDate" md-placeholder="Enter date"></md-datepicker>
                                <input name="datum" type="text" ng-model="visVagst.myDate" required hidden>
                                <div class="space-for-errors" ng-messages="visVangstModalForm.datum.$error"
                                     ng-if="visVangstModalForm.datum.$dirty || showError">
                                    <p ng-message="required" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                        Datum veld is verplicht
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="sel1">Heb je iets gevangen op deze dag?</label>
                                    <select ng-change="vangstVanVandaag()"
                                            class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                            ng-model="visVagst.vangst" required="required" name="vangst"
                                            aria-invalid="true">
                                        <option value="ja">Ja</option>
                                        <option value="nee">Nee</option>
                                    </select>
                                    <div class="space-for-errors" ng-messages="visVangstModalForm.vangst.$error"
                                         ng-if="visVangstModalForm.vangst.$dirty || showError">
                                        <p ng-message="required" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                            Dit veld is verplicht
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div ng-if="show_gevangen=='ja'">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="sel1">Hoe was het vangst?</label>
                                        <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                                ng-model="visVagst.gevangen" required="required"
                                                name="gevangen"
                                                aria-invalid="true">
                                            <option value="5">perfect</option>
                                            <option value="4">zeer goed</option>
                                            <option value="3">goed</option>
                                            <option value="2">gemmidelde</option>
                                            <option value="1">slecht</option>
                                            <option value="0">Zeer slecht</option>
                                        </select>
                                        <div class="space-for-errors" ng-messages="visVangstModalForm.gevangen.$error"
                                             ng-if="visVangstModalForm.gevangen.$dirty || showError">
                                            <p ng-message="required" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                                Dit veld is verplicht
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ng-if="show_gevangen=='nee'">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="sel1">Och aan wat zou het gelegen volgens jouw meest pasend?</label>
                                        <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                                ng-model="visVagst.nietGevangen" required="required"
                                                name="nietGevangen"
                                                aria-invalid="true">
                                            <option value="5">Weer</option>
                                            <option value="4">Voer</option>
                                            <option value="3">Locatie</option>
                                            <option value="2">Wind</option>
                                            <option value="1">Locatie</option>
                                            <option value="0">Anders</option>
                                        </select>
                                        <div class="space-for-errors"
                                             ng-messages="visVangstModalForm.nietGevangen.$error"
                                             ng-if="visVangstModalForm.nietGevangen.$dirty || showError">
                                            <p ng-message="required" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                                Dit veld is verplicht
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12" ng-if="visVagnstShowGoolgeMaps">
                                <div class="form-group">
                                    <style>
                                        .pac-container {
                                            background-color: #FFF;
                                            z-index: 20;
                                            position: fixed;
                                            display: inline-block;
                                            float: left;
                                        }

                                        .modal {
                                            z-index: 20;
                                        }

                                        .modal-backdrop {
                                            z-index: 10;
                                        }

                                        ​
                                    </style>
                                    <label for="sel1">Waar heb je gevist?</label>
                                    <ui-gmap-google-map events="visvanstMap.events" options="visvanstMap.options"
                                                        center='visvanstMap.center'
                                                        zoom='map.zoom'
                                                        control="visvanstMap.control">
                                        <ui-gmap-search-box options="visvanstMap.searchbox.options"
                                                            template="visvanstMap.searchbox.template"
                                                            events="visvanstMap.searchbox.events"
                                                            position="'top-left'"></ui-gmap-search-box>
                                        <ui-gmap-marker ng-if="visvanstMapMarkershowMarker" fit="true"
                                                        coords="visvanstMapMarker.coords"
                                                        options="visvanstMapMarker.options"
                                                        idkey="visvanstMapMarker.id">
                                        </ui-gmap-marker>
                                    </ui-gmap-google-map>
                                    <input type="number" name="lat" ng-model="visVagst.lat" required hidden>
                                    <input type="number" name="lng" ng-model="visVagst.lng" required hidden>
                                    <div class="space-for-errors"
                                         ng-messages="visVangstModalForm.lat.$error && visVangstModalForm.lng.$error"
                                         ng-if="visVangstModalForm.lat.$dirty || showError">
                                        <p ng-message="required" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                            Locatie is verplicht
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div ng-if="show_gevangen=='ja'" class="col-md-12">
                                <div class="form-group">
                                    <label for="sel1">Wat heb je gevangen</label>
                                    <div class="row margin-bottom-2" ng-repeat="vis in visVagst.vissen">
                                        <ng-form name="myForm">
                                            <div class="col-xs-7">
                                                <select name="visSoort"
                                                        class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                                        ng-model="vis.soort" required="required" aria-invalid="true">
                                                    <option value="5">Carp</option>
                                                    <option value="4">VitVis</option>
                                                    <option value="3">zemermietn</option>
                                                    <option value="2">leeuw</option>
                                                    <option value="1">bars</option>
                                                    <option value="0">zeevis</option>
                                                </select>


                                                <div class="space-for-errors" ng-messages="myForm.visSoort.$error"
                                                     ng-if="myForm.visSoort.$dirty || showError">
                                                    <p ng-message="required" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                                        Welke vis soort was het?
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="col-xs-4">
                                                <input name="visAantal" placeholder="Aantal" type="number" step="1"
                                                       ng-pattern="/^\d+$/"
                                                       class="form-control input-lg" id="" ng-model="vis.aantal"
                                                       min="1" max="100" required integer>


                                                <div class="space-for-errors" ng-messages="myForm.visAantal.$error"
                                                     ng-if="myForm.visAantal.$dirty || showError">
                                                    <p ng-message="required" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                                        Hoeveel vissen heb je gevangen?
                                                    </p>
                                                    <p ng-message="max" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                                        Och, 100 is genoeg
                                                    </p>
                                                    <p ng-message="pattern" class="error alert alert-danger">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                                        Ongeldig nummer
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="col-md-1" ng-if="!$first">
                                                <button ng-click="verwijderVisSoort($index)" type="button"
                                                        class="nogEenVisSoort pull-right btn btn-danger"><i
                                                            class=" glyphicon glyphicon-minus"></i></button>
                                            </div>

                                        </ng-form>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1 col-md-offset-11">
                                            <button ng-click="nogEenVisSoort()" type="button"
                                                    class="nogEenVisSoort pull-right btn btn-success"><i
                                                        class="glyphicon glyphicon-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn-lg btn-default">
                                    Opslaan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>