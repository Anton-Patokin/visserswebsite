<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

class Wedstrijd extends Model
{
    use SearchableTrait;
    use SoftDeletes;

    protected $searchable = [
        'columns' => [
            'wedstrijds.titel' => 10,
            'wedstrijds.type' => 10,
            'wedstrijds.prijzen' => 2,
            'wedstrijds.category' => 5,
            'wedstrijds.hengel' => 2,
            'wedstrijds.water' => 7,
            'wedstrijds.datum' => 2,
            'wedstrijds.text' => 7,
        ]
    ];
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    protected $dates = ['deleted_at'];
}
