<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\City;
use App\helpers\LocatieDichtBij;
use App\helpers\MaanStand;

class ApiWeaterControllr extends Controller
{

    protected $locatieMesur;
    protected $maan;

    public function __construct()
    {
        $this->locatieMesur = new LocatieDichtBij();
        $this->maan = new MaanStand();
    }
    public function index($location = null)
    {

        $content=[];
        $city = City::find(1);
        $weerGisterenTemp = $city->weerGisteren()->get();
        if (count($weerGisterenTemp)) {
            $weerGisterenTemp = $weerGisterenTemp->last()->temp;
        } else {
            $weerGisterenTemp = null;
        }
        $yahooWeatherZipCode = $city->code;
        $yahooWeatherUnits = "c";

        $BASE_URL = "http://query.yahooapis.com/v1/public/yql";
        $yql_query = "select * from weather.forecast where woeid= " . $yahooWeatherZipCode . " and u='" . $yahooWeatherUnits . "'";
        $yql_query_url = $BASE_URL . "?q=" . urlencode($yql_query) . "&format=json";
        // Make call with cURL
        $session = curl_init($yql_query_url);
        curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
        $json = curl_exec($session);
        // Convert JSON to PHP object
        $phpObj = json_decode($json, true);
        $content['moon']= $this->maan->phase_name();
        $content['moonPhase']=floor( ( $this->maan->phase() + 0.0625 ) * 8 );
        $content['weater']= $phpObj;
        return $content;
    }
}
