<?php
namespace App\helpers;
use Illuminate\Support\Facades\Route;

class Menu
{

    public static function isActiveRoute($route, $output = 'active')
    {
        if (Route::getFacadeRoot()->current()->uri() == $route) {
            return $output;
        }
    }
}