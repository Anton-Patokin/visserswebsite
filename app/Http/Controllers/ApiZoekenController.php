<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\User;
use App\Wedstrijd;
use App\VisPlek;

class ApiZoekenController extends Controller
{
    public function googleMapsZoeken(Request $request){

        $wedstrijden = Wedstrijd::where('active', '2')
            ->search($request->input, null, true)->get();
        $trainer = User::where('active', '2')
            ->search($request->input, null, true)->get();
        $visplaats = VisPlek::where('active', '2')
            ->search($request->input, null, true,true)->get();
        return ["wedstrijd"=>$wedstrijden,"trainer"=>$trainer,'plaats'=>$visplaats];
    }
}