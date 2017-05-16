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
        return $request->input;
    }
}
