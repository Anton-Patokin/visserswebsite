<?php
$termen = Config::get('constant.Termen');
$message = Config::get('constant.Headings');
?>
@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <?php $head = $message['overOns'];$head_description = $message['overOns_description'];?>
        @include('header')
        <div class="row margin-top-2">
            <div class="col-xs-12 col-sm-8 col-md-9">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="box-card-body text-center">
                            <h3>Website</h3>
                        </div>
                        <div class="box-card-body margin-top-2">
                            <h4>Idee</h4>
                            <p>Fishing Friends is begonnen als een Facebook pagina waarop hengelaars uit de hele wereld </p>
                            elkaar kunnen ontmoeten. Met deze website willen we het delen van gegevens zoals ideale
                            visomstandigheden kwantificeren.
                            <h4>Uitwerking</h4>
                            <p>FishingFriends.be is opgemaakt met de nieuwste webtechnologieën, met oog voor: snelheid,
                                gebruiksgemak en overzichtelijkheid.</p>

                            <h4>Doel</h4>
                            <p>Naar de toekomst toe willen we hengelaars uit de hele wereld samen brengen zodat ze</p>
                            gegevens kunnen delen maar ook kunnen afspreken en gezamelijke doelstellingen kunnen verwezenlijken.
                            <h4>Voor wie is het?</h4>
                            <p>Vool alle soorten hengelaars die op zoek zijn naar informatie.</p>
                            Voor gidsen en hengelsportzaken of andere organistaties die hierbij betrokken zijn en die
                            leden, klanten, geïnteresseerden, ... zoeken.
                            <h4>Vragen?</h4>
                            <p>Contacteer ons met al uw vragen en/of verzoeken.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="box-card-body">
                            <div class="part">
                                <div class="octo">
                                    <div class="octo1">
                                        <img src="{{url('/images/anton-patokin.jpg')}}"
                                             alt="profiel foto van Patokin Anton"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-card-head text-center">
                            <h3 class="google-maps-titel ">Anton Patokin</h3>
                            <p>Web developer in opleiding bij kdg hoboken.</p>
                            <div class="col-md-12">
                                <hr>
                            </div>
                            <div class="row  margin-bottom-2">
                                <div class="col-xs-4 ">
                                    <a href="https://www.facebook.com/anton.patokin"> <img class="social-media"
                                                                                           src="{{url('/images/icon/facebook.jpg')}}"></a>
                                </div>
                                <div class="col-xs-4">
                                    <img class="social-media" src="{{url('/images/icon/twitter.jpg')}}">
                                </div>
                                <div class="col-xs-4">
                                    <img class="social-media" src="{{url('/images/icon/gmail.jpg')}}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="thumbnail">
                    <div class="caption">
                        <div class="box-card-body">
                            <div class="part">
                                <div class="octo">
                                    <div class="octo1">
                                        <img src="{{url('/images/profiel.jpg')}}"
                                             alt="profiel foto van Patokin Anton"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-card-head text-center">
                            <h3 class="google-maps-titel ">Nieuwe colega</h3>
                            <p>Onze website is altijd op zoek naar vrijwilligers die zin hebben om iets bij te brengen aan de
                            hengelsportwereld</p>
                            <div class="col-md-12">
                                <hr>
                            </div>
                            <div class="row  margin-bottom-2">
                                <div class="col-xs-12 text-center">
                                    <a href="{{url('/contact')}}">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



@endsection
