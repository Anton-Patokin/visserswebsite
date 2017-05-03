<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class WaterType extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('water_types')->delete();
        $water_types = [ 'Rievier','Kanaal','Meer','Strand'];
        foreach ($water_types as $key => $type) {
            DB::table('water_types')->insert([
                'waterType' => $type,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
