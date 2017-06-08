<div class="thumbnail">
    <div class="caption detail">
        <div class="row">
            <div class="col-md-3">
                <div class="row">
                    <div class="col-md-12">
                        <?php $image = (strlen($user->image)) ? 'uploads/thumbnail/' . $user->image : 'images/opvulling/profiel.jpg'?>
                        <img src="{{url('/'.$image)}}" alt="profiel foto van {{$user->name}}">
                    </div>
                    <div class="col-md-12 margin-top-5">

                        <div ng-controller="GoogleMapsConroller">
                            <ui-gmap-google-map class="small" ng-class="smallGoogleMaps"
                                                class="small-google-maps"
                                                options="map.options" center='map.center'
                                                zoom='map.zoom'>
                                <ui-gmap-marker coords="marker.coords" options="marker.options"
                                                idkey="marker.id"
                                                icon="{url:'{{url('/images/icon/marker_trainer.png')}}'}">
                                </ui-gmap-marker>
                            </ui-gmap-google-map>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="thumbnail-head">
                            <h3 class="">
                                Naam
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{$user->name}}
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="thumbnail-head">
                            <h3 class="">
                                Email
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{$user->email}}
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="thumbnail-head">
                            <h3 class="">
                                telefoonnummer
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{$user->telefonnummer}}
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="thumbnail-head">
                            <h3 class="">
                                geslacht
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{$user->geslacht}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="thumbnail-head">
                            <h3 class="">
                                vraagprijs
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{$user->vraagprijs}} euro per uur
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="thumbnail-head">
                            <h3 class="">
                                Actief sinds
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{$user->created_at}}
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="thumbnail-head">
                            <h3 class="">
                                Gids
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{($user->active==2)?'Aanvaard':'in afwachting'}}
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="thumbnail-head">
                            <h3 class="">
                                Aanpassen
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p ng-click="show_form=true"><a>klik hier</a></p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <hr>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail-head">
                            <h3 class="">
                                Ervaring
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{$user->ervaring}}
                            </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="thumbnail-head">
                            <h3 class="">
                                Jouw verhaal
                            </h3>
                        </div>
                        <div class="thumbnail-body">
                            <p class="">
                                {{$user->text}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>