<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class ApiAdminMainController extends Controller
{
    public function pieChart(Request $request){
      $user= User::find($request->id)->visSoorten->groupBy('soort');
        return$user;
    }
}
