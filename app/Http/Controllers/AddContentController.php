<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Wedstrijd;
use App\User;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;


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

        $input = json_decode($request->input, true);

//        $this->validate(json_encode($input), [
//            'titel' => 'required|max:',
//            'text' => 'required|max:255',
//        ]);

        $validator = Validator::make($input, [
            'titel' => 'required|max:151',
            'text' => 'required|max:1000',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'prijzen' => 'max:151',
            'category' => 'required|',
            'hengel' => 'required|',
            'visserij' => 'required|',
            'wedstrijdduur' => 'max:100',
            'wedstrijdwater' => 'max:200',
            'kostprijs' => 'required|min:1|max:5|regex:/^\d*(\.\d{1,2})?$/',
            'myDate' => 'required',
            'dag' => 'required|max:3',
            'maand' => 'required|max:5',
            'loting' => 'max:200',
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            return $validator->messages();
        } else {
//            return $validator->messages();
        }

        $data = Input::get('file');
        if (Input::hasFile('file')) {
            $user = User::find($input['id']);
            if ($user) {
                $file = Input::file('file');
                $file->move('public/uploads',
                    $file->getClientOriginalName());
                $image = Image::make(sprintf('public/uploads/%s', $file->getClientOriginalName()))->resize(200, 200)->save();
                $wedstrijd = new Wedstrijd;
                $wedstrijd->lat = $input['lat'];
                $wedstrijd->lng = $input['lng'];
                $wedstrijd->titel = $input['titel'];
                $wedstrijd->image = $file->getClientOriginalName();
                $wedstrijd->prijzen = $input['prijzen'];
                $wedstrijd->category = $input['category'];
                $wedstrijd->hengel = $input['hengel'];
                $wedstrijd->visserij = $input['visserij'];
                $wedstrijd->duur = $input['wedstrijdduur'];
                $wedstrijd->water = $input['wedstrijdwater'];
                $wedstrijd->kostprijs = $input['kostprijs'];
                $wedstrijd->datum = date('Y-m-d', strtotime($input['myDate']));
                $wedstrijd->dag = $input['dag'];
                $wedstrijd->maand = $input['maand'];
                $wedstrijd->loting = $input['loting'];
                $wedstrijd->text = $input['text'];
                $wedstrijd->user_id = $user->id;
                $wedstrijd->save();
                return $this->massage_success;
            }
        }
        return $this->massage_error;
    }
}
