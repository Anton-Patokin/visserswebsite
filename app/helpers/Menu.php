<?php
namespace App\helpers;



class Menu
{
    public static function isActiveRoute($route, $output = 'active')
    {
        if (Route::currentRouteName() == $route) {
            return $output;
        }
    }
}