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

Route::get('/', 'HomeController@welcome');

Auth::routes();

Route::get('/home/{info?}', 'HomeController@index');
Route::get('/plaats/{id?}/{titel?}/{amp?}', 'HomeController@plaatsen');
Route::get('/tutorial/{id?}/{titel?}/{amp?}', 'HomeController@tutorial');
Route::get('/wedstrijden/{datum?}', 'HomeController@wedstrijden');
Route::get('/wedstrijd/{id?}/{titel?}/{amp?}', 'HomeController@wedstrijd');
Route::get('/gids/{id?}/{titel?}/{amp?}', 'HomeController@trainer');
Route::get('/over-ons', 'HomeController@overOns');
Route::get('/contact', 'HomeController@contact');
Route::get('/nieuws/{id?}/{titel?}/{amp?}', 'HomeController@nieuws');
Route::get('/nieuwsArtikel/{id?}/{titel?}/{amp?}', 'HomeController@nieuws');
Route::get('/tutorials/{category}','HomeController@tutorials_by_category');

Route::get('/dashboard', 'DashboardController@index');
Route::get('/dashboard/toegevoegd-inhoud', 'DashboardController@toegevoegd_inhoud');
Route::get('/dashboard/nieuw-toegevoegd-inhoud', 'DashboardController@nieuw_toegevoegd_inhoud');
Route::get('/dashboard/alle-toegevoegd-inhoud', 'DashboardController@alle_toegevoegd_inhoud');
Route::get('/dashboard/alle-verwijderde', 'DashboardController@alle_verwijderde');

Route::get('/verwijderen/{tabel}/{id}', 'DashboardController@verwijderen');
Route::get('/verwijderen/activeren/{tabel}/{id}', 'DashboardController@verwijderen_deactiveren');
Route::get('/aanvaarden/{tabel}/{id}/', 'DashboardController@aanvaarden');
Route::get('/aanvarden_deactiveren/{tabel}/{id}/', 'DashboardController@aanvarden_deactiveren');
Route::get('/dashboard/gebruikers', 'DashboardController@gebruikers');
Route::get('/admin_deactivate/{action}/{id}', 'DashboardController@admin');
Route::get('/faq/{amp?}','FaqController@index');
Route::get('/aanpasen/{type}/{id}', 'AanpasenController@dashboard');
Route::get('/verwijderFaq/{id}','FaqController@verwijderFaq');
Route::get('/editFaq/{id}','FaqController@toevoegenFaqView');

Route::get('/toevoegen', 'Add_contentController@index');
Route::get('/toevoegen/nieuws', 'Add_contentController@nieuws');
Route::get('/toevoegen/tutorial', 'Add_contentController@tutorial');
Route::post('/toevoegen/nieuws', 'Add_contentController@toevoegenNieuws');
Route::post('/toevoegen/tutorial', 'Add_contentController@toevoegenTutorial');
Route::post('/toevoegen/profiel', 'Add_contentController@toevoegenProfiel');
Route::post('/toevoegen/faq', 'FaqController@toevoegenFaq');
Route::post('/update/faq/{id}','FaqController@updateFaq');
Route::get('/toevoegen/faq','FaqController@toevoegenFaqView');

Route::post('/contact','EmailController@contact');

Route::post('/toevoegen/subscribe', 'EmailController@addSubscriber');


Route::get('/gebruiker', 'GebruikerController@index');



Route::get('/test/{string?}','TestController@index');

Route::get('/googledb7f674d6eaa91e5.html',function(){
    return view('googleSearchConsole');
});