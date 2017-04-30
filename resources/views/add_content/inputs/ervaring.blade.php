<div class="form-group">
    <label for="ervaring">Ervaring*</label>
    <input name="ervaring" ng-class="{'alert-danger':input.ervaring.length>100}" type="text"
           class="form-control input-lg" ng-focus="classErvaringFocus =true" ng-blur="classErvaringFocus =false"
           id="" placeholder="Hoeveel ervaring heb je?" ng-model="input.ervaring" ng-maxlength="250" maxlength="100" required>
    {{--<p ng-show="userForm.username.$error.minlength">Username is too short.</p>--}}
    <div class="space-for-errors">
        <p class="error alert alert-danger " ng-show="visTrainerForm.ervaring.$error.maxlength && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Ervaring is te lang
        </p>
        <p class="error alert alert-danger" ng-show="visTrainerForm.ervaring.$error.required && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Ervaring is verplicht
        </p>
        <small ng-if="input.ervaring.length>5 && !visTrainerForm.ervaring.$error.required"
               class="pull-right max-charakters"
               ng-class="{'show':classErvaringFocus}">@{{100-input.ervaring.length}} karakters over
        </small>
    </div>
</div>