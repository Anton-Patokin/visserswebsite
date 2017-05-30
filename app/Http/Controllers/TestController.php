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
use App\Wedstrijd;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\VisDag;
use App\VisSoort;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\helpers\LocatieDichtBij;

class TestController extends Controller
{
    protected $locatieMesur;

    public function __construct()
    {
        $this->locatieMesur = new LocatieDichtBij();
    }

    public function index($string)
    {
        $weerMerLocaties = $weer = Weather::whereDate('created_at', '=', '2017-05-30')->with('city')->get();
        $angeduideLocatieLat = 50.281042972026;
        $angeduideLocatielong = 4.3366032466292;

//        $this->locatieMesur();
        $dichtbijzijndeLocatie = '';
        $KlijnsteAfstand = 1000000;
        foreach ($weerMerLocaties as $weerMerLocatie) {
            $weerLocatieLat = $weerMerLocatie->city->lat;
            $weerLocatieLong = $weerMerLocatie->city->long;
            $afstand = $this->locatieMesur->DistAB($angeduideLocatieLat, $angeduideLocatielong, $weerLocatieLat, $weerLocatieLong);
            if ($afstand < $KlijnsteAfstand) {
                $dichtbijzijndeLocatie=$weerMerLocatie;
                $KlijnsteAfstand=$afstand;
            }
        }
        echo $afstand.'<br>';
        return $dichtbijzijndeLocatie;

    }
}
