<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class TutorialCategory extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tutorial_categories')->delete();
        $navBar = ['Aas','Vistuig','Doe-het-zelf','Witvissen','Vliegvissen','Karpervissen','Roofvissen','Zeevissen','Bootvissen','Knopen','Andere'];
        foreach ($navBar as $key => $value) {
            DB::table('tutorial_categories')->insert([
                'category' => $value,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
