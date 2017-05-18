<div class="thumbnail">
    <div class="head-thumbnail">
        <div class="icon-img-background-left ship"></div>
        <div class="icon">
            {{--            <img class="pull-left" src="{{url('/images/icon/dobber.png')}}">--}}
            <div class="date-string">mar</div>
            <div class="date-nummber">12</div>
        </div>
        <div class="icon-img-background-right dobber"></div>
    </div>
    <img src="{{url('/uploads/thumbnail/'.$content->image)}}" alt="{{$content->titel}}">
    <div class="caption">
        <h4>{{$content->titel}}</h4>
        <p>{{$content->text}}</p>
        <p><a href="#" class=" btn-xs" role="button">Meer</a></p>
    </div>
</div>
