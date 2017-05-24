<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

class NieuwsArtikel extends Model
{
    use SoftDeletes;
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            'nieuws_artikels.titel' => 10,
            'nieuws_artikels.inleiding' => 10,
        ]
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    protected $dates = ['deleted_at'];
}
