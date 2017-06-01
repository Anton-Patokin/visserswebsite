<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

class User extends Authenticatable
{
    use SoftDeletes;

    use Notifiable;
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            'users.name' => 10,
            'users.vraagprijs' => 10,
            'users.text' => 5,
            'users.type' => 10,
            'users.ervaring' => 5,
            'users.leeftijd' => 2,
            'users.geslacht' => 2,
        ]
    ];

    public function wedstrijden()
    {
        return $this->hasMany('App\Wedstrijd');
    }
    public function visSoortenAantal()
    {
        return $this->hasMany('App\VisSoort')->select('aantal');
    }
    public function visSoorten()
    {
        return $this->hasMany('App\VisSoort');
    }
    public function visdagen()
    {
        return $this->hasMany('App\VisDag');
    }

    public function visPlaatsen()
    {
        return $this->hasMany('App\VisPlek');
    }

    public function tutorials()
    {
        return $this->hasMany('App\Tutorial');
    }

    public function nieuwsArtikelen()
    {
        return $this->hasMany('App\NieuwsArtikel');
    }


    public function wedstrijden_withTrashed()
    {
        return $this->hasMany('App\Wedstrijd')->withTrashed();
    }

    public function visPlaatsen_withTrashed()
    {
        return $this->hasMany('App\VisPlek')->withTrashed();
    }

    public function tutorials_withTrashed()
    {
        return $this->hasMany('App\Tutorial')->withTrashed();
    }

    public function nieuwsArtikelen_withTrashed()
    {
        return $this->hasMany('App\NieuwsArtikel')->withTrashed();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    protected $dates = ['deleted_at'];

}
