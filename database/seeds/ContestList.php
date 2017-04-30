<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class ContestList extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('visserijs')->delete();
        DB::table('categories')->delete();
        DB::table('hengels')->delete();

        $visserijs = ['Op tijd', 'Op gewicht'];
        $categories = [ 'Vaste hengel','Werphengel','dobber','Hengelkeuze vrij'];
        $hengels = [ 'Vaste hengel','Werphengel','dobber','Hengelkeuze vrij'];

        foreach ($visserijs as $key => $type) {
            DB::table('visserijs')->insert([
                'visserij' => $type,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
        foreach ($categories as $key => $type) {
            DB::table('categories')->insert([
                'category' => $type,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
        foreach ($hengels as $key => $type) {
            DB::table('hengels')->insert([
                'hengel' => $type,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
