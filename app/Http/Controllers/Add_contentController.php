<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Add_contentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('add_content.add');
    }
}
