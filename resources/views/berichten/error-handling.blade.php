@if (Cookie::has('error') || Cookie::has('success'))
    <div class="row margin-top-2 messages-cookie">
        <div class="col-md-12">
            @if (Cookie::has('error'))
                <div class="alert alert-danger">
                    <p class="text-center">{{Cookie::get('error')}}</p>
                    <?php Cookie::queue('error', null, -1);?>
                </div>
            @endif
            @if (Cookie::has('success'))
                <div class="alert alert-success">
                    <p class="text-center">{{Cookie::get('success')}}</p>
                    <?php Cookie::queue('success', null, -1);?>
                </div>
            @endif
        </div>
    </div>
@endif