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
use App\Http\Controllers\FileUploadController;

class Add_contentController extends Controller
{
    protected $fileUpload;

    public function __construct()
    {
        $this->fileUpload = new FileUploadController();
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

    public function tutorial()
    {
        return view('add_content.tutorial.tutorial', ['tutorialCategory' => TutorialCategory::all()]);
    }

    public function toevoegenTutorial(Request $request)
    {
        $success = false;
        $this->validate($request,
            [
                'titel' => 'required|max:250',
                'inleiding' => 'required|max:350',
                'category' => 'required |exists:tutorial_categories',
                'wiziwig' => 'required|max:1000000',
            ]);
        $user = Auth::user();
        if ($user) {
            if ($request->aanpasen) {
                $tutorial = Tutorial::find($request->aanpasen);

                if (Auth::user()->id == $tutorial->user_id) {
                    if ($request->image) {
                        $this->validate($request,
                            [
                                'image' => 'required | mimes:jpeg,jpg,png,| max:5000',
                            ]);
                        $fileName = $this->fileUpload->fileUpload($request->image);

                    } else {
                        $fileName = $tutorial->image;
                    }
                }
                $tutorial->active = 0;
            } else {
                $this->validate($request,
                    [
                        'image' => 'required | mimes:jpeg,jpg,png | max:5000',
                    ]);
                $fileName = $this->fileUpload->fileUpload($request->image);
                $tutorial = new Tutorial;
            }
        }
        if ($fileName && $tutorial) {
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

    public function toevoegenProfiel(Request $request)
    {

        $success = false;

        $this->validate($request,
            [
                'naam' => 'required|max:51',
                'text' => 'required|max:1000',
                'lat' => 'required|numeric',
                'lng' => 'required|numeric',
                'geslacht' => 'required|max:10',
                'leeftijd' => 'required||min:1|max:2|regex:/^\d*(\.\d{1,2})?$/',
                'ervaring' => 'required|max:100',
                'telefonnummer' => '',
                'kostprijs' => 'required|min:1|max:5|regex:/^\d*(\.\d{1,2})?$/',
            ]);


        $user = User::find($request->id);
        if ($user->id == Auth::user()->id || Auth::user()->admin)
            if ($request->image) {
                $this->validate($request,
                    [
                        'image' => 'required | mimes:jpeg,jpg,png,| max:5000',
                    ]);
                $fileName = $this->fileUpload->fileUpload($request->image);

            } else {
                $fileName = $user->image;
            }


        if ($fileName && $user) {
            $user->active = 1;
            $user->lat = $request->lat;
            $user->lng = $request->lng;
            $user->name = $request->naam;
            $user->titel = $request->naam;
            $user->image = $fileName;
            $user->vraagprijs = $request->kostprijs;
            $user->geslacht = $request->geslacht;
            $user->leeftijd = $request->leeftijd;
            $user->ervaring = $request->ervaring;
            $user->telefonnummer = $request->telefonnummer;
            $user->text = $request->text;
            $user->save();
            return back();
        }
        return 'error';
    }

    public function toevoegenNieuws(Request $request)
    {
        $success = false;

        $this->validate($request,
            [
                'titel' => 'required|max:250',
                'inleiding' => 'required|max:350',
                'wiziwig' => 'required|max:1000000',
            ]);


        $user = Auth::user();
        if ($user) {
            if ($request->aanpasen) {
                $nieuwsArtikel = NieuwsArtikel::find($request->aanpasen);
                if (Auth::user()->id == $nieuwsArtikel->user_id) {

                    if ($request->image) {
                        $this->validate($request,
                            [
                                'image' => 'required | mimes:jpeg,jpg,png,| max:5000',
                            ]);
                        $fileName = $this->fileUpload->fileUpload($request->image);

                    } else {
                        $fileName = $nieuwsArtikel->image;
                    }
                }
                $nieuwsArtikel->active = 0;
            } else {
                $this->validate($request,
                    [
                        'image' => 'required | mimes:jpeg,jpg,png | max:5000',
                    ]);
                $fileName = $this->fileUpload->fileUpload($request->image);
                $nieuwsArtikel = new NieuwsArtikel;
            }
        }
        if ($fileName && $nieuwsArtikel) {
            $nieuwsArtikel->titel = $request->titel;
            $nieuwsArtikel->inleiding = $request->inleiding;
            $nieuwsArtikel->image = $fileName;
            $nieuwsArtikel->wiziwig = $request->wiziwig;
            $nieuwsArtikel->user_id = $user->id;
            $nieuwsArtikel->save();
            return 'succes';
        }
        return 'error';
    }
}
