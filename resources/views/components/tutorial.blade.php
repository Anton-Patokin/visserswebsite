<div class="thumbnail">
    <img ng-src="{{url('/uploads/thumbnail/'.$content->image)}}" alt="{{$content->titel}}">
    <div class="card-profile pull-right">
        <div class="icon-background {{$content->category}}"></div>
    </div>
    <div class="caption margin-top-5">
        <h3>{{$content->titel}}</h3>
        <p>{{$content->inleiding}}</p>
        <p><a href="{{url('/'.$content->type.'/'.$content->id.'/'.str_replace(' ','-',substr($content->titel,0,25)))}}" class=" btn-xs" role="button">Meer</a></p>
    </div>
</div>




