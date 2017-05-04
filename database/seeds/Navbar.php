<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class Navbar extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('nav_bars')->delete();
        $navBar = ['Vis Plaatsen','Wedsrijden','Trainers','Nieuws','lessen','over ons','contact'];
        foreach ($navBar as $key => $naam) {
            DB::table('nav_bars')->insert([
                'category' => 'home',
                'naam'=>$naam,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
        $navBar = ['Wedstrijd','Trainer','Vis plaats','nieuws bericht','Les',];
        foreach ($navBar as $key => $naam) {
            DB::table('nav_bars')->insert([
                'category' => 'add',
                'naam'=>$naam,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
