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
use App\Http\Controllers\FileUploadController;
use Illuminate\Support\Facades\Config;


class AddContentController extends Controller
{
    protected $massage_success = "success";
    protected $massage_error = 'error';
    protected $fileUpload;
    protected $status;
    

    public function __construct()
    {
        $this->status = Config::get('constant.Status');

        $this->fileUpload = new FileUploadController();

//        $this->middleware('CheckLoginAddContent');
    }

    public function add(Request $request)
    {
        $input = json_decode($request->input, true);
        if ($input['type'] == "plaats") {
            $user = User::find($input['id']);
            if ($user) {
                $validator = Validator::make($input, [
                    'id' => 'required',
                    'naam_visplek' => 'required|max:51',
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
                    'adres'=>'required'
                ]);
                if (!$validator->fails()) {
                    $save = false;

                    if ($input['aanpasen'] >0) {
                        $visPlek = VisPlek::find($input['aanpasen']);
                        if ($visPlek->user_id == $user->id) {
                            if (Input::hasFile('file')) {
                                $file = Input::file('file');
                                $this->fileUpload->fileextExtensionValidation($file);
                                $fileName = $this->fileUpload->fileUpload($file);
                            } else {
                                $fileName = $visPlek->image;
                            }
                            $visPlek->active=$this->status['aangepast'];
                            $save = true;
                        }
                    } else {
                        if (Input::hasFile('file')) {
                            $file = Input::file('file');
                            $this->fileUpload->fileextExtensionValidation($file);
                            $fileName = $this->fileUpload->fileUpload($file);
                            $visPlek = new VisPlek;
                            $save = true;
                            $visPlek->active=$this->status['afwachting'];
                        }
                    }
                    if ($save) {
                        $visPlek->lat = $input['lat'];
                        $visPlek->lng = $input['lng'];
                        $visPlek->titel = $input['naam_visplek'];
                        $visPlek->image = $fileName;
                        $visPlek->watertype = $input['watertype'];
                        $visPlek->viswater = $input['viswater'];
                        $visPlek->reglementen = $input['reglementen'];
                        $visPlek->vergunigen= $input['vergunigen'];
                        $visPlek->toilet = $input['toilet'];
                        $visPlek->betaalwater = $input['betaalwater'];
                        $visPlek->prive = $input['prive'];
                        $visPlek->vissoorten = $input['vissoorten'];
                        $visPlek->text = $input['text'];
                        $visPlek->user_id = $user->id;
                        $visPlek->nummer = $input['adres']['nummer'];
                        $visPlek->straat = $input['adres']['straat'];
                        $visPlek->provincie = $input['adres']['provincie'];
                        $visPlek->geweest = $input['adres']['gewest'];
                        $visPlek->postCode = $input['adres']['postCode'];
                        $visPlek->stad = $input['adres']['stad'];
                        $visPlek->land = $input['adres']['land'];
                        $visPlek->save();
                        return $this->massage_success;
                    }
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
                'adres'=>'required'

            ]);
            if ($validator->fails()) {
                return $validator->messages();
            }

            if (Input::hasFile('file')) {
                $file = Input::file('file');
                $user = User::find($input['id']);
                if ($user && $this->fileUpload->fileextExtensionValidation($file)) {
                    $fileName = $this->fileUpload->fileUpload($file);
                    $user->active= $this->status['afwachting'];
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
                    $user->nummer = $input['adres']['nummer'];
                    $user->straat = $input['adres']['straat'];
                    $user->provincie = $input['adres']['provincie'];
                    $user->geweest = $input['adres']['gewest'];
                    $user->postCode = $input['adres']['postCode'];
                    $user->stad = $input['adres']['stad'];
                    $user->land = $input['adres']['land'];
                    $user->save();
                    return $this->massage_success;
                }
            }
        }

        if ($input['type'] == "wedstrijd") {
            $user = User::find($input['id']);
            if ($user) {
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
                    'adres'=>'required'

                ]);

                if (!$validator->fails()) {
                    $save = false;

                    if ($input['aanpasen']) {
                        $wedstrijd = Wedstrijd::find($input['aanpasen']);
                        if ($wedstrijd->user_id == $user->id) {
                            if (Input::hasFile('file')) {
                                $file = Input::file('file');
                                $this->fileUpload->fileextExtensionValidation($file);
                                $fileName = $this->fileUpload->fileUpload($file);
                            } else {
                                $fileName = $wedstrijd->image;
                            }
                            $wedstrijd->active=$this->status['aangepast'];
                            $save = true;
                        }
                    } else {
                        if (Input::hasFile('file')) {
                            $file = Input::file('file');
                            $this->fileUpload->fileextExtensionValidation($file);
                            $fileName = $this->fileUpload->fileUpload($file);
                            $wedstrijd = new Wedstrijd;
                            $wedstrijd->active = $this->status['afwachting'];
                            $save = true;
                        }
                    }

                    if ($save) {
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
                        $wedstrijd->nummer = $input['adres']['nummer'];
                        $wedstrijd->straat = $input['adres']['straat'];
                        $wedstrijd->provincie = $input['adres']['provincie'];
                        $wedstrijd->geweest = $input['adres']['gewest'];
                        $wedstrijd->postCode = $input['adres']['postCode'];
                        $wedstrijd->stad = $input['adres']['stad'];
                        $wedstrijd->land = $input['adres']['land'];


                        $wedstrijd->user_id = $user->id;
                        $wedstrijd->save();
                        return $this->massage_success;
                    }
                }
            }
        }

        return $this->massage_error;

    }
}
