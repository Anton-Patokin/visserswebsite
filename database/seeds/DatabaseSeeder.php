<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(ContestList::class);
        $this->call(Crone_timeTabele::class);
        $this->call(CitiesTabele::class);
        $this->call(WaterType::class);
        $this->call(Navbar::class);
    }
}
