<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\User;
use App\Wedstrijd;
use App\VisPlek;
use App\NieuwsArtikel;
use App\Tutorial;

class ApiZoekenController extends Controller
{
    public function googleMapsZoeken(Request $request)
    {

        $wedstrijden = Wedstrijd::where('active', '2')
            ->search($request->input, null, true)->get();
        $trainer = User::where('active', '2')
            ->search($request->input, null, true)->get();
        $visplaats = VisPlek::where('active', '2')
            ->search($request->input, null, true, true)->get();
        return ["wedstrijd" => $wedstrijden, "trainer" => $trainer, 'plaats' => $visplaats];
    }

    public function googleMapsZoekenVisPlatsen(Request $request)
    {
        $visplaats = VisPlek::where('active', '2')
            ->search($request->input, null, true, true)->get();
        return ['plaats' => $visplaats];
    }

    public function googleMapsZoekenGids(Request $request)
    {
        $gids = User::where('active', '2')
            ->search($request->input, null, true, true)->get();
        return ['trainer' => $gids];
    }

    public function alles(Request $request)
    {
        $search = [];

        $nieuws = NieuwsArtikel::where('active', '2')->search($request->input, null, true)->take(5)->get();
        $tutorial = Tutorial::where('active', '2')->search($request->input, null, true)->take(5)->get();
        $wedstrijden = Wedstrijd::where('active', '2')
            ->search($request->input, null, true)->take(5)->get();
        $trainer = User::where('active', '2')
            ->search($request->input, null, true)->take(5)->get();
        $visplaats = VisPlek::where('active', '2')
            ->search($request->input, null, true, true)->take(5)->get();


//        foreach ($nieuws as $value) {
//            array_push($search, $value);
//        }
//        foreach ($tutorial as $value) {
//            array_push($search, $value);
//        }
//        foreach ($visplaats as $value) {
//            array_push($search, $value);
//        }
//        foreach ($wedstrijden as $value) {
//            array_push($search, $value);
//        }
//        foreach ($visplaats as $value) {
//            array_push($search, $value);
//        }
//        foreach ($trainer as $value) {
//            array_push($search, $value);
//        }
                    array_push($search, $nieuws,$tutorial,$visplaats,$wedstrijden,$trainer);

        return $search;
    }
}

