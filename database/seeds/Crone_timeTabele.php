<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class Crone_timeTabele extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('crone_times')->delete();

        $times = ['00:00:00',
            '01:00:00',
            '02:00:00',
            '03:00:00',
            '04:00:00',
            '05:00:00',
            '06:00:00',
            '07:00:00',
            '08:00:00',
            '09:00:00',
            '10:00:00',
            '11:00:00',
            '12:00:00',
            '13:00:00',
            '14:00:00',
            '15:00:00',
            '16:00:00',
            '17:00:00',
            '18:00:00',
            '19:00:00',
            '20:00:00',
            '21:00:00',
            '22:00:00',
            '23:00:00',
        ];
        foreach ($times as $key => $time) {
            DB::table('crone_times')->insert([
                'time' => $time,
                'running_at' => Carbon::now()->format('Y-m-d').' '.$time,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
