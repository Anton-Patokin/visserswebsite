<?php

namespace App\Http\Controllers;

use App\Tutorial;
use App\VisPlek;
use Illuminate\Http\Request;
use App\City;
use App\Wind;
use App\Atmosphere;
use App\Astronomy;
use App\Weather;
use App\Condition_code;
use App\User;
use App\NieuwsArtikel;
//use App\VisPlek;
use App\Wedstrijd;
//use App\Tutorial;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */


    public function index($datum = null)
    {
        $recentPost = [];
        $resentPostToSend = [];
//        array_push($recentPost, Wedstrijd::orderBy('id', 'desc')->where('active', 2)->take(5)->get());


        $wedstrijden = Wedstrijd::orderBy('id', 'desc')->where('active', 2);
        $nieuwsartikel = NieuwsArtikel::orderBy('id', 'desc')->where('active', 2);
        $tutorial = Tutorial::orderBy('id', 'desc')->where('active', 2);
        $visplek = VisPlek::orderBy('id', 'desc')->where('active', 2);
        $user = User::orderBy('id', 'desc')->where('active', 2);


        array_push($recentPost, $wedstrijden->take(5)->get());
        array_push($recentPost, $tutorial->take(5)->get());
        array_push($recentPost, $visplek->take(5)->get());

        foreach ($recentPost as $key => $content) {
            foreach ($content as $count => $value) {
                array_push($resentPostToSend, $value);
            }
        }
        $recentPost = [];
        $allposts = [];
        $pagination=$wedstrijden->paginate(5);
        array_push($recentPost, $wedstrijden->paginate(5));
        array_push($recentPost, $nieuwsartikel->paginate(5));
        array_push($recentPost, $tutorial->paginate(5));
        array_push($recentPost, $visplek->paginate(5));
        array_push($recentPost, $user->paginate(5));



        foreach ($recentPost as $key => $content) {
            foreach ($content as $count => $value) {
                array_push($allposts, $value);
            }
        }

        shuffle($allposts);
        shuffle($resentPostToSend);

//        return $pagination;
        return view('home', ["recentPost" => $resentPostToSend,'contents'=>$allposts,'pagination'=>$pagination]);
    }


    public function plaatsen($id = null, $titel = null)
    {
        return $this->get_content_from_database('vis_pleks', $id, 'plaats', 'plaatsen');
    }

    public function wedstrijden($id = null, $titel = null)
    {
        return $this->get_content_from_database('wedstrijds', $id, 'wedstrijd', 'wedstrijden');
    }

    public function nieuws($id = null, $titel = null)
    {
        return $this->get_content_from_database('nieuws_artikels', $id, 'nieuws-artikel', 'nieuws-artikelen');
    }

    public function trainer($id = null, $titel = null)
    {
        return $this->get_content_from_database('users', $id, 'trainer', 'trainers');
    }

    public function tutorial($id = null, $titel = null)
    {
        return $this->get_content_from_database('tutorials', $id, 'tutorial', 'tutorials');
    }

    public function contact()
    {
        return view('show/contact');
    }

    public function overOns()
    {
        return view('show/over-ons');
    }

    public function get_content_from_database($tabel, $id = null, $view1, $view2, $view3 = null)
    {
        if ($id) {
            $show = false;
            $value = DB::table($tabel)->find($id);
            //ditai pagina veergeven
            if (Auth::user()->id == $value->user_id) {
                $show = true;
            }
            if ($value->active == "2") {
                $show = true;
            }
            if ($show) {
                return view('show/' . $view1, ['content' => $value]);
            }
        } else {
            //bij het bezoeken van overzicht pagina
            $value = DB::table($tabel)->Where('active', 2)->get();
            if (count($value)) {
                return view('show/' . $view2, ['contents' => $value]);
            }
        }
        return $this->paginaNietGevonden();
    }

    public function paginaNietGevonden()
    {
        return view('show/pagina-niet-gevonden');
    }


    public function calender($maand)
    {
//        $post = Mjblog::whereYear('created_at', '=', $year)
//            ->whereMonth('created_at', '=', $month)
//            ->get();
//        

        $datumString = [];
        date_default_timezone_set('Asia/Dhaka');

// Get prev & next month
        if (isset($maand)) {
            $ym = $maand;
        } else {
            // This month
            $ym = date('Y-m');
        }

// Check format
        $timestamp = strtotime($ym, "-01");
        if ($timestamp === false) {
            $timestamp = time();
        }

// Today
        $today = date('Y-m-j', time());

// For H3 title
        $html_title = date('M - Y', $timestamp);
        $datumString['titel'] = $html_title;
// Create prev & next month link     mktime(hour,minute,second,month,day,year)
        $prev = date('Y-m', mktime(0, 0, 0, date('m', $timestamp) - 1, 1, date('Y', $timestamp)));
        $next = date('Y-m', mktime(0, 0, 0, date('m', $timestamp) + 1, 1, date('Y', $timestamp)));

        $datumString['vorige'] = $prev;
        $datumString['volgende'] = $next;
// Number of days in the month
        $day_count = date('t', $timestamp);

// 0:Sun 1:Mon 2:Tue ...
        $str = date('w', mktime(0, 0, 0, date('m', $timestamp), 1, date('Y', $timestamp)));


// Create Calendar!!
        $weeks = array();
        $week = '';

// Add empty cell
        $week .= str_repeat('<td></td>', $str);

        for ($day = 1; $day <= $day_count; $day++, $str++) {

            $date = $ym . '-' . $day;

            if ($today == $date) {
                $week .= '<td class="today">' . $day;
            } else {
                $week .= '<td>' . $day;
            }
            $week .= '</td>';

            // End of the week OR End of the month
            if ($str % 7 == 6 || $day == $day_count) {

                if ($day == $day_count) {
                    // Add empty cell
                    $week .= str_repeat('<td></td>', 6 - ($str % 7));
                }

                $weeks[] = '<tr>' . $week . '</tr>';

                // Prepare for new week
                $week = '';

            }

        }
        $datumString['weeks'] = $weeks;
        return $datumString;
    }
}
