<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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


        $yahooWeatherZipCode=966591;
        $yahooWeatherUnits="c";


        $BASE_URL = "http://query.yahooapis.com/v1/public/yql";
        $yql_query = "select * from weather.forecast where woeid= ".$yahooWeatherZipCode." and u='".$yahooWeatherUnits."'";
        $yql_query_url = $BASE_URL . "?q=" . urlencode($yql_query) . "&format=json";
        // Make call with cURL
        $session = curl_init($yql_query_url);
        curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
        $json = curl_exec($session);
        // Convert JSON to PHP object
        $phpObj = json_decode($json,true);


        return $phpObj;

//        $url = "http://weather.yahooapis.com/forecastrss?w=" . $this->yahooWeatherZipCode . "&u=" . $this->yahooWeatherUnits . "&language=fr-be";
//        $file = file_get_contents($url);
//        $xml = simplexml_load_string($file);
//        $ns = $xml->getNamespaces(TRUE);
//        $xml->registerXPathNamespace('c', $ns['yweather']);
//
//        if (!isset($phpObj['query']['results']['channel']['link'])) {
//            return t('City not found');
//        }
//
//        $element_units = $phpObj['query']['results']['channel']['units'];
//        $element_wind = $phpObj['query']['results']['channel']['wind'];
//        $element_atmosphere = $phpObj['query']['results']['channel']['atmosphere'];
//        $element_astronomy =$phpObj['query']['results']['channel']['astronomy'];
//        $element_condition =$phpObj['query']['results']['channel']['item']['condition'];
//        $element_forecast =$phpObj['query']['results']['channel']['item']['forecast'];
//
//        //units
//        $units = array();
//        foreach ($element_units as $a => $b) {
//            $units[$a] = (string)$b;
//        }
//
//        $wind = array();
//        foreach ($element_wind as $a => $b) {
//            $wind[$a] = (string)$b;
//        }
//
//        //atmosphere
//        $atmosphere = array();
//        foreach ($element_atmosphere as $a => $b) {
//            $atmosphere[$a] = (string)$b;
//        }
//
//        //astronomy
//        $astronomy = array();
//        foreach ($element_astronomy as $a => $b) {
//            $astronomy[$a] = (string)$b;
//        }
//
//        //condition
//        $condition = array();
//        foreach ($element_condition as $a => $b) {
//            $condition[$a] = (string)$b;
//        }
//
//        //forecast
//        $forecasts = array();
//        foreach ($element_forecast as $key => $value) {
//            $aux = array();
//            foreach ($element_forecast[$key] as $a => $b) {
//                $aux[$a] = (string)$b;
//            }
//            $forecasts[] = $aux;
//        }
//
//        $weather_info = array(
//            'units' => $units,
//            'wind' => $wind,
//            'atmosphere' => $atmosphere,
//            'astronomy' => $astronomy,
//            'condition' => $condition,
//            'forecasts' => $forecasts,
//        );
//
//        return $weather_info;
//    }










//        return view('home');
    }
}
