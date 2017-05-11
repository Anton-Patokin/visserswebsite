<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\VisPlek;
use App\User;
use App\Wedstrijd;

class ApiGoogleMaps extends Controller
{
    public function markers($marker)
    {
        if ($marker == 'visPlaats') {
            return VisPlek::where('active', 2)->get();
        }
        if ($marker == 'trainers') {
            return User::where('active', 2)->get();
        }
        if ($marker == 'wedstrijden') {
            return Wedstrijd::where('active', 2)->get();
        }
        return 'error';
    }
}
