<?php

namespace App\Http\Controllers;

use App\Tutorial;
use App\VisPlek;
use Carbon\Carbon;
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
        $pagination = $wedstrijden->paginate(5);
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
        return view('home', ["recentPost" => $resentPostToSend, 'contents' => $allposts, 'pagination' => $pagination]);
    }


    public function plaatsen($id = null, $titel = null, $amp = null)
    {
        if ($amp == 'amp') {
            $value = VisPlek::with('user')->where('id', $id)->get()->first();
            $relevente =$visplaats = VisPlek::where('active', '2')->search($titel, null, true,true)->take(15)->get();;

            return view('show/' . 'plaats' . '-amp', ['content' => $value,'relevente'=>$relevente]);
        }
        return $this->get_content_from_database('vis_pleks', $id, 'plaats', 'plaatsen');
    }

    public function wedstrijden($datum = null)
    {
        $maand = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
            "Juli", "Augustus", "September", "Oktober", "November", "December"
        ];
        $getDate = Carbon::now();
        if ($datum) {
            $getDate = Carbon::parse($datum);
        }
        $currentMoth = $getDate->month;
        $currentYear = $getDate->year;

        $nextdatum = Carbon::parse($getDate)->addMonth();
        $prevdatum = Carbon::parse($getDate)->subMonths(1);

        $prevMontText['maand'] = $maand[$prevdatum->month - 1];
        $currentMontText['maand'] = $maand[$getDate->month - 1];
        $nexMontText['maand'] = $maand[$nextdatum->month - 1];


        $nexMontText['jaar'] = $nextdatum->year;
        $currentMontText['jaar'] = $getDate->year;
        $prevMontText['jaar'] = $prevdatum->year;


        $wedstrijden = Wedstrijd::whereMonth('datum', '=', $currentMoth)->whereYear('datum', '=', $currentYear)
            ->where('active', 2)->orderBy('datum', 'desc')
            ->get();
        return view('show/wedstrijden', ['contents' => $wedstrijden, 'nextdatum' => $nextdatum, 'prevdatum' => $prevdatum, 'nexMontText' => $nexMontText, 'prevMontText' => $prevMontText, 'currentMontText' => $currentMontText]);
    }

    public function wedstrijd($id = null, $titel = null,$amp=null)
    {

        if ($amp == 'amp') {
            $value = Wedstrijd::with('user')->where('id', $id)->get()->first();
            if($value->active==2){
                $relevente  = Wedstrijd::where('active', '2')->search($value->category, null, true,true)->take(15)->get();;
                return view('show/' . 'wedstrijd' . '-amp', ['content' => $value,'relevente'=>$relevente]);
            }else{
                return $this->paginaNietGevonden();
            }

        }
        return $this->get_content_from_database('wedstrijds', $id, 'wedstrijd', 'wedstrijden');
    }

    public function nieuws($id = null, $titel = null, $amp = null)
    {
        if ($amp == 'amp') {
            $value = DB::table('nieuws_artikels')->find($id);
            return view('show/' . 'nieuws-artikel' . '-amp', ['content' => $value]);
        }
        return $this->get_content_from_database('nieuws_artikels', $id, 'nieuws-artikel', 'nieuws-artikelen');
    }

    public function trainer($id = null, $titel = null,$amp=null)
    {
        if ($amp == 'amp') {
            $value = DB::table('users')->find($id);
            if($value->active==2){
                $relevente = User::where('active', '2')->search($value->provincie, null, true,true)->take(15)->get();
                return view('show/' . 'trainer' . '-amp', ['content' => $value,'relevente'=>$relevente]);
            }else{
                return $this->paginaNietGevonden();
            }
        }
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

    public function get_content_from_database($tabel, $id = null, $view1, $view2)
    {
        if ($id) {
            $show = false;
            $value = DB::table($tabel)->find($id);

            //ditai pagina veergeven
            if ($tabel =='users'||Auth::user() && Auth::user()->id == $value->user_id) {
                $show = true;
            }
            if ($value->active == "2") {
                $show = true;
            }
            if ($show) {
                if ($tabel == 'vis_pleks') {
                    $value = VisPlek::with('user')->where('id', $id)->get()->first();
                    $relevente =$visplaats = VisPlek::where('active', '2')->search($value->vissoorten, null, true,true)->take(15)->get();;
                    return view('show/' . $view1, ['content' => $value,'relevente'=>$relevente]);
                }
                if ($tabel == 'wedstrijds') {
                    $value = Wedstrijd::with('user')->where('id', $id)->get()->first();
                    $relevente =$visplaats = Wedstrijd::where('active', '2')->search($value->category, null, true,true)->take(15)->get();;
                    return view('show/' . $view1, ['content' => $value,'relevente'=>$relevente]);
                }
                if ($tabel == 'users') {
                    $relevente = User::where('active', '2')->search($value->provincie, null, true,true)->take(15)->get();;
                    return view('show/' . $view1, ['content' => $value,'relevente'=>$relevente]);
                }
                return view('show/' . $view1, ['content' => $value]);
            }
        } else {

            //bij het bezoeken van overzicht pagina
            $value = DB::table($tabel)->Where('active', 2)->orderBy('updated_at', 'desc');

            $value = $value->get();
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
