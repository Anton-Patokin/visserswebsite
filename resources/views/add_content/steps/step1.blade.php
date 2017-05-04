<?php
$title = "Nieuws artikel";
$description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit";
$url = "http://placehold.it/500x300";
$image = "http://placehold.it/500x300";
$alt = "";

$leeftijd = 28;
$ervaring = 'betje ervaring';
$vraagprijs = 25;
$naam = "Anton";

?>

<div class="row">
    <div class="col-xs-12 col-sm-5 col-md-6 col-lg-6" ng-init="show_exampale=3">
        <div ng-click="gotoStep(2);putValue('nieuws')" class="well text" ng-class="{'show-arrow':showArrow1}"
             ng-mouseover="showArrow1=true;show_exampale=1" ng-mouseleave="showArrow1=false">Een artikel
            {{--<div  class="arrow-right"></div>--}}
            <span class="arrow pull-right"></span>
        </div>
        @if(Auth::user()->trainer=='')
            <div ng-click="gotoStep(2);putValue('trainer')" class="well" ng-class="{'show-arrow':showArrow2}"
                 ng-mouseover="showArrow2=true;show_exampale=2" ng-mouseleave="showArrow2=false">
                Word Trainer voor andere mensen
                <span class="arrow pull-right"></span>
            </div>
        @endif
        <div ng-click="gotoStep(2);putValue('wedstrijd')" class="well" ng-class="{'show-arrow':showArrow3}"
             ng-mouseover="showArrow3=true;show_exampale=3" ng-mouseleave="showArrow3=false">
            Een visser plekje
            <span class="arrow pull-right"></span>
        </div>
        <div ng-click="gotoStep(2);putValue('visPlek')" class="well" ng-class="{'show-arrow':showArrow4}"
             ng-mouseover="showArrow4=true;show_exampale=4" ng-mouseleave="showArrow4=false">
            Vis plek toevoegen
            <span class="arrow pull-right"></span>
        </div>

    </div>
    <div class="col-xs-12 col-sm-5 col-md-4 col-lg-4 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 min-height-500">
        <div ng-show="show_exampale==1">
            @include('components.news_thumbnail')
        </div>
        <div ng-show="show_exampale==2">
            @include('components.trainer_thumbnail')
        </div>
        <div ng-show="show_exampale==3">
            @include('components.new_contest')
        </div>
        <div ng-show="show_exampale==4">
            @include('components.visplek_thumbnail')
        </div>
    </div>
</div>