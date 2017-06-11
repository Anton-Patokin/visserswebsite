<style>
    .cookie {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
        background-color: #323b44;
        color: #fff;
        height: 75px;
    }

    .cookie .content {
        padding-top: 22px;
    }

    .cookie .content p {
        padding-top: 8px;
    }
</style>

<div ng-controller="coockieSetController">
    <div class="cookie" ng-if="show_cookie_accesp">
        <div class="content">
            <div class="col-xs-10">
                <p>
                    Deze website maakt gebruik van cookies om ervoor te zorgen dat u met gemak de website kan gebruiken
                </p>
            </div>
            <div class="col-xs-2">
                <button ng-click="show_cookie_accesp_action()" class="btn btn-primary">Begrepen</button>
            </div>
        </div>
    </div>
</div>