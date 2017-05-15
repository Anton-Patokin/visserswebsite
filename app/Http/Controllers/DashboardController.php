<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Wedstrijd;
use App\User;
use App\VisPlek;
use App\Tutorial;
use App\NieuwsArtikel;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Support\Facades\Config;

class DashboardController extends Controller
{
    protected $berichten;

    public function __construct()
    {
        $this->berichten = Config::get('constant.Berichten');
        $this->middleware('auth');
    }

    public function index()
    {
        return view('dashboard/main-dashboard');
    }

    public function toegevoegd_inhoud()
    {
        $array = [];

        $user = Auth::user();
        $array['wedstrijden'] = $user->wedstrijden;
        $array['nieuwsArtikel'] = $user->nieuwsArtikelen;
        $array['tutorials'] = $user->tutorials;
        $array['visPlaats'] = $user->visPlaatsen;

        return view('dashboard/toegevoegd-inhoud', ['contents' => $array]);
    }

    public function nieuw_toegevoegd_inhoud()
    {
        $array = [];
        if (Auth::user()->admin == 1) {
            $array['wedstrijd'] = Wedstrijd::where('active', null)->orWhere('active', '1')->orWhere('active', '0')->get();
            $array['trainers'] = User::where('active', null)->orWhere('active', '0')->get();
            $array['nieuwsArtikel'] = NieuwsArtikel::where('active', null)->orWhere('active', '1')->orWhere('active', '0')->get();
            $array['tutorial'] = Tutorial::where('active', null)->orWhere('active', '1')->orWhere('active', '0')->get();
            $array['visPlaats'] = VisPlek::where('active', null)->orWhere('active', '1')->orWhere('active', '0')->get();
        } else {
            return back();
        }
        return view('dashboard/toegevoegd-inhoud', ['contents' => $array]);
    }

    public function alle_toegevoegd_inhoud()
    {
        $array = [];
        if (Auth::user()->admin == 1) {
            $array['wedstrijd'] = Wedstrijd::all();
            $array['trainers'] = User::where('active', 1)->orWhere('active', '0')->get();
            $array['nieuwsArtikel'] = NieuwsArtikel::all();
            $array['tutorial'] = Tutorial::all();
            $array['visPlaats'] = VisPlek::all();
        } else {
            return back();
        }
        return view('dashboard/alle-toegevoegd-inhoud', ['contents' => $array]);
    }

    public function alle_verwijderde()
    {
        $array = [];
        if (Auth::user()->admin == 1) {
            $array['wedstrijd'] = Wedstrijd::onlyTrashed()->get();
            $array['trainers'] = User::onlyTrashed()->get();
            $array['nieuwsArtikel'] = NieuwsArtikel::onlyTrashed()->get();
            $array['tutorial'] = Tutorial::onlyTrashed()->get();
            $array['visPlaats'] = VisPlek::onlyTrashed()->get();
        } else {
            return back();
        }
        return view('dashboard/alle-verwijderde', ['contents' => $array]);
    }


    public function verwijderen($tabel, $id)
    {
        $bericht = $this->berichten['error'];
        $content = $this->selectTabele($tabel, $id);

        if ($content) {
            if (Auth::user()->id == $content->user_id || Auth::user()->admin == 1) {
                $content->delete();
                $bericht = $this->berichten['verwijderen'];
            }
        }
        $cookie = cookie('bericht', $bericht, 1);
        return back()->cookie($cookie);
    }

    public function verwijderen_deactiveren($tabel, $id)
    {
        $bericht = $this->berichten['error'];
        $content = $this->selectTabele_witch_trash($tabel, $id);
        if ($content) {
            if (Auth::user()->id == $content->user_id || Auth::user()->admin == 1) {
                $content->restore();
                $bericht = $this->berichten['deactiveren'];
            }
        }
        $cookie = cookie('bericht', $bericht, 1);
        return back()->cookie($cookie);
    }
    public function gebruikers(){
        $array = [];
        if (Auth::user()->admin == 1) {
            $array['trainers'] = User::withTrashed()->get();
        } else {
            return back();
        }
        return view('dashboard/alle-verwijderde', ['contents' => $array]);
    }
    public function aanvaarden($tabel, $id)
    {
        $bericht = $this->berichten['error'];

        $content = $this->selectTabele($tabel, $id);

        if ($content) {
            if (Auth::user()->id == $content->user_id || Auth::user()->admin == 1) {
                $content->active = 2;
                $content->save();
                $bericht = $this->berichten['aanvaarden'];
            }
        }

        $cookie = cookie('bericht', $bericht, 1);
        return back()->cookie($cookie);

    }

    public function selectTabele($tabel, $id)
    {
        if ($tabel == 'trainer') {
            $content = User::find($id);
        }
        if ($tabel == 'wedstrijd') {
            $content = Wedstrijd::find($id);
        }
        if ($tabel == 'plaats') {
            $content = VisPlek::find($id);
        }
        if ($tabel == 'nieuwsArtikel') {
            $content = NieuwsArtikel::find($id);
        }
        if ($tabel == 'tutorial') {
            $content = Tutorial::find($id);
        }
        return $content;
    }

    public function selectTabele_witch_trash($tabel, $id)
    {

        if ($tabel == 'trainer') {
            $content = User::withTrashed()->where('id', $id);
        }
        if ($tabel == 'wedstrijd') {
            $content = Wedstrijd::withTrashed()->where('id', $id);

        }
        if ($tabel == 'plaats') {
            $content = VisPlek::withTrashed()->where('id', $id);
        }
        if ($tabel == 'nieuwsArtikel') {
            $content = NieuwsArtikel::withTrashed()->where('id', $id);
        }
        if ($tabel == 'tutorial') {
            $content = Tutorial::withTrashed()->where('id', $id);
        }
        return $content->first();
    }
}