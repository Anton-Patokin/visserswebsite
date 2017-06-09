<?php
$length = count($contents);
if(isset($smallThumbnail)){
    $lengthRows = $length / 3;
    $lengthColumns = 3;
}    else{

    $lengthRows = $length / 2;
    $lengthColumns = 2;
}

$showCallToAction = rand(0, $length);
$countRows = 0;
?>
@if(count($contents))
    <div class="row">
        @for($e=0;$e<$lengthColumns;$e++)
            <div class="col-xs-12 col-sm-6 <?php echo (isset($smallThumbnail)? 'col-md-4 col-lg-4':'col-md-6 col-lg-6')?>">
                <div class="row">
                    @for($i=0;$i<$lengthRows;$i++)
                        <div class="col-md-12 margin-top-2">
                            <?php $index = $i * $lengthColumns + $e;
                            $content = "";
                            $countRows++;
                            if (isset($contents[$index])) {
                                $content = $contents[$index];
                            }
                            ?>
                            @if($showCallToAction == $countRows)
                                @include('components.call_to_action')
                            @endif
                            @if($content!="")
                                @if($content->type =='wedstrijd')
                                    @include('components.new_contest')
                                @endif
                                @if($content->type =='plaats')
                                    @include('components.visplek_thumbnail')
                                @endif
                                @if($content->type =='nieuwsArtikel')
                                    @include('components.news_thumbnail')
                                @endif
                                @if($content->type =='gids')
                                    @include('components.trainer_thumbnail')
                                @endif
                                @if($content->type =='tutorial')
                                    @include('components.news_thumbnail')
                                @endif
                            @endif
                        </div>
                    @endfor
                </div>
            </div>
        @endfor
    </div>
@else
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <div class="notice notice-lg notice-red margin-bottom-5">
                <strong class="color-red text-uppercase">Deze categorie is leeg</strong>
                <p>Op deze website kunnen mensen zelf dingen posten zodat anderen er ook iets aan hebben.</p>
                <p>
                    Mis deze opportuniteit niet en ga direct aan de slag.
                </p>
                <a href="{{url('/toevoegen')}}">meer</a>
            </div>
        </div>
    </div>
@endif