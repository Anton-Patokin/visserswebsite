<div class="thumbnail">
    <img src="{{$image}}" alt="Ableding van trainer onder naam {{$naam}}">
    <h3 class="card-title">Trainer</h3>
    <h3 class="card-title-naam">{{$naam}}</h3>
    <div class="card-profile pull-right" >
        <img src="{{url('/images/icon/thumbnail_sprite.png')}}">
    </div>
    <div class="caption">
        <h4><span class="glyphicon glyphicon-calendar"></span> Leeftijd: {{$leeftijd}} jaar</h4>
        <h4><span class="glyphicon glyphicon-tag"></span> Ervaring: {{$ervaring}}</h4>
        <h4><span class="glyphicon glyphicon-euro"></span> Vraagprijs: {{$vraagprijs}},- per les</h4>
        <p>{{$description}}</p>
        <p><a href="{{url('/trainer/'.$naam)}}" class=" btn-xs" role="button">Meer</a></p>
    </div>
</div>
