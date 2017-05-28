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
        $content = Faq::orderBy('volgerde', 'asc')->paginate(5);
        if ($amp == 'amp') {
            return view('show.faq-amp', ['contents' => $content]);
        }
        return view('show.faq', ['contents' => $content]);
    }


    public function verwijderFaq($id)
    {
        $bericht = $this->berichten['error'];
        if (Auth::user()->admin) {
            $faq = Faq::find($id);
            $nextNumbar = $faq->volgerde;
            $faq->delete();
            $bericht = $this->berichten['verwijderen'];
            $nextNumbar = $nextNumbar + 1;
            $oldFaqs = Faq::orderBy('volgerde', 'asc')->where('volgerde', '>=', $nextNumbar)->get();
            $nextNumbar = $nextNumbar - 1;
            foreach ($oldFaqs as $oldFaq) {
                $oldFaq->volgerde = $nextNumbar;
                $oldFaq->save();
                $nextNumbar++;
            }
        }
        $cookie = cookie('bericht', $bericht, 1);
        return back()->cookie($cookie);
    }

    public function toevoegenFaqView($id = null)
    {
        if (Auth::user()->admin) {
            $volgerde = Faq::count();

            if ($id) {
                $update = Faq::find($id);
                return view('add_content.faq..faq', ['max' => $volgerde, 'update' => $update]);
            }
            return view('add_content.faq..faq', ['max' => $volgerde]);
        }
        return back();
    }

    public function updateFaq(Request $request, $id)
    {
        $bericht = $this->berichten['error'];

        if (Auth::user()->admin) {
            if ($id) {
                $numberOfFaq = Faq::count();
                $oldFaq = Faq::where('volgerde', $request->volgerde)->get();
                if (count($oldFaq)) {
                    $oldFaqs = Faq::orderBy('volgerde', 'asc')->where('volgerde', '>=', $request->volgerde)->get();
                    $nextNumbar = $request->volgerde + 1;
                    foreach ($oldFaqs as $oldFaq) {
                        $oldFaq->volgerde = $nextNumbar;
                        $oldFaq->save();
                        $nextNumbar++;
                    }
                }
                $faq = Faq::find($id);
                $faq->vraag = $request->vraag;
                $faq->antwoord = $request->antwoord;
                $faq->volgerde = $request->volgerde;
                $faq->save();
                $bericht = $this->berichten['update'];
            }
        }
        $cookie = cookie('bericht', $bericht, 1);
        return back()->cookie($cookie);
    }

    public function toevoegenFaq(Request $request)
    {
        $cookie = cookie('bericht', $this->berichten['faq_error'], 1);

        if (Auth::user()->admin) {


            $this->validate($request, [
                'vraag' => 'required|max:500',
                'antwoord' => 'required|max:1500',
                'volgerde' => 'required|numeric'
            ]);


            $numberOfFaq = Faq::count();
            $oldFaq = Faq::where('volgerde', $request->volgerde)->get();
            if (count($oldFaq)) {
                $oldFaqs = Faq::orderBy('volgerde', 'asc')->where('volgerde', '>=', $request->volgerde)->get();
                $nextNumbar = $request->volgerde + 1;
                foreach ($oldFaqs as $oldFaq) {
                    $oldFaq->volgerde = $nextNumbar;
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
