    <div class="thumbnail">
        <img src="{{url('/uploads/thumbnail/'.$content->image)}}" alt="{{$content->titel}}" alt="">
        <div class="caption">
            <h4>{{$content->titel}}</h4>
            <p>{{$content->inleiding}}</p>
            <p><a href="{{url('/nieuws/'.$content->id.'/'.substr($content->titel,0,25))}}" class=" btn-xs" role="button">Meer</a></p>
        </div>
    </div>
