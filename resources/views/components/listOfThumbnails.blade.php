<?php
$length = count($contents);
$lengthRows = $length / 3;
$lengthColumns = 4;
?>
<div class="row">
    @for($e=0;$e<$lengthColumns;$e++)
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="row">
                @for($i=0;$i<$lengthRows;$i++)
                    <div class="col-md-12 margin-top-2">
                        <?php $index = $i * $lengthColumns + $e;
                        $content = "";
                        if (isset($contents[$index])) {
                            $content = $contents[$index];
                        }
                        ?>
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
                            @if($content->type =='trainer')
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