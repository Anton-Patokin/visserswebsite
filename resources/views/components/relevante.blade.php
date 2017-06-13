<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 box-card">
    <div class="thumbnail ">
        <div class="caption">
            <div class="box-card-head">
                <h3 class="text-center">{{$termen['relevant']}}</h3>
            </div>
            <div class="box-card-body margin-bottom-4">
                <div class="row" id="vertikalscroll">
                    <div class="circel top" id="go-to-top">
                        <div class="glyphicon glyphicon-menu-up center"></div>
                    </div>
                    <div class="circel bottom" id="go-to-bottom">
                        <div class="glyphicon glyphicon-menu-down center"></div>
                    </div>
                    @if(count($relevente)>1)
                        @foreach($relevente as $key=>$value)
                            @if($content->titel != $value->titel)
                            <?php $content_url = url('/' . $value->type . '/' . $value->id . '/' . str_replace(' ','-',substr($value->titel, 0, 15)))?>
                            <div class="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="{{$content_url}}" class="popular-img">
                                            <img src="{{url('/uploads/thumbnail/'.$value->image)}}">
                                            <div class="p-overlay"></div>
                                        </a>
                                    </div>
                                    <div class="p-content">
                                        <a href="{{$content_url}}"
                                           class="text-uppercase">{{substr($value->titel,0,40)}}</a>
                                        <span class="p-date">{{ date("d-m-Y", strtotime($value->updated_at))}}</span>
                                    </div>
                                </div>
                            </div>
                            @endif
                        @endforeach
                    @else
                        <a href="{{url('/home')}}"><h4 class="text-uppercase text-center">Home</h4></a>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>