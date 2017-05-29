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


class VisvangsController extends Controller
{
    public function opslaanVanVisVangst(Request $request){
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

        $datum = substr($request->input['myDate'],0,10);

        $weer = Weather::whereDate('created_at', '=', date($datum))->get();
return $weer;
    $id =  $request->input['id'];
        $vissen =  $request->input['vissen'];
        $lat =  $request->input['lat'];
        $lng =  $request->input['lng'];
        $hoeWashetVangst =  $request->input['gevangen'];
        $redenVaromNieksGevangen =  $request->input['nietGevangen'];
        $datum = substr($request->input['myDate'],0,10);
        $ietsGevangen = $request->input['vangst'];
return $id .' '.$lat.' '.$lng.' '.$hoeWashetVangst.' '.$redenVaromNieksGevangen.' '.$datum.' '.$ietsGevangen;
    }
}
