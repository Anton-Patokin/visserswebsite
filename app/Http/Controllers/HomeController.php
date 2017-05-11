<?php

namespace App\Http\Controllers;

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
use Illuminate\Support\Facades\DB;


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
        $trainers = User::where('active', 1)->get();
        return view('home', ["wedstrijden" => $wedstrijden, "trainers" => $trainers]);
    }


    public function plaatsen($titel = null)
    {
        return $this->get_content_from_database('vis_pleks', 'titel', $titel,'plaats','plaatsen');
    }
    public function wedstrijden($titel = null)
    {
        return $this->get_content_from_database('wedstrijds', 'titel', $titel,'wedstrijd','wedstrijden');
    }

    public function nieuws($titel = null)
    {
        return $this->get_content_from_database('nieuws_artikels', 'titel', $titel,'nieuws-artikel','nieuws-artikelen');
    }
    public function trainer($titel = null)
    {
        return $this->get_content_from_database('users', 'titel', $titel,'trainer','trainers');
    }
    public function tutorial($titel = null)
    {
        return $this->get_content_from_database('tutorials', 'titel', $titel,'tutorial','tutorials');
    }
    public function contact()
    {
        return view('show/contact');
    }
    public function overOns(){
        return view('show/over-ons');
    }

    public function get_content_from_database($tabel, $row_name = null, $titel = null,$view1,$view2,$view3=null)
    {
        if ($titel) {
            $value = DB::table($tabel)->where($row_name, '=', $titel)->Where('active', 2)->first();
//            $value = $tabel::where($row_name, $titel)->where('active', 1)->get();
            if (count($value)) {
                return view('show/'.$view1, ['content' => $value]);
            }
        } else {
            $value = DB::table($tabel)->Where('active', 2)->get();
            if (count($value)) {
                return view('show/'.$view2, ['contents' => $value]);
            }
        }
        return $this->paginaNietGevonden();
    }

    public function paginaNietGevonden()
    {
        return view('show/pagina-niet-gevonden');
    }
}
