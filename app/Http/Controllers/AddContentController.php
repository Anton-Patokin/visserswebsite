<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Wedstrijd;
use App\User;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Input;

class AddContentController extends Controller
{
    protected $massage_success = "success";
    protected $massage_error = 'error';

    public function __construct()
    {
//        $this->middleware('CheckLoginAddContent');
    }

    public function add(Request $request)
    {

        $data = Input::get('file');
        if (Input::hasFile('file'))
        {
            $file = Input::file('file');
            $file->move('public/uploads',
                $file->getClientOriginalName());
            $image = Image::make(sprintf('public/uploads/%s', $file->getClientOriginalName()))->resize(200, 200)->save();
        }

        $user = User::find($request->id);
        $wedstrijd = new Wedstrijd;
        $wedstrijd->lat = $request->lat;
        $wedstrijd->lng = $request->lng;
        $wedstrijd->titel = $request->titel;
        $wedstrijd->image = $request->titel;
        $wedstrijd->prijzen = $request->prijzen;
        $wedstrijd->category = $request->category;
        $wedstrijd->hengel = $request->hengel;
        $wedstrijd->visserij = $request->visserij;
        $wedstrijd->duur = $request->wedstrijdduur;
        $wedstrijd->water = $request->wedstrijdwater;


        $wedstrijd->datum = date('Y-m-d', strtotime($request->myDate));
        $wedstrijd->dag = $request->dag;
        $wedstrijd->maand = $request->maand;
        $wedstrijd->loting = $request->loting;
        $wedstrijd->text = $request->text;
        $wedstrijd->user_id = $user->id;
        $wedstrijd->save();
        return $this->massage_success;

    }
}
