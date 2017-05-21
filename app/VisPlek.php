<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

class VisPlek extends Model
{
    use SoftDeletes;
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            'vis_pleks.titel' => 10,
            'vis_pleks.type' => 10,
            'vis_pleks.watertype' => 10,
            'vis_pleks.viswater' => 5,
            'vis_pleks.vissoorten' => 10,
            'vis_pleks.text' => 5,
        ]
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    protected $dates = ['deleted_at'];
}
