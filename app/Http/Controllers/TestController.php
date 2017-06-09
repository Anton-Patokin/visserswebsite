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


use App\helpers\MaanStand;

class TestController extends Controller
{
    protected $locatieMesur;
    protected $maan;

    public function __construct()
    {
        $this->locatieMesur = new LocatieDichtBij();
        $this->maan = new MaanStand();
    }

    public function index($string)
    {
    }


}
