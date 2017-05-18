<div class="col-xs-12 col-sm-6 col-md-12 col-lg-12 hide-892 box-card">
    <div class="thumbnail">
        <div class="caption ">
            <div class="box-card-head">
                <h3 class="subscribe text-uppercase text-center ">BLIJF OP DE HOOGHTE</h3>
            </div>
            <div class="box-card-body">
                <form method="POST" name="subscribe"
                      role="form" action="{{url('/toevoegen/subscribe')}}">
                    {{ csrf_field() }}
                        <input name="email" class="form-control grey" type="text"
                               placeholder="Jouw e-mail adress">
                        <input name="naam" type="text" hidden>

                        @if ($errors->has('email'))
                            <div class="space-for-errors margin-bottom-1">
                                <p class="error alert alert-danger">
                                    <span class="glyphicon glyphicon-exclamation-sign"></span>
                                    {{ $errors->first('email') }}
                                </p>
                            </div>
                        @endif
                        <input type="submit" value="Aboneer je nu"
                               class="text-uppercase text-center btn btn-subscribe margin-top-3">
                </form>
            </div>
        </div>
    </div>
</div>