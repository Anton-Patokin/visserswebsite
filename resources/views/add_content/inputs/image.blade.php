<div class="form-group">
    <label for="image">Kies een foto*</label>
    <input class="form-control input-lg" type="file" ng-file-select="onFileSelect($files)">
    <div class="space-for-errors">
        <p class="error alert alert-danger" ng-show="showImageInvalideFileFormat">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Afbeelding moet png,jpg of jpeg format zijn
        </p>
        <p class="error alert alert-danger" ng-show="showSelectImageValidation && showError">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Je hebt nog geen afbeelding gekozen.
        </p>
        <p class="error alert alert-danger" ng-show="ShowfileSizeValidation">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            Afbeelding mag niet groter zijn dan 5mb
        </p>
    </div>
</div>