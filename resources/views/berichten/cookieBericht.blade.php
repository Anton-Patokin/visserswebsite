@if (Cookie::has('bericht'))
    <div class="row margin-top-2 ">
        <div class="col-md-12">
            <div class="alert alert-success">
                <p class="text-center">{{Cookie::get('bericht')}}</p>
            </div>
        </div>
    </div>
    <?php Cookie::queue('bericht', null, -1);?>
@endif