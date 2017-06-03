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




    }

    private function am_pm_to_24($string)
    {
        $new_string = "";
        $value = explode(':', $string);
        (strlen($value[0]) == 1) ? $new_string = "0" . $value[0] : $new_string = $value[0];
        $value = explode(' ', $value[1]);
        (strlen($value[0]) == 1) ? $new_string = $new_string . ":0" . $value[0] : $new_string = $new_string . ':' . $value[0];
        $new_string = $new_string . ' ' . $value[1];
        return date("H:i", strtotime($new_string));
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
