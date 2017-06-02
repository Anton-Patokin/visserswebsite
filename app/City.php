<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    public function weerVandag()
    {
        return $this->hasMany('App\Weather');
    }
}
