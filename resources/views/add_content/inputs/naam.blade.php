<div class="form-group" >
    <label for="naam">Naam*</label>
    <input name="naam" ng-class="{'alert-danger':input.naam.length>50}" type="text"
           class="form-control input-lg" ng-focus="classNaamFocus =true" ng-blur="classNaamFocus =false"
           id="" ng-model="input.naam" ng-maxlength="50" maxlength="150" required>
    {{--<p ng-show="userForm.username.$error.minlength">Username is too short.</p>--}}
    <div class="space-for-errors">
        <p class="error alert alert-danger " ng-show="visTrainerForm.naam.$error.maxlength && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Naam is te lang
        </p>
        <p class="error alert alert-danger" ng-show="visTrainerForm.naam.$error.required && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Naam is verplicht
        </p>
        <small ng-if="input.naam.length>5 && !visTrainerForm.naam.$error.required"
               class="pull-right max-charakters"
               ng-class="{'show':classNaamFocus}">@{{50-input.naam.length}} karakters over
        </small>
    </div>
</div>