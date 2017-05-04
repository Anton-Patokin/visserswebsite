<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Visserij;
use App\Category;
use App\Hengel;
use App\WaterType;

class Add_contentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('add_content.add')
            ->with('visserij',Visserij::all(['id','visserij']))
            ->with('category',Category::all(['id','category']))
            ->with('waterType',WaterType::all(['waterType']))
            ->with('hengel',Hengel::all(['id','hengel']));
    }

    public function nieuws(){
        return view('add_content.nieuws.nieuws');
    }
    public function toaveogenNieuws(Request $request){
        $this->validate($request,
            ['id' => 'required',
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
        return $request->titel;
    }
}
