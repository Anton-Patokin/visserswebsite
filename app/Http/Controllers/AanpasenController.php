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
            return view('add_content.nieuws.nieuws',['aanpasen'=>$nieuwsArtikel]);
        }
        
        return 'dat is het begin van updaten good luck';
    }
}
