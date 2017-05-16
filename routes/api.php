<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/add/content','AddContentController@add');
Route::get('/add/content',function(){
    return 'okey';
});

Route::get('/get/markers/{type}','ApiGoogleMaps@markers');
Route::get('/get/marker/{id}','ApiGoogleMaps@marker');
Route::post('/zoeken/googleMaps','ApiZoekenController@googleMapsZoeken');