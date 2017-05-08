<div class="thumbnail">
    <img src="{{url('/uploads/thumbnail/'.$content->image)}}" alt="Ableding van trainer onder naam {{$content->naam}}">
    <div class="card-profile pull-right" >
        <img src="{{url('/images/icon/vishak.jpg')}}">
    </div>
    <div class="caption margin-top-5">
        <h4>{{$content->naam}}</h4>
        <p>{{substr($content->viswater,0,350)}}</p>
        <p><a href="" class=" btn-xs" role="button">Meer</a></p>
    </div>
</div>
