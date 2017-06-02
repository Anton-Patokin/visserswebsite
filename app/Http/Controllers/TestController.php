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
use App\Vorspeling;

require_once base_path('vendor/autoload.php');
use Phpml\Classification\KNearestNeighbors;


class TestController extends Controller
{
    protected $locatieMesur;

    public function __construct()
    {
        $this->locatieMesur = new LocatieDichtBij();
    }

    public function index($string)
    {



//        $weerVandag = Weather::whereDate('created_at', Carbon::today())->with('city');

        $cities = City::all()->weerVandag();
        
return $weerVandag->get();


        $allPositivDays = [];
        $labelsVisdag = [];
        $visDagenSucces = VisDag::all();


        foreach ($visDagenSucces as $dagenSucce) {
            $nieuwDag = [];
            // ->pressure toevoegen
            array_push($nieuwDag,$dagenSucce->low,$dagenSucce->high, $dagenSucce->temp, time($dagenSucce->sunrise), time($dagenSucce->sunset), $dagenSucce->humidity,$dagenSucce->pressure, $dagenSucce->rising, (float)$dagenSucce->visibility, $dagenSucce->chill, (float)$dagenSucce->speed, $dagenSucce->direction);
            array_push($allPositivDays, $nieuwDag);
            array_push($labelsVisdag, (string)$dagenSucce->visGevangenSucces);
        }

        $samples = $allPositivDays;
        $labels = $labelsVisdag;
        $classifier = new KNearestNeighbors();
        $classifier->train($samples, $labels);


//        return $allPositivDays;

        echo $classifier->predict([
            17,
            27,
            45,
            1496333006,
            1496333006,
            12,
            2000,
            0,
            10.91,
            84,
            60,
            3
        ]);
    }


    public function count($values)
    {
        $total = 0;
        $totalElements = count($values);
        foreach ($values as $value) {

            $total += (float)$value;
        }
        return $total;
    }
}
