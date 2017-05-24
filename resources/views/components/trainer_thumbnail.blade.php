<div class="thumbnail">
    <img src="{{url('/uploads/thumbnail/'.$content->image)}}"  alt="Profiel foto: Gids {{$content->titel}}">
    <h3 class="card-title">Gids</h3>
    <h3 class="card-title-naam">{{$content->name}}</h3>
    <div class="card-profile pull-right" >
        <div class="icon-background trainer"></div>

        {{--        <img src="{{url('/images/icon/thumbnail_sprite.png')}}">--}}
    </div>
    <div class="caption">
        <h4><span class="glyphicon glyphicon-calendar"></span> Leeftijd: {{$content->leeftijd}} jaar</h4>
        <h4><span class="glyphicon glyphicon-tag"></span> Ervaring: {{$content->ervaring}}</h4>
        <h4><span class="glyphicon glyphicon-euro"></span> Vraagprijs: {{$content->vraagprijs}},- per les</h4>
        <p>{{$content->text}}</p>
        <p><a href="{{url('/trainer/'.$content->id.'/'.$content->name)}}" class=" btn-xs" role="button">Meer</a></p>
    </div>
</div>
