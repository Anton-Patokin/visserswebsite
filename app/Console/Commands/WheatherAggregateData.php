<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Weather;
use App\City;
use Carbon\Carbon;
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
    public function __construct()
    {
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
            $high= $phpObj['query']['results']["channel"]['item']['forecast'][0]['high'];
            $low =$phpObj['query']['results']["channel"]['item']['forecast'][0]['low'];

            $weather->high = $high;
            $weather->low = $low;
            $weather->temp=$condition['temp'];
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

            $weather->city_id = $city->id;

            $weather->save();

        }


        foreach ($cities as $key => $city) {
            $cityWeather = Weather::whereDate('created_at', Carbon::yesterday())->where('city_id', $city->id)->get();
            $totaalWeater = count($cityWeather);
            if (count($cityWeather)) {
                $newWeather = new Weather;
                $newWeather->high = $cityWeather->sum('high') / $totaalWeater;
                $newWeather->low = $cityWeather->sum('low') / $totaalWeater;
                $newWeather->temp = $cityWeather->sum('temp') / $totaalWeater;
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
                $newWeather->created_at = $cityWeather->first()->created_at;
                $newWeather->city_id = $cityWeather->first()->city_id;
                $newWeather->save();
                $cityWeather = Weather::whereDate('created_at', Carbon::yesterday())->where('city_id', $city->id);
                $totaalWeater = count($cityWeather->get());
                $cityWeather= $cityWeather->limit($totaalWeater-1);
                $cityWeather->delete();
            }
        }


    }

    private function am_pm_to_24($string)
    {
        $new_string = "";
        $value = explode(':',$string);
        (strlen ($value[0]) == 1) ? $new_string = "0" . $value[0] : $new_string = $value[0];
        $value = explode( ' ',$value[1]);
        (strlen ($value[0]) == 1) ? $new_string = $new_string . ":0" . $value[0] : $new_string = $new_string . ':' . $value[0];
        $new_string = $new_string . ' ' . $value[1];
        return date("H:i", strtotime($new_string));
    }
}
