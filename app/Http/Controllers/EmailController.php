<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscribe;
use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Support\Facades\Config;
use Mail;
use App\Mail\Contact;

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
    
    
    public function contact(Request $request){
        $this->validate($request,[
            'naam'=>'required|max:255',
            'mail'=>'required|max:255|email',
            'bericht'=>'required|max:1500'
        ]);

        Mail::to('patokin.anton@gmail.com')->send(new Contact($request->naam,$request->mail,$request->bericht));
        return 'okey';
    }
}
