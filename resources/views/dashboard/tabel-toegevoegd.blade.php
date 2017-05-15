<table class="table table-striped">
    <thead>
    <tr>
        <th class="hide-800">Icon</th>
        <th>Titel</th>
        <th class="hide-800">Type</th>
        <th class="hide-900">Datum</th>
        @if(Auth::user()->admin)
            <th class="text-center">Aanvaard</th>
        @endif
        <th class="text-center hide-700">Bewerk</th>
        <th class="text-center hide-600">Bekijken</th>
        <th class="text-center">Verwijderen</th>
        @if(Auth::user()->admin && Menu::isActiveList('dashboard/gebruikers'))
            <th class="text-center hide-600">Admin</th>
        @endif
    </tr>
    </thead>
    <tbody>
    @foreach($contents as $key=>$value)
        @foreach($value as $key=>$content)
            {{--<tr filter-list="search" class="{{($content->deleted_at)?"danger":""}} {{($content->active == 2)?"success":""}} {{($content->active == 1)?"info":""}}{{($content->active == 3)?"warning":""}}">--}}

            <tr filter-list="search" class="">
                <td class="hide-800"><img class="img-small" src="{{url("/images/icon").'/'.$content->type.'.png'}}"></td>

                <td>{{substr($content->titel,0,50)}}</td>
                <td class="hide-800">{{$content->type}}</td>
                <td class="hide-900">{{$content->updated_at}}</td>
                @if(Auth::user()->admin)
                    <td class="text-center">
                        @if(!$content->deleted_at && $content->active != 2)
                            <a href="{{url('/aanvaarden/'.$content->type.'/'.$content->id)}}">
                                <div class="glyphicon glyphicon-ok {{($content->active == 2)?"color-groen":""}}"></div>
                            </a>
                        @else
                            <a href="{{url('/aanvarden_deactiveren/'.$content->type.'/'.$content->id)}}">
                                <div class="glyphicon glyphicon-ok {{($content->active == 2)?"color-groen":""}}"></div>
                            </a>
                        @endif
                    </td>
                @endif
                <td class="text-center hide-700">
                    <a href="{{url('/aanpasen/'.$content->type.'/'.$content->id)}}">
                        <div class="glyphicon glyphicon-pencil "></div>
                    </a>
                </td>
                <td class="text-center hide-600">
                    <a href="{{url('/'.$content->type.'/'.$content->id.'/'.substr($content->titel,0,25))}}">
                        <div class="glyphicon glyphicon-zoom-in {{($content->active == 1)?"color-geel":""}}"></div>
                    </a>
                </td>
                <td class="text-center">
                    @if(!$content->deleted_at)
                        <a href="{{url('/verwijderen/'.$content->type.'/'.$content->id)}}">
                            <div class="glyphicon glyphicon-trash"></div>
                        </a>
                    @else
                        <a href="{{url('/verwijderen/activeren/'.$content->type.'/'.$content->id)}}">
                            <div class="glyphicon glyphicon-trash {{($content->deleted_at)?"color-red":""}}"></div>
                        </a>
                    @endif
                </td>
                @if(Auth::user()->admin)
                    <td class="text-center hide-600">
                        @if(Auth::user()->admin && Menu::isActiveList('dashboard/gebruikers') && $content->type=='trainer')
                            @if(!$content->admin)
                                <a href="{{url('/admin_deactivate/activeren/'.$content->id)}}">
                                    <div class="glyphicon glyphicon-remove"></div>
                                </a>
                            @else
                                <a href="{{url('/admin_deactivate/deactiveren/'.$content->id)}}">
                                    <div class="glyphicon glyphicon-ok"></div>
                                </a>
                            @endif
                        @endif
                    </td>
                @endif
            </tr>
        @endforeach
    @endforeach
    </tbody>
</table>
<hr>
<div class="row">
    <div class="col-md-12 " id="navigation-legande">
        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
            <h5 class="border-right text-uppercase">legende</h5>
        </div>
        <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
            <div>
                <ul>
                    @if(Auth::user()->admin)
                        <li>
                            <div class="glyphicon glyphicon-remove"></div>
                            Niet active
                        </li>@endif
                    @if(Auth::user()->admin)
                        <li>
                            <div class="glyphicon glyphicon-ok "></div>
                            Active
                        </li>@endif
                    <li>
                        <div class="glyphicon glyphicon-trash"></div>
                        Verwijderen
                    </li>
                    @if(Auth::user()->admin)
                        <li>
                            <div class="glyphicon glyphicon-plus"></div>
                            Terugzetten
                        </li>
                    @endif
                    <li>
                        <div class="glyphicon glyphicon-pencil"></div>
                        Bijwerken
                    </li>
                    <li >
                        <div class="glyphicon glyphicon-zoom-in"></div>
                        Bekijken
                    </li>
                    <li>
                        <div class="box green"></div>
                        Toegevoegd
                    </li>
                    <li>
                        <div class="box blue"></div>
                        Nog niet nagekeken goed gekeurd
                    </li>
                    @if(Auth::user()->admin)
                        <li>
                            <div class="box red"></div>
                            Verwijderd
                        </li>
                    @endif
                    <li>
                        <div class="box orage"></div>
                        Deactive
                    </li>

                </ul>
            </div>
        </div>
    </div>
</div>