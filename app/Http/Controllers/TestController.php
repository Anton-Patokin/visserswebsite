<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Wedstrijd;
class TestController extends Controller
{
    public function index($string){
        $wedstrijden = Wedstrijd::where('active', '2')
            ->search($string)->get();
        return $wedstrijden;
    }
}
