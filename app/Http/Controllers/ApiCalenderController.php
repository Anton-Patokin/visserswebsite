<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Wedstrijd;

class ApiCalenderController extends Controller
{
    public function index($year,$month){
        $wedstrijden = Wedstrijd::whereMonth('datum', '=', $month)->whereYear('datum', '=', $year)
            ->where('active',2)
            ->get();
        return $wedstrijden;
    }
}
