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
Route::group([
    'middleware' => ['api', 'cors'],
    'namespace' => $this->namespace,
    'prefix' => 'api',
], function ($router) {

    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/add/content', 'AddContentController@add');
    Route::get('/add/content', function () {
        return 'okey';
    });

    Route::get('/get/markers/{type}', 'ApiGoogleMaps@markers');
    Route::get('/get/marker/{id}', 'ApiGoogleMaps@marker');
    Route::post('/zoeken/googleMaps', 'ApiZoekenController@googleMapsZoeken');
    Route::post('/zoeken/googleMaps/visPlatsen', 'ApiZoekenController@googleMapsZoekenVisPlatsen');
    Route::post('/zoeken/googleMaps/gids', 'ApiZoekenController@googleMapsZoekenGids');

    Route::get('/get/wedstrijden/{year}/{month}', 'ApiCalenderController@index');

    route::post('/save/visVangst', 'VisvangsController@opslaanVanVisVangst');

    Route::post('/get/pieChart', 'ApiAdminMainController@pieChart');
    Route::post('/get/alleVissen', 'ApiAdminMainController@allGavnagenVis');
    Route::post('/get/visWeer', 'ApiAdminMainController@visWeer');

    Route::get('/get/wheater/{location?}', 'ApiWeaterControllr@index');

    Route::post('/zoeken/alles', 'ApiZoekenController@alles');

});