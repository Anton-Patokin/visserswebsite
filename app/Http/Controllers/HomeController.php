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
use Illuminate\Support\Facades\Auth;
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


    public function plaatsen($id = null, $titel = null)
    {
        return $this->get_content_from_database('vis_pleks', $id, 'plaats', 'plaatsen');
    }

    public function wedstrijden($id = null, $titel = null)
    {
        return $this->get_content_from_database('wedstrijds', $id, 'wedstrijd', 'wedstrijden');
    }

    public function nieuws($id = null, $titel = null)
    {
        return $this->get_content_from_database('nieuws_artikels', $id, 'nieuws-artikel', 'nieuws-artikelen');
    }

    public function trainer($id = null, $titel = null)
    {
        return $this->get_content_from_database('users', $id, 'trainer', 'trainers');
    }

    public function tutorial($id = null, $titel = null)
    {
        return $this->get_content_from_database('tutorials', $id, 'tutorial', 'tutorials');
    }

    public function contact()
    {
        return view('show/contact');
    }

    public function overOns()
    {
        return view('show/over-ons');
    }

    public function get_content_from_database($tabel, $id = null, $view1, $view2, $view3 = null)
    {
        if ($id) {
            $show = false;
            $value = DB::table($tabel)->find($id);
            //ditai pagina veergeven
            if (Auth::user()->id == $value->user_id) {
                $show = true;
            }
            if ($value->active == "2") {
                $show = true;
            }
            if ($show) {
                return view('show/' . $view1, ['content' => $value]);
            }
        } else {
            //bij het bezoeken van overzicht pagina
            $value = DB::table($tabel)->Where('active', 2)->get();
            if (count($value)) {
                return view('show/' . $view2, ['contents' => $value]);
            }
        }
        return $this->paginaNietGevonden();
    }

    public function paginaNietGevonden()
    {
        return view('show/pagina-niet-gevonden');
    }
}
