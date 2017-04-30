<label for="kostprijs ">kostprijs in euro*</label>
<input name="kostprijs" type="number" step="0.50" ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/"
       class="form-control input-lg" id="" placeholder="34.15" ng-model="input.kostprijs"
       maxlength="11" ng-focus="classkostprijsFocus =true" ng-blur="classkostprijsFocus =false"
       required>
<div class="space-for-errors">
    <p class="error alert alert-danger "
       ng-show="!visWedstrijdForm.kostprijs.$valid">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        Ongeldig bedraag
    </p>
    <p class="error alert alert-danger "
       ng-show="visWedstrijdForm.kostprijs.$error.maxlength && showError">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        Dat is veel geld
    </p>
    <p class="error alert alert-danger"
       ng-show="visWedstrijdForm.kostprijs.$error.required && showError">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        Korstprijs is verplicht
    </p>
    <p class="error alert alert-danger"
       ng-show="99998<input.kostprijs">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        max 99999 euro
    </p>

</div>