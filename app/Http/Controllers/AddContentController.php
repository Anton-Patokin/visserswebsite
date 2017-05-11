<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Wedstrijd;
use App\User;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use App\Visserij;
use App\Category;
use App\Hengel;
use App\VisPlek;


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

        if ($input['type'] == 'visPlek') {
            $validator = Validator::make($input, [
                'id' => 'required',
                'naam' => 'required|max:51',
                'lat' => 'required|numeric',
                'lng' => 'required|numeric',
                'watertype' => 'required|max:50',
                'viswater' => 'required|max:1000',
                'reglementen' => 'max:1000',
                'nachvissen' => 'required|max:1',
                'toilet' => 'required|max:1',
                'betaalwater' => 'required||max:1',
                'prive' => 'required|max:1',
                'vissoorten' => 'max:255',
                'text' => 'max:1000',
            ]);

            if ($validator->fails()) {
                return $validator->messages();
            }
            if (Input::hasFile('file')) {

                $file = Input::file('file');

                $allowed_extensions = ["jpeg", "png", "jpg"];


                //check whether file extension is valid
                if (!in_array($file->guessClientExtension(), $allowed_extensions)) {
                    return $this->massage_error;
                }

                $file = Input::file('file');

                $allowed_extensions = ["jpeg", "png", "jpg"];
                $extension = $file->getClientOriginalExtension(); // getting image extension
                $fileName = date("Ymdsmd") . $file->getClientOriginalName();

                //check whether file extension is valid
                if (!in_array($extension, $allowed_extensions)) {
                    return $this->massage_error;
                }
                $destinationPath = 'uploads\\';


                $user = User::find($input['id']);


                if ($user) {

                    // uploading file to given path

                    if ($file->move($destinationPath, $fileName)) {
                        $max_with = 500;
                        $max_height = 300;
                        Image::make(public_path($destinationPath . $fileName))->resize($max_with, $max_height)->save($destinationPath . 'thumbnail\\' . $fileName);
                        Image::make(public_path($destinationPath . $fileName))->resize($max_with * 2, $max_height * 2)->save($destinationPath . 'big\\' . $fileName);
                    }

                    $visPlek = new VisPlek;
                    $visPlek->lat = $input['lat'];
                    $visPlek->lng = $input['lng'];
                    $visPlek->titel = $input['naam'];
                    $visPlek->image = $fileName;
                    $visPlek->watertype = $input['watertype'];
                    $visPlek->viswater = $input['viswater'];
                    $visPlek->reglementen = $input['reglementen'];
                    $visPlek->toilet = $input['toilet'];
                    $visPlek->betaalwater = $input['betaalwater'];
                    $visPlek->prive = $input['prive'];
                    $visPlek->vissoorten = $input['vissoorten'];
                    $visPlek->text = $input['text'];
                    $visPlek->user_id = $user->id;
                    $visPlek->save();
                    return $this->massage_success;
                }
            }
        }


        if ($input['type'] == "trainer") {
            $validator = Validator::make($input, [
                'id' => 'required',
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
            if ($validator->fails()) {
                return $validator->messages();
            }
            if (Input::hasFile('file')) {

                $file = Input::file('file');

                $allowed_extensions = ["jpeg", "png", "jpg"];


                //check whether file extension is valid
                if (!in_array($file->guessClientExtension(), $allowed_extensions)) {
                    return $this->massage_error;
                }

                $file = Input::file('file');

                $allowed_extensions = ["jpeg", "png", "jpg"];
                $extension = $file->getClientOriginalExtension(); // getting image extension
                $fileName = date("Ymdsmd") . $file->getClientOriginalName();

                //check whether file extension is valid
                if (!in_array($extension, $allowed_extensions)) {
                    return $this->massage_error;
                }
                $destinationPath = 'uploads\\';


                $user = User::find($input['id']);

                if ($user) {

                    // uploading file to given path

                    if ($file->move($destinationPath, $fileName)) {
                        $max_with = 500;
                        $max_height = 300;
                        Image::make(public_path($destinationPath . $fileName))->resize($max_with, $max_height)->save($destinationPath . 'thumbnail\\' . $fileName);
                        Image::make(public_path($destinationPath . $fileName))->resize($max_with * 2, $max_height * 2)->save($destinationPath . 'big\\' . $fileName);

//                    Image::make(sprintf($destinationPath, 'small_' . $file->getClientOriginalName()))->resize(500, 300)->save();
//                    Image::make(sprintf($destinationPath, 'big_' . $file->getClientOriginalName()))->resize(1200, 500)->save();

                    }
                    $user->lat = $input['lat'];
                    $user->lng = $input['lng'];
                    $user->name = $input['naam'];
                    $user->titel = $input['naam'];
                    $user->image = $fileName;
                    $user->vraagprijs = $input['kostprijs'];
                    $user->geslacht = $input['geslacht'];
                    $user->leeftijd = $input['leeftijd'];
                    $user->ervaring = $input['ervaring'];
                    $user->telefonnummer = $input['telefonnummer'];
                    $user->text = $input['text'];
                    $user->save();
                    return $this->massage_success;
                }
            }


        }

//add wedstrijd
        if ($input['type'] == "wedstrijd") {
            $category = \Config::get('constant.ConstantContestCategory');
            $hengel = \Config::get('constant.ConstantContestHengel');
            $visserij = \Config::get('constant.ConstantContestVisserij');

            $validator = Validator::make($input, [
                'titel' => 'required|max:151',
                'text' => 'required|max:1000',
                'lat' => 'required|numeric',
                'lng' => 'required|numeric',
                'prijzen' => 'max:151',
                'category' => 'required|exists:categories',
                'hengel' => 'required|exists:hengels',
                'visserij' => 'required|exists:visserijs',
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

                $file = Input::file('file');

                $allowed_extensions = ["jpeg", "png", "jpg"];


                //check whether file extension is valid
                if (!in_array($file->guessClientExtension(), $allowed_extensions)) {
                    return $this->massage_error;
                }

                $file = Input::file('file');

                $allowed_extensions = ["jpeg", "png", "jpg"];
                $extension = $file->getClientOriginalExtension(); // getting image extension
                $fileName = date("Y-m-d") . $file->getClientOriginalName();

                //check whether file extension is valid
                if (!in_array($extension, $allowed_extensions)) {
                    return $this->massage_error;
                }
                $destinationPath = 'uploads\\';


                $user = User::find($input['id']);


                $user = User::find($input['id']);
                if ($user) {

                    // uploading file to given path

                    if ($file->move($destinationPath, $fileName)) {
                        $max_with = 500;
                        $max_height = 300;
                        Image::make(public_path($destinationPath . $fileName))->resize($max_with, $max_height)->save($destinationPath . 'thumbnail\\' . $fileName);
                        Image::make(public_path($destinationPath . $fileName))->resize($max_with * 2, $max_height * 2)->save($destinationPath . 'big\\' . $fileName);

//                    Image::make(sprintf($destinationPath, 'small_' . $file->getClientOriginalName()))->resize(500, 300)->save();
//                    Image::make(sprintf($destinationPath, 'big_' . $file->getClientOriginalName()))->resize(1200, 500)->save();

                    }
                    $wedstrijd = new Wedstrijd;
                    $wedstrijd->lat = $input['lat'];
                    $wedstrijd->lng = $input['lng'];
                    $wedstrijd->titel = $input['titel'];
                    $wedstrijd->image = $fileName;
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
        }
        return $this->massage_error;

    }
}
