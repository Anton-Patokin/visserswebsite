<div class="col-md-3 box-card">
    <div class="thumbnail">
        <div class="caption ">
            <div class="box-card-head">
                <h3 class="widget-title text-uppercase text-center ">Wedstrijden</h3>
            </div>
            <div class="box-card-body">
                <table class="table table-bordered table-style table-responsive">
                    <tr class="calenderHead">
                        <th colspan="2">
                            <a href="{{url('/home/'.$calender['vorige'])}}">
                                <div
                                        class="glyphicon glyphicon-menu-left"></div>
                            </a>
                        </th>
                        <th colspan="3">{!! $calender['titel'] !!}</th>
                        <th colspan="2">
                            <a href="{{url('/home/'.$calender['volgende'])}}">
                                <div
                                        class="glyphicon glyphicon-menu-right"></div>
                            </a>
                        </th>
                    </tr>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                    @foreach ($calender['weeks'] as $week)
                        {!!$week!!}
                    @endforeach
                </table>
            </div>
        </div>
    </div>
</div>

