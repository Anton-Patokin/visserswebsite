<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\City;
use App\Wind;
use App\Atmosphere;
use App\Astronomy;
use App\Weather;
use App\Condition_code;
use App\Wedstrijd;
use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    

    public function index()
    {
        $wedstrijden = Wedstrijd::all();
        $trainers = User::where('trainer',1)->get();
        return view('home',["wedstrijden"=>$wedstrijden,"trainers"=>$trainers]);
    }
}
