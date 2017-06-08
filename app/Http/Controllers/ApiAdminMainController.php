<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\VisDag;
class ApiAdminMainController extends Controller
{
    public function pieChart(Request $request){
      $user= User::find($request->id)->visSoorten->groupBy('soort');
        return$user;
    }
    public function allGavnagenVis(Request $request){
        $user= User::find($request->id)->visSoorten->groupBy('datum');
        return $user;
    }
    public function visWeer(Request $request){
        return VisDag::find($request->id);
    }
}
