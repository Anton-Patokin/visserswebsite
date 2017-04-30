<div class="form-group">
    <label for="email">E-mail*</label>
    <input name="email" ng-class="{'alert-danger':input.email.length>140}" type="text"
           class="form-control input-lg" ng-focus="classEmailFocus =true" ng-blur="classEmailFocus =false"
           id="" placeholder="Anton.Patokin@gmail.com" ng-model="input.email" ng-maxlength="150" maxlength="150" required>
    {{--<p ng-show="userForm.username.$error.minlength">Username is too short.</p>--}}
    <div class="space-for-errors">
        <p class="error alert alert-danger " ng-show="visTrainerForm.email.$error.maxlength && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            email is te lang
        </p>
        <p class="error alert alert-danger" ng-show="visTrainerForm.email.$error.required && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            email is verplicht
        </p>
        <small ng-if="input.email.length>5 && !visTrainerForm.email.$error.required"
               class="pull-right max-charakters"
               ng-class="{'show':classEmailFocus}">@{{150-input.email.length}} karakters over
        </small>
    </div>
</div>