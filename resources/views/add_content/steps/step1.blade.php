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
$content = (object)['titel' => 'test', 'viswater' => 'test2', 'image' => 'http://placehold.it/500x300', 'id' => 1];

$content = new stdClass();
$content->titel = 'Here we go';
$content->viswater = 'test';
$content->id = 1;
$content->name = 'Anton';
$content->inleiding  = 'Anton';
$content->leeftijd  = 12;
$content->ervaring  = 'veel';
$content->vraagprijs  = 10;
$content->text  = 'lorem ipsu';
$content->maand  = 'mei';
$content->dag  = 11;

?>

<div class="row">
    <div class="col-xs-12 col-sm-5 col-md-8 col-lg-8" ng-init="show_exampale=1">
        <div class="thumbnail ">
            <div class="caption">
                <div class="box-card-head">
                    <h3 class="text-center">Kies soort inhoud die je wilt delen</h3>
                </div>
                <div class="box-card-body margin-top-4 margin-bottom-4">
                    {{--<div ng-click="gotoStep(2);putValue('nieuws')" class="well text"--}}
                         {{--ng-class="{'show-arrow':showArrow1}"--}}
                         {{--ng-mouseover="showArrow1=true;show_exampale=1" ng-mouseleave="showArrow1=false">Een artikel--}}
                        {{--<div  class="arrow-right"></div>--}}
                        {{--<span class="arrow pull-right"></span>--}}
                    {{--</div>--}}
                    @if(Auth::user()->trainer!=2 &&  Auth::user()->trainer!=1)
                        <div ng-click="gotoStep(2);putValue('trainer')" class="well"
                             ng-class="{'show-arrow':showArrow2}"
                             ng-mouseover="showArrow2=true;show_exampale=2" ng-mouseleave="showArrow2=false">
                            Maak een profiel aan als gids
                            <span class="arrow pull-right"></span>
                        </div>
                    @endif
                    <div ng-click="gotoStep(2);putValue('wedstrijd')" class="well" ng-class="{'show-arrow':showArrow3}"
                         ng-mouseover="showArrow3=true;show_exampale=3" ng-mouseleave="showArrow3=false">
                        Organiseer een wedstrijd
                        <span class="arrow pull-right"></span>
                    </div>
                    <div ng-click="gotoStep(2);putValue('plaats')" class="well" ng-class="{'show-arrow':showArrow4}"
                         ng-mouseover="showArrow4=true;show_exampale=4" ng-mouseleave="showArrow4=false">
                        Visstek toevoegen
                        <span class="arrow pull-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-5 col-md-4 col-lg-4 min-height-800">
        {{--<div ng-show="show_exampale==1">--}}
            {{--@include('components.news_thumbnail')--}}
        {{--</div>--}}
        <div ng-show="show_exampale==2">
            <?php $content->image = 'trainer.jpg';?>
            @include('components.trainer_thumbnail')
        </div>
        <div ng-show="show_exampale==3">
            <?php $content->image = 'wedstrijd.jpg';?>
            @include('components.new_contest')
        </div>
        <div ng-show="show_exampale==4">
            <?php $content->image = 'plaats.jpg';?>
            @include('components.visplek_thumbnail')
        </div>
    </div>
</div>