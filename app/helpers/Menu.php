<?php
namespace App\helpers;
use Illuminate\Support\Facades\Route;

class Menu
{

    public static function isActiveRoute($route, $output = 'active')
    {
        $route_array= explode('/',Route::getFacadeRoot()->current()->uri());

        if ($route_array[0] == $route) {
            return $output;
        }
    }

    public static function isActiveList($route, $output = 'active')
    {
        if (Route::getFacadeRoot()->current()->uri() == $route) {
            return $output;
        }
    }
}