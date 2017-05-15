<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
class GebruikerController extends Controller
{
    public function index(){
        $user= User::find( Auth::user()->id);
        return view('gebruiker/gebruiker');
    }
}
