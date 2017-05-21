<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NieuwsArtikel extends Model
{
    use SoftDeletes;


    public function user()
    {
        return $this->belongsTo('App\User');
    }
    protected $dates = ['deleted_at'];
}
