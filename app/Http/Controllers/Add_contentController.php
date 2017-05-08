<?php

namespace App\Http\Controllers;

use App\Tutorial;
use Illuminate\Http\Request;
use App\Visserij;
use App\Category;
use App\Hengel;
use App\WaterType;
use App\NieuwsArtikel;
use App\User;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use App\TutorialCategory;

class Add_contentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('add_content.add')
            ->with('visserij', Visserij::all(['id', 'visserij']))
            ->with('category', Category::all(['id', 'category']))
            ->with('waterType', WaterType::all(['waterType']))
            ->with('hengel', Hengel::all(['id', 'hengel']));
    }

    public function nieuws()
    {
        return view('add_content.nieuws.nieuws');
    }
    public function tutorial(){
        return view('add_content.tutorial.tutorial',['tutorialCategory'=>TutorialCategory::all()]);
    }

    public  function toevoegenTutorial(Request $request){
        $this->validate($request,
            [
                'titel' => 'required|max:51',
                'inleiding' => 'required|max:350',
                'image' => 'required | mimes:jpeg,jpg,png | max:5000',
                'category'=>'required |exists:tutorial_categories',
                'wiziwig' => 'required|max:1000000',
            ]);

        $user = Auth::user();


        if ($user) {

            $file = $request->image;
            $fileName = date("Ymdsmd") . $file->getClientOriginalName();
            $destinationPath = 'uploads\\';

            if ($file->move($destinationPath, $fileName)) {
                $max_with = 500;
                $max_height = 300;
                Image::make(public_path($destinationPath . $fileName))->resize($max_with, $max_height)->save($destinationPath . 'thumbnail\\' . $fileName);
                Image::make(public_path($destinationPath . $fileName))->resize($max_with * 2, $max_height * 2)->save($destinationPath . 'big\\' . $fileName);
            }
            $tutorial = new Tutorial;
            $tutorial->titel = $request->titel;
            $tutorial->inleiding = $request->inleiding;
            $tutorial->image = $fileName;
            $tutorial->category = $request->category;
            $tutorial->wiziwig = $request->category;
            $tutorial->user_id = $user->id;

            $tutorial->save();
            return "save";

        }
        return 'error';
    }

    public function toaveogenNieuws(Request $request)
    {
        $this->validate($request,
            [
                'titel' => 'required|max:51',
                'inleiding' => 'required|max:350',
                'image' => 'required | mimes:jpeg,jpg,png | max:5000',
                'wiziwig' => 'required|max:1000000',
            ]);

        $user = Auth::user();


        if ($user) {

            $file = $request->image;
            $fileName = date("Ymdsmd") . $file->getClientOriginalName();
            $destinationPath = 'uploads\\';

            if ($file->move($destinationPath, $fileName)) {
                $max_with = 500;
                $max_height = 300;
                Image::make(public_path($destinationPath . $fileName))->resize($max_with, $max_height)->save($destinationPath . 'thumbnail\\' . $fileName);
                Image::make(public_path($destinationPath . $fileName))->resize($max_with * 2, $max_height * 2)->save($destinationPath . 'big\\' . $fileName);
            }
            $nieuwsArtikel = new NieuwsArtikel;
            $nieuwsArtikel->titel = $request->titel;
            $nieuwsArtikel->inleiding = $request->inleiding;
            $nieuwsArtikel->image = $fileName;
            $nieuwsArtikel->wiziwig = $request->wiziwig;
            $nieuwsArtikel->user_id = $user->id;

            $nieuwsArtikel->save();
            return "save";

        }
        return 'error';
    }
}
