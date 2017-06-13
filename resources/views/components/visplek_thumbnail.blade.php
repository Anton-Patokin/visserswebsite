<div class="thumbnail">
    <img src="{{url('/uploads/thumbnail/'.$content->image)}}" alt="Ableding van trainer onder naam {{$content->titel}}">
    <div class="card-profile pull-right" >
{{--        <img src="{{url('/images/icon/vishak.jpg')}}">--}}
        <div class="icon-background plaats"></div>
    </div>
    <div class="caption margin-top-5">
        <h3>{{$content->titel}}</h3>
        <p>{{substr($content->viswater,0,350)}}</p>
        <p><a href="{{url('/plaats/'.$content->id.'/'.str_replace(' ','-',substr($content->titel,0,25)))}}" class=" btn-xs" role="button">Meer</a></p>
    </div>
</div>
