<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class City extends Model
{
    public function weerVandag()
    {
        return $this->hasMany('App\Weather')->whereDate('created_at', Carbon::today());
    }
    public function weerGisteren()
    {
        return $this->hasMany('App\Weather')->whereDate('created_at', Carbon::yesterday());
    }
}
