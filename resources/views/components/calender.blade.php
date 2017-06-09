<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 box-card">
    <div class="thumbnail">
        <div class="caption ">
            <div class="box-card-head">
                <h3 class="widget-title text-uppercase text-center ">Calender</h3>
            </div>
            <div class="box-card-body">
                <table class="table table-bordered table-style table-responsive">
                    <tr class="calenderHead">
                        <th colspan="2">
                            <a ng-click="changeCalenderMonth(calender.prev)">
                                <div
                                        class="glyphicon glyphicon-menu-left"></div>
                            </a>
                        </th>
                        <th colspan="3">@{{ calender.titel }}</th>
                        <th colspan="2">
                            <a ng-click="changeCalenderMonth(calender.next)">
                                <div
                                        class="glyphicon glyphicon-menu-right"></div>
                            </a>
                        </th>
                    </tr>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                    <tr ng-repeat="input in calender.html">
                        <td class="calender-notification" ng-repeat="value in input"
                            ng-click="toon_wedstrijd_list(value.activity)"
                            ng-class="[value.today,value.fishActivity]">
                            @{{value.day}}
                            <small class="calender-center" ng-if="value.activity.length>0">
                                @{{ value.activity.length }}
                            </small>
                        </td>
                    </tr>
                    <style>
                        .fish-bad {
                            /*background-color: #007d9b;*/
                            background-color: rgba(243, 133, 51, 0.1);

                            /*background-color: rgba(0 125 155 0.3);*/
                        }

                        .fish-meddium {
                            /*background-color: #007d9b;*/
                            background-color: rgba(0, 125, 155, 0.05);

                            /*background-color: rgba(0 125 155 0.3);*/
                        }

                        .fish-good {
                            /*background-color: #007d9b;*/
                            background-color: rgba(165, 162, 63, 0.3);

                            /*background-color: rgba(0 125 155 0.3);*/
                        }

                        .fish-veryGood {
                            /*background-color: #007d9b;*/
                            background-color: rgba(128, 214, 81, 0.1);
                            /*background-color: rgba(0 125 155 0.3);*/
                        }

                        .circel-rood-legenda {
                            background-color: #d81b60;
                            height: 15px;
                            width: 15px;
                            border-radius: 50%;
                        }
                    </style>
                </table>
                <div class="row">
                    <div class="col-md-12">
                        <h4>Legenda</h4>
                        <a class="normaal-font" href="#" data-toggle="tooltip"
                           title="Deze prognoses zijn gemaakt aan de hand van de maanstand. Om meer te weten, klik op legende.">
                            <table class="table table-bordered table-style table-responsive">
                                <tr>
                                    <td class="fish-bad"></td>
                                    <td>Slechte dag om te gaan vissen</td>
                                </tr>
                                <tr>
                                    <td class="fish-meddium"></td>
                                    <td>Vis is niet actief</td>
                                </tr>
                                <tr>
                                    <td class="fish-good"></td>
                                    <td>Goede dag om te gaan vissen</td>
                                </tr>
                                <tr>
                                    <td class="fish-veryGood"></td>
                                    <td>Beste dag om te gaan vissen</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="circel-rood-legenda"></div>
                                    </td>
                                    <td>Aantal westrijden op deze dag</td>
                                </tr>
                            </table>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


{{--<div class="col-md-3 box-card">--}}
{{--<div class="thumbnail">--}}
{{--<div class="caption ">--}}
{{--<div class="box-card-head">--}}
{{--<h3 class="widget-title text-uppercase text-center ">Wedstrijden</h3>--}}
{{--</div>--}}
{{--<div class="box-card-body">--}}
{{--<table class="table table-bordered table-style table-responsive">--}}
{{--<tr class="calenderHead">--}}
{{--<th colspan="2">--}}
{{--<a href="{{url('/home/'.$calender['vorige'])}}">--}}
{{--<div--}}
{{--class="glyphicon glyphicon-menu-left"></div>--}}
{{--</a>--}}
{{--</th>--}}
{{--<th colspan="3">{!! $calender['titel'] !!}</th>--}}
{{--<th colspan="2">--}}
{{--<a href="{{url('/home/'.$calender['volgende'])}}">--}}
{{--<div--}}
{{--class="glyphicon glyphicon-menu-right"></div>--}}
{{--</a>--}}
{{--</th>--}}
{{--</tr>--}}
{{--<tr>--}}
{{--<th>S</th>--}}
{{--<th>M</th>--}}
{{--<th>T</th>--}}
{{--<th>W</th>--}}
{{--<th>T</th>--}}
{{--<th>F</th>--}}
{{--<th>S</th>--}}
{{--</tr>--}}
{{--@foreach ($calender['weeks'] as $week)--}}
{{--{!!$week!!}--}}
{{--@endforeach--}}
{{--</table>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}

