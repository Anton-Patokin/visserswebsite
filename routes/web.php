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

Route::get('/home/{titel?}', 'HomeController@index');
Route::get('/plaats/{id?}/{titel?}','HomeController@plaatsen');
Route::get('/tutorial/{titel?}','HomeController@tutorial');
Route::get('/wedstrijden/{titel?}','HomeController@wedstrijden');
Route::get('/trainer/{titel?}','HomeController@trainer');
Route::get('/over-ons','HomeController@overOns');
Route::get('/contact','HomeController@contact');
Route::get('/nieuws/{titel?}','HomeController@nieuws');


Route::get('/dashboard','DashboardController@index');
Route::get('/dashboard/toegevoegd-inhoud','DashboardController@toegevoegd_inhoud');
Route::get('/dashboard/nieuw-toegevoegd-inhoud','DashboardController@nieuw_toegevoegd_inhoud');
Route::get('/dashboard/alle-toegevoegd-inhoud','DashboardController@alle_toegevoegd_inhoud');
Route::get('/dashboard/alle-verwijderde','DashboardController@alle_verwijderde');
Route::get('/verwijderen/{tabel}/{id}','DashboardController@verwijderen');
Route::get('/verwijderen/activeren/{tabel}/{id}','DashboardController@verwijderen_deactiveren');
Route::get('/aanvaarden/{tabel}/{id}/','DashboardController@aanvaarden');
Route::get('/dashboard/gebruikers','DashboardController@gebruikers');


Route::get('/aanpasen/{type}/{id}','AanpasenController@dashboard');



Route::get('/toevoegen','Add_contentController@index');
Route::get('/toevoegen/nieuws','Add_contentController@nieuws');
Route::get('/toevoegen/tutorial','Add_contentController@tutorial');
Route::post('/toevoegen/nieuws','Add_contentController@toaveogenNieuws');
Route::post('/toevoegen/tutorial','Add_contentController@toevoegenTutorial');


Route::post('/toevoegen/subscribe','EmailController@addSubscriber');


