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


                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <label for="datum ">Wanneer ben je gaan vissen?</label>
                                <md-datepicker class="col-md-12" md-min-date="minDate" md-max-date="maxDate"
                                               ng-model="visVagst.myDate" md-placeholder="Enter date"></md-datepicker>
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
                                    <div class="space-for-errors">
                                        <p class="error alert alert-danger"
                                           ng-show="visVangstModalForm.visVagst.vangst.$error.required && showError">
                                            <span class="glyphicon glyphicon-exclamation-sign"
                                                  aria-hidden="true"></span>
                                            oeps je hebt deze veld nog niet ingevuld
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
                                        <div class="space-for-errors">
                                            <p class="error alert alert-danger"
                                               ng-show="visVangstModalForm.visVagst.vangstErvaring.$error.required && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                oeps je hebt deze veld nog niet ingevuld
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
                                        <div class="space-for-errors">
                                            <p class="error alert alert-danger"
                                               ng-show="visVangstModalForm.visVagst.vangstErvaring.$error.required && showError">
                                                <span class="glyphicon glyphicon-exclamation-sign"
                                                      aria-hidden="true"></span>
                                                oeps je hebt deze veld nog niet ingevuld
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12" ng-if="visVagnstShowGoolgeMaps">
                                <div class="form-group">
                                    <label for="sel1">Waar heb je gevist?</label>
                                    <ui-gmap-google-map events="visvanstMap.events" options="visvanstMap.options"
                                                        center='visvanstMap.center'
                                                        zoom='map.zoom'
                                                        control="visvanstMap.control">
                                        <ui-gmap-search-box options="visvanstMap.searchbox.options"
                                                            template="visvanstMap.searchbox.template"
                                                            events="visvanstMap.searchbox.events"
                                                            position="'top-left'"></ui-gmap-search-box>
                                        <ui-gmap-marker ng-if="visvanstMap.showMarker" fit="true"
                                                        coords="visvanstMap.marker.coords"
                                                        options="visvanstMap.marker.options"
                                                        idkey="visvanstMap.marker.id">
                                        </ui-gmap-marker>
                                    </ui-gmap-google-map>
                                </div>
                            </div>
                            <div ng-if="show_gevangen=='ja'" class="col-md-12">
                                <div class="form-group">
                                    <label for="sel1">Wat heb je gevangen</label>
                                    <div class="row" ng-repeat="vis in visVagst.vissen">
                                        <div class="col-xs-8">
                                            <select class="form-control input-lg ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                                                    ng-model="vis.soort" required="required"
                                                    name="soortvis"
                                                    aria-invalid="true">
                                                <option value="5">Carp</option>
                                                <option value="4">VitVis</option>
                                                <option value="3">zemermietn</option>
                                                <option value="2">leeuw</option>
                                                <option value="1">bars</option>
                                                <option value="0">zeevis</option>
                                            </select>
                                        </div>
                                        <div class="col-xs-3">
                                            <input placeholder="Aantal" type="number" step="1"
                                                   ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/"
                                                   class="form-control input-lg" id="" ng-model="vis.aantal"
                                                   maxlength="2" required>
                                        </div>
                                        <div class="col-md-1" >
                                            <button ng-click="verwijderVisSoort($index)" type="button" class="nogEenVisSoort pull-right btn btn-danger"><i class=" glyphicon glyphicon-minus"></i></button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-1 col-md-offset-11" >
                                            <button ng-click="nogEenVisSoort()" type="button" class="nogEenVisSoort pull-right btn btn-success"><i class="glyphicon glyphicon-plus"></i></button>
                                        </div>
                                    </div>
                                    @{{visVagst.vissen}}
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