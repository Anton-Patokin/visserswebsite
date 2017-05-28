<?php

namespace App\Http\Controllers;

use App\Tutorial;
use Carbon\Carbon;
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
use Illuminate\Support\Facades\Config;
use File;

class Add_contentController extends Controller
{

    protected $berichten;
    protected $fileUpload;
    protected $status;

    public function __construct()
    {
        $this->status = Config::get('constant.Status');
        $this->berichten = Config::get('constant.Berichten');
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
        $fileName_php="";
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
                    $tutorial->active = $this->status['aangepast'];
                    $fileName_php = $tutorial->url;

                }
            } else {
                $this->validate($request,
                    [
                        'image' => 'required | mimes:jpeg,jpg,png | max:5000',
                    ]);
                $fileName = $this->fileUpload->fileUpload($request->image);
                $tutorial = new Tutorial;
                $tutorial->active = $this->status['afwachting'];
            }
        }
        if ($fileName && $tutorial) {
            $fileName_php=$this->SaveHtml($fileName_php, $request->wiziwig);

            $tutorial->titel = $request->titel;
            $tutorial->inleiding = $request->inleiding;
            $tutorial->image = $fileName;
            $tutorial->category = $request->category;
            $tutorial->url = $fileName_php;
            $tutorial->user_id = $user->id;
            $tutorial->save();
            return redirect('/tutorial/' . $tutorial->id . '/' . str_replace(' ', '-', substr($tutorial->titel, 0, 25)));
        }
        return 'error';
    }

    public function toevoegenProfiel(Request $request)
    {
        $cookie = cookie('error', $this->berichten['error'], 1);
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
                $user->active = $this->status['afwachting'];

            } else {
                $fileName = $user->image;
                $user->active = $this->status['aangepast'];

            }
        if ($fileName && $user) {
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
            $cookie = cookie('success', $this->berichten['profiel_success'], 1);
        }
        return back()->cookie($cookie);
    }

    public function toevoegenNieuws(Request $request)
    {
        $success = false;
        $fileName_php="";

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
                    $nieuwsArtikel->active = $this->status['aangepast'];
                    $fileName_php = $nieuwsArtikel->url;
                }
            } else {




                $this->validate($request,
                    [
                        'image' => 'required | mimes:jpeg,jpg,png | max:5000',
                    ]);
                $fileName = $this->fileUpload->fileUpload($request->image);
                $nieuwsArtikel = new NieuwsArtikel;
                $nieuwsArtikel->active = $this->status['afwachting'];
            }
        }
        if ($fileName && $nieuwsArtikel) {
            $fileName_php=$this->SaveHtml($fileName_php, $request->wiziwig);
            $nieuwsArtikel->titel = $request->titel;
            $nieuwsArtikel->inleiding = $request->inleiding;
            $nieuwsArtikel->image = $fileName;
            $nieuwsArtikel->url = $fileName_php;
            $nieuwsArtikel->user_id = $user->id;
            $nieuwsArtikel->save();
            return redirect('/nieuws/' . $nieuwsArtikel->id . '/' . str_replace(' ', '-', substr($nieuwsArtikel->titel, 0, 25)));
        }
        return 'error';
    }

    public function SaveHtml($fileName, $data)
    {
        $fileName_path = 'files/';
        if ($fileName != '') {
            $fileName_base = $fileName;
        } else {
            $fileName_base = str_replace(' ', '-', substr(Carbon::now(), 0, 10)) . rand(0, 100) . rand(0, 100);
        }
        $fileName = $fileName_path.$fileName_base . '.php';
        $fileName_amp = $fileName_path.$fileName_base . '-amp.php';
        File::put($fileName, $data);
        File::put($fileName_amp, $this->ampify($data));
        return $fileName_base;
    }

    public function ampify($html = null)
    {
        # Replace img, audio, and video elements with amp custom elements
        $output = preg_replace('/(<[^>]+) style=".*?"/i', '$1', $html);

        $html = preg_replace_callback('/<img ' . 'src="(.*?)"' . '/',
            function ($match) {
                if (getimagesize($match[1], $size)) {
                    $size = getimagesize($match[1], $size);
                    return "<img src='" . $match[1] . "'" . $size[3] . ' layout="responsive" >';
                }
                return "<img src='" . $match[1] . "'>";
            }, $html);

        $html = str_ireplace(
            ['<img', '<video', '/video>', '<audio', '/audio>'],
            ['<amp-img  ', '<amp-video', '/amp-video>', '<amp-audio', '/amp-audio>'],
            $html
        );

        $html = preg_replace('/<amp-img(.*?)>/', '<amp-img$1></amp-img>', $html);
        # Whitelist of HTML tags allowed by AMP
        $html = strip_tags($html, '<h1><h2><h3><h4><h5><h6><a><p><ul><ol><li><blockquote><q><cite><ins><del><strong><em><code><pre><svg><table><thead><tbody><tfoot><th><tr><td><dl><dt><dd><article><section><header><footer><aside><figure><time><abbr><div><span><hr><small><br><amp-img><amp-audio><amp-video><amp-ad><amp-anim><amp-carousel><amp-fit-rext><amp-image-lightbox><amp-instagram><amp-lightbox><amp-twitter><amp-youtube>');
        return $html;
    }
}
