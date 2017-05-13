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
use App\TutorialCategory;
use App\Visserij;
use App\Category;
use App\Hengel;
use App\WaterType;

class AanpasenController extends Controller
{
    protected $berichten;

    public function __construct()
    {
        $this->berichten = Config::get('constant.Berichten');
        $this->middleware('auth');
    }

    public function dashboard($type, $id)
    {
        if ($type == 'nieuwsArtikel') {
            $nieuwsArtikel = NieuwsArtikel::find($id);
            if (Auth::user()->id == $nieuwsArtikel->user_id) {
                return view('add_content.nieuws.nieuws', ['aanpasen' => $nieuwsArtikel]);
            }
        }
        if ($type == 'tutorial') {
            $tutorial = Tutorial::find($id);
            if (Auth::user()->id == $tutorial->user_id) {
                return view('add_content.tutorial.tutorial', ['aanpasen' => $tutorial, 'tutorialCategory' => TutorialCategory::all()]);
            }
        }
        if($type=='wedstrijd' || $type=='plaats' ||$type=='trainer'){
            $content="";
            if($type=='wedstrijd'){
                $content = Wedstrijd::find($id);
            }
            if($type=='plaats'){
                $content = VisPlek::find($id);
            }
            if($type=='trainer'){
                $content = User::find($id);
            }
            if (Auth::user()->id == $content->user_id) {
                return view('add_content.add',['aanpasen'=>$content,'type'=>$type])
                    ->with('visserij', Visserij::all(['id', 'visserij']))
                    ->with('category', Category::all(['id', 'category']))
                    ->with('waterType', WaterType::all(['waterType']))
                    ->with('hengel', Hengel::all(['id', 'hengel']));
            }
        }

        return 'dat is het begin van updaten good luck kijk na of er type is geszet in get variabelle';
    }
}
