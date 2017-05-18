<?php

namespace App\Http\Controllers;

use App\Tutorial;
use App\VisPlek;
use Illuminate\Http\Request;
use App\City;
use App\Wind;
use App\Atmosphere;
use App\Astronomy;
use App\Weather;
use App\Condition_code;
use App\User;
use App\NieuwsArtikel;
//use App\VisPlek;
use App\Wedstrijd;
//use App\Tutorial;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    public function index($string){



        $wedstrijd = DB::table('wedstrijds')
            ->where('active','=',2);

        $users = DB::table('users')
            ->where('active','=',2)
            ->union($wedstrijd)
            ->get();
        return $users;

    }
}
