<div class="form-group">
    <label for="titel">titel*</label>
    <input name="titel" ng-class="{'alert-danger':input.titel.length>140}" type="text"
           class="form-control input-lg" ng-focus="classTextFocus =true" ng-blur="classTextFocus =false"
           id="" placeholder="Titel" ng-model="input.titel" ng-maxlength="150" maxlength="150" required autofocus>
    {{--<p ng-show="userForm.username.$error.minlength">Username is too short.</p>--}}
    <div class="space-for-errors">
        <p class="error alert alert-danger " ng-show="visWedstrijdForm.titel.$error.maxlength && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Title is te lang
        </p>
        <p class="error alert alert-danger" ng-show="visWedstrijdForm.titel.$error.required && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Titel van dewedstrijd is verplicht
        </p>
        <small ng-if="input.titel.length>5 && !visWedstrijdForm.titel.$error.required"
               class="pull-right max-charakters"
               ng-class="{'show':classTextFocus}">@{{150-input.titel.length}} karakters over
        </small>
    </div>
</div>