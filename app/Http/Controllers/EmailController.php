<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscribe;
use Symfony\Component\HttpFoundation\Cookie;
class EmailController extends Controller
{
    public function addSubscriber(Request $request)
    {

        $this->validate($request, [
            'email' => 'required|email'
        ]);
        $cookie = cookie('success', 'Jouw mail is succesvol opgeslagen', 1);


        $subscriber=Subscribe::where('email',$request->email)->get();
        if(!count($subscriber) || !$request->naam){
            $subscriber = new Subscribe;
            $subscriber->email = $request->email;
            $subscriber->save();
        }
        return redirect('/home')->withCookie(cookie()->forever('subscriber', 'true'))->cookie($cookie);
    }
}
