<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

class Tutorial extends Model
{
    use SoftDeletes;

    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            'tutorials.titel' => 10,
            'tutorials.type' => 10,
            'tutorials.inleiding' => 10,
        ]
    ];


    public function user()
    {
        return $this->belongsTo('App\User');
    }
    protected $dates = ['deleted_at'];
}
