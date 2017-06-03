<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Weather;
use App\City;
use Carbon\Carbon;
use App\VisDag;
use App\helpers\LocatieDichtBij;
require_once base_path('vendor/autoload.php');
use Phpml\Classification\KNearestNeighbors;
use App\Vorspeling;

class WheatherAggregateData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'wheater:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */

    protected $locatieMesur;


    public function __construct()
    {
        $this->locatieMesur = new LocatieDichtBij();
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $cities = City::all();

        foreach ($cities as $key => $city) {

            $weerGisterenTemp = $city->weerGisteren()->get();
            if(count($weerGisterenTemp)){
                $weerGisterenTemp = $weerGisterenTemp->last()->temp;
            }else{
                $weerGisterenTemp=null;
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


            $channel = $phpObj['query']['results']["channel"];
            $astronomy = $phpObj['query']['results']["channel"]["astronomy"];
            $condition = $phpObj['query']['results']["channel"]['item']['condition'];
            $yahooAtmosphere = $channel['atmosphere'];
            $yahooWind = $channel['wind'];

            $weather = new Weather;
            $high = $phpObj['query']['results']["channel"]['item']['forecast'][0]['high'];
            $low = $phpObj['query']['results']["channel"]['item']['forecast'][0]['low'];

            $weather->high = $high;
            $weather->low = $low;
            $weather->temp = $condition['temp'];
            if($weerGisterenTemp){
                $weather->verschilTemp=  $weerGisterenTemp -$condition['temp'];
            }else{
                $weather->verschilTemp=  0;
            }
            $weather->text = $condition['text'];

            $weather->sunrise = $this->am_pm_to_24($astronomy['sunrise']);
            $weather->sunset = $this->am_pm_to_24($astronomy['sunset']);


            $weather->chill = $yahooWind['chill'];
            $weather->direction = $yahooWind['direction'];
            $weather->speed = $yahooWind['speed'];

            $weather->humidity = (int)$yahooAtmosphere['humidity'];
            $weather->pressure = (double)$yahooAtmosphere['pressure'];
            $weather->rising = (int)$yahooAtmosphere['rising'];
            $weather->visibility = (double)$yahooAtmosphere['visibility'];
            $weather->seizoen = floor((((Carbon::now()->format('m') + 9) % 12) / 3 + 1) % 4);

            $weather->city_id = $city->id;

            $weather->save();

        }


        foreach ($cities as $key => $city) {
            $weerGisterenTemp = $city->weerGisteren()->get();
            if(count($weerGisterenTemp)){
                $weerGisterenTemp = $weerGisterenTemp->last()->temp;
            }else{
                $weerGisterenTemp=null;
            }

            $cityWeather = Weather::whereDate('created_at', Carbon::yesterday())->where('city_id', $city->id)->get();
            $totaalWeater = count($cityWeather);
            if (count($cityWeather)) {
                $newWeather = new Weather;
                $newWeather->high = $cityWeather->sum('high') / $totaalWeater;
                $newWeather->low = $cityWeather->sum('low') / $totaalWeater;
                $newWeather->temp = $cityWeather->sum('temp') / $totaalWeater;
                if($weerGisterenTemp){
                    $newWeather->verschilTemp=  $weerGisterenTemp -$newWeather->temp;
                }else{
                    $newWeather->verschilTemp=  0;
                }
                $newWeather->text = $cityWeather->first()->text;
                $newWeather->sunrise = $cityWeather->first()->sunrise;
                $newWeather->sunset = $cityWeather->first()->sunset;
                $newWeather->chill = $cityWeather->sum('chill') / $totaalWeater;
                $newWeather->direction = $cityWeather->sum('direction') / $totaalWeater;
                $newWeather->speed = $cityWeather->sum('speed') / $totaalWeater;
                $newWeather->humidity = $cityWeather->sum('humidity') / $totaalWeater;
                $newWeather->pressure = $cityWeather->sum('pressure') / $totaalWeater;
                $newWeather->rising = $cityWeather->sum('rising') / $totaalWeater;
                $newWeather->visibility = $cityWeather->sum('visibility') / $totaalWeater;
                $newWeather->visibility = $cityWeather->sum('visibility') / $totaalWeater;
                $newWeather->seizoen=$cityWeather->first()->seizoen;
                $newWeather->created_at = $cityWeather->first()->created_at;
                $newWeather->city_id = $cityWeather->first()->city_id;
                $newWeather->save();
                $cityWeather = Weather::whereDate('created_at', Carbon::yesterday())->where('city_id', $city->id);
                $totaalWeater = count($cityWeather->get());
                $cityWeather = $cityWeather->limit($totaalWeater - 1);
                $cityWeather->delete();
            }
        }








        $weerVandag = Weather::whereDate('created_at', Carbon::today())->with('city');


        $cities = City::with('weerVandag')->get();
        $allPositivDays = [];
        $labelsVisdag = [];
        $visDagenSucces = VisDag::all();
        foreach ($visDagenSucces as $dagenSucce) {
            $nieuwDag = [];
            // ->pressure toevoegen
            array_push($nieuwDag,
                $dagenSucce->low,
                $dagenSucce->high,
                $dagenSucce->temp,
                $dagenSucce->verschilTemp,
                time($dagenSucce->sunrise),
                time($dagenSucce->sunset),
                $dagenSucce->humidity,
                $dagenSucce->pressure,
                $dagenSucce->rising,
                (float)$dagenSucce->visibility,
                $dagenSucce->chill,
                (float)$dagenSucce->speed,
                $dagenSucce->direction,
                $dagenSucce->seizoen
            );
            array_push($allPositivDays, $nieuwDag);
            array_push($labelsVisdag, (string)$dagenSucce->visGevangenSucces);
        }

        $samples = $allPositivDays;
        $labels = $labelsVisdag;
        $classifier = new KNearestNeighbors();
        $classifier->train($samples, $labels);

        foreach ($cities as $city) {
            $weerCityVandaag = $city->weerVandag->last();

            $voorspeling = $classifier->predict([
                $weerCityVandaag->low,
                $weerCityVandaag->high,
                $weerCityVandaag->temp,
                $weerCityVandaag->verschilTemp,
                time($weerCityVandaag->sunrise),
                time($weerCityVandaag->sunset),
                $weerCityVandaag->humidity,
                $weerCityVandaag->pressure,
                $weerCityVandaag->rising,
                (float)$weerCityVandaag->visibility,
                $weerCityVandaag->chill,
                (float)$weerCityVandaag->speed,
                $weerCityVandaag->direction,
                $weerCityVandaag->seizoen
            ]);
            $newVoorspeling = new Vorspeling;
            $newVoorspeling->voorspelling = $voorspeling;
            $newVoorspeling->city_id = $city->id;
            $newVoorspeling->save();
        }


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
}
