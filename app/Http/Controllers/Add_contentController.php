<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Visserij;
use App\Category;
use App\Hengel;

class Add_contentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('add_content.add')->with('visserij',Visserij::all(['id','visserij']))->with('category',Category::all(['id','category']))->with('hengel',Hengel::all(['id','hengel']));
    }
}
