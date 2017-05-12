<table class="table table-striped">
    <thead>
    <tr>
        <th>Icon</th>
        <th>Titel</th>
        <th>Type</th>
        <th>Datum</th>
        @if(Auth::user()->admin)
            <th class="text-center">Aanvaarden</th>
        @endif
        <th class="text-center">Bewerk</th>
        <th class="text-center">Bekijken</th>
        <th class="text-center">Verwijderen</th>
    </tr>
    </thead>
    <tbody>
    @foreach($contents as $key=>$value)
        @foreach($value as $key=>$content)
            <tr filter-list="search"
                class="{{($content->deleted_at)?"danger":""}} {{($content->active == 2)?"success":""}} {{($content->active == 1)?"info":""}}">
                <td>{{$content->type}}</td>
                <td>{{substr($content->titel,0,50)}}</td>
                <td>{{$content->type}}</td>
                <td>{{$content->updated_at}}</td>
                @if(Auth::user()->admin)
                    <td class="text-center">
                        @if(!$content->deleted_at && $content->active != 2)
                            <a href="{{url('/aanvaarden/'.$content->type.'/'.$content->id)}}">
                                <div class="glyphicon glyphicon-ok"></div>
                            </a>
                        @else
                            <div class="glyphicon glyphicon-remove"></div>
                        @endif
                    </td>
                @endif
                <td class="text-center">
                    <a href="{{url('/aanpasen/'.$content->type.'/'.$content->id)}}">
                        <div class="glyphicon glyphicon-pencil"></div>
                    </a>
                </td>
                <td class="text-center">
                    <a href="{{url('/'.$content->type.'/'.$content->id.'/'.substr($content->titel,0,25))}}">
                        <div class="glyphicon glyphicon-zoom-in"></div>
                    </a>
                </td>
                <td class="text-center">
                    @if(!$content->deleted_at)
                        <a href="{{url('/verwijderen/'.$content->type.'/'.$content->id)}}">
                            <div class="glyphicon glyphicon-trash"></div>
                        </a>
                    @else
                        <a href="{{url('/verwijderen/activeren/'.$content->type.'/'.$content->id)}}">
                            <div class="glyphicon glyphicon-plus"></div>
                        </a>
                    @endif
                </td>
            </tr>
        @endforeach
    @endforeach
    </tbody>
</table>