<h3>Wat wil jij delen? </h3>
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-md-offset-1 col-lg-offset-1 ">
        <div ng-click="gotoStep(1)" class="well" ng-mouseover="show_exampale=1">Een artikel</div>
        <div ng-click="gotoStep(2)" class="well" ng-mouseover="show_exampale=2">Een Recept</div>
        <div ng-click="gotoStep(3)" class="well" ng-mouseover="show_exampale=3">Een visser plekje</div>
    </div>
    <div class="col-md-3 col-lg-3 col-md-offset-1 col-lg-offset-1">
        <div ng-show="show_exampale==1">
            <h1>1</h1>
        </div>
        <div ng-show="show_exampale==2">
            <h1>2</h1>
        </div>
        <div ng-show="show_exampale==3">
            <h1>3</h1>
        </div>
    </div>

</div>