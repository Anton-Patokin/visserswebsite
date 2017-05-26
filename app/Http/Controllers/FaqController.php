<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Faq;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;


class FaqController extends Controller
{

    protected $berichten;
    public function __construct()
    {
        $this->berichten = Config::get('constant.Berichten');
    }
    public function index($amp = null)
    {
        $content= Faq::orderBy('volgerde','asc')->get();
        if ($amp == 'amp') {
            return view('show.faq-amp',['content'=>$content]);
        }
        return view('show.faq',['content'=>$content]);
    }

    public function toevoegenFaqView(){
        if (Auth::user()->admin) {
            $volgerde = Faq::count();
            return view('add_content.faq..faq',['max'=>$volgerde]);
        }
        return back();
    }

    public function toevoegenFaq(Request $request)
    {
        $cookie = cookie('bericht', $this->berichten['faq_error'], 1);

        if (Auth::user()->admin) {



            $this->validate($request,[
                'vraag' => 'required|max:500',
                'antwoord' => 'required|max:1500',
                'volgerde' => 'required|numeric'
            ]);


            $numberOfFaq= Faq::count();
           $oldFaq= Faq::where('volgerde',$request->volgerde)->get();
            if(count($oldFaq)){
                $oldFaqs=Faq::orderBy('volgerde', 'asc')->where('volgerde','>=',$request->volgerde)->get();
                $nextNumbar =$request->volgerde+1;
                foreach ($oldFaqs as $oldFaq){
                    $oldFaq->volgerde =$nextNumbar;
                    $oldFaq->save();
                    $nextNumbar++;
                }
            }

            $cookie = cookie('bericht', $this->berichten['faq_success'], 1);

            $faq = new Faq;
            $faq->vraag = $request->vraag;
            $faq->antwoord = $request->antwoord;
            $faq->volgerde = $request->volgerde;
            $faq->save();
        }
        return back()->cookie($cookie);
    }
}
