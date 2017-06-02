<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\VisDag;
use App\User;
use App\VisSoort;
use App\City;
use App\Weather;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\helpers\LocatieDichtBij;

class VisvangsController extends Controller
{
    protected $locatieMesur;

    public function __construct()
    {
        $this->locatieMesur = new LocatieDichtBij();
    }

    public function opslaanVanVisVangst(Request $request)
    {
        $validator = Validator::make($request->input, [
            'id' => 'required',
            'vissen' => 'required',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'gevangen' => 'max:100',
            'nietGevangen' => 'max:100',
            'myDate' => 'required|max:50',
            'vangst' => 'required|max:100'
        ]);
        if ($validator->fails()) {
            return 'error';
        }

        $datum = substr($request->input['myDate'], 0, 10);

        $weerMerLocaties = $weer = Weather::whereDate('created_at', '=', date($datum))->with('city')->get();
        $angeduideLocatieLat = $request->input['lat'];
        $angeduideLocatielong = $request->input['lng'];

//        $this->locatieMesur();
        $dichtbijzijndeLocatie = '';
        $KlijnsteAfstand = 1000000;
        foreach ($weerMerLocaties as $weerMerLocatie) {
            $weerLocatieLat = $weerMerLocatie->city->lat;
            $weerLocatieLong = $weerMerLocatie->city->long;
            $afstand = $this->locatieMesur->DistAB($angeduideLocatieLat, $angeduideLocatielong, $weerLocatieLat, $weerLocatieLong);
            if ($afstand < $KlijnsteAfstand) {
                $dichtbijzijndeLocatie = $weerMerLocatie;
                $KlijnsteAfstand = $afstand;
            }
        }

        $visdag = new VisDag;

        $visdag->low = $dichtbijzijndeLocatie->low;
        $visdag->high = $dichtbijzijndeLocatie->high;
        $visdag->temp = $dichtbijzijndeLocatie->temp;
        $visdag->sunrise = $dichtbijzijndeLocatie->sunrise;
        $visdag->sunset = $dichtbijzijndeLocatie->sunset;
        $visdag->humidity = $dichtbijzijndeLocatie->humidity;
        $visdag->pressure = $dichtbijzijndeLocatie->pressure;
        $visdag->rising = $dichtbijzijndeLocatie->rising;
        $visdag->visibility = $dichtbijzijndeLocatie->visibility;
        $visdag->chill = $dichtbijzijndeLocatie->chill;
        $visdag->speed = $dichtbijzijndeLocatie->speed;
        $visdag->direction = $dichtbijzijndeLocatie->direction;
        $visdag->visGevangenSucces = ($request->input['vangst']=='nee')?0:1;
        $visdag->beordeling = $request->input['nietGevangen'];

        if ($request->input['vangst'] == 'ja') {
            $visdag->beordeling = $request->input['gevangen'];
        }
        $visdag->lat = $request->input['lat'];
        $visdag->lng = $request->input['lng'];
        $visdag->datum = date($datum);
        $visdag->user_id = $request->input['id'];
        $visdag->save();


        if ($visdag->visGevangenSucces == "ja") {
            foreach ($request->input['vissen'] as $vangst) {
                $visSoort = new VisSoort;
                $visSoort->aantal = $vangst['aantal'];
                $visSoort->soort = $vangst['soort'];
                $visSoort->datum = date($datum);
                $visSoort->vis_dag_id = $visdag->id;
                $visSoort->user_id = $request->input['id'];
                $visSoort->save();
            }
        }

        return 'succes';
    }
}
