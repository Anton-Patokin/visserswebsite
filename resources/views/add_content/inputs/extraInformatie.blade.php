<div class="form-group">
                <textarea name="text" ng-class="{'alert-danger':input.text.length>990}" ng-focus="classTextFocus =true"
                          ng-blur="classTextFocus =false" class="form-control input-lg" rows="5" ng-model="input.text"
                          placeholder="Extra uitleg" maxlength="1000" required></textarea>
    <div class="space-for-errors">
        <p class="error alert alert-danger " ng-show="visWedstrijdForm.text.$error.maxlength && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Extra uitleeg is te lang
        </p>
        <p class="error alert alert-danger" ng-show="visWedstrijdForm.text.$error.required && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Extra uitlig is verplicht
        </p>
        <small ng-if="input.text.length>5" class="pull-right max-charakters" ng-cloak=""
               ng-class="{'show':classTextFocus}">@{{1000-input.text.length}} karakters over
        </small>
    </div>
</div>