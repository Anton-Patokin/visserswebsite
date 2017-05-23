<div class="thumbnail">
    <div class="head-thumbnail">
        <div class="icon-img-background-left ship"></div>
        <div class="icon">
            {{--            <img class="pull-left" src="{{url('/images/icon/dobber.png')}}">--}}
            <div class="date-string">{{$content->maand}}</div>
            <div class="date-nummber">{{$content->dag}}</div>
        </div>
        <div class="icon-img-background-right dobber"></div>
    </div>
    <img src="{{url('/uploads/thumbnail/'.$content->image)}}" alt="{{$content->titel}}">
    <div class="caption">
        <h3>{{substr($content->titel,0,150)}}</h3>
        <p>{{substr($content->text,0,350)}}</p>
        <p><a href="{{url('/wedstrijd/'.$content->id.'/'.substr($content->titel,0,25))}}" class=" btn-xs" role="button">Meer</a></p>
    </div>
</div>
