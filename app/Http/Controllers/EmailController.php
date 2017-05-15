<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscribe;
use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Support\Facades\Config;

class EmailController extends Controller
{
    protected $berichten;
    public function __construct()
    {
        $this->berichten = Config::get('constant.Berichten');
    }

    public function addSubscriber(Request $request)
    {

        $this->validate($request, [
            'email' => 'required|email'
        ]);
        $cookie = cookie('bericht', $this->berichten['subscriber'], 1);


        $subscriber=Subscribe::where('email',$request->email)->get();
        if(!count($subscriber) || !$request->naam){
            $subscriber = new Subscribe;
            $subscriber->email = $request->email;
            $subscriber->save();
        }
        return redirect('/home')->withCookie(cookie()->forever('subscriber', 'true'))->cookie($cookie);
    }
}