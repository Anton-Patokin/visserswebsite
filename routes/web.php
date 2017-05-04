<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index');
Route::get('/toevoegen','Add_contentController@index');
Route::get('/toevoegen/nieuws','Add_contentController@nieuws');
Route::post('/toevoegen/nieuws','Add_contentController@toaveogenNieuws');

