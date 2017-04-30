<div class="form-group">
    <label for="telefonnummer">Telefonnummer</label>
    <input name="telefonnummer" ng-class="{'alert-danger':input.telefonnummer.length>22}" type="text"
           class="form-control input-lg" ng-focus="classTextFocus =true" ng-blur="classTextFocus =false"
           id="" placeholder="+324 84 123 368" ng-model="input.telefonnummer" ng-maxlength="25" maxlength="25">
    {{--<p ng-show="userForm.username.$error.minlength">Username is too short.</p>--}}
    <div class="space-for-errors">
        <p class="error alert alert-danger " ng-show="visTrainerForm.titel.$error.maxlength && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Telefonnummer is te lang
        </p>
    </div>
</div>