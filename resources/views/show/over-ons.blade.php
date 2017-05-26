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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also th</p>
                            <h4>Uitwerking</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also th</p>
                            <h4>Doel</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also th</p>
                            <h4>Voor wie is het?</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also th</p>
                            <h4>Vragen?</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also th</p>

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
                            <p>Web develper in opleiding bij kdg hoboken.</p>
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
                            <p>Onze website is altijd op zoek naar vrijwileges die zien hebben om inpreng te brengen in
                                visser wereld</p>
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
