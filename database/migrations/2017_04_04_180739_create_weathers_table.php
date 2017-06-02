<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWeathersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weathers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('low');
            $table->integer('high');
            $table->integer('temp');
            $table->string('text');
            $table->time('sunrise');
            $table->time('sunset');
            $table->integer('humidity');
            $table->decimal('pressure',7,2);
            $table->integer('rising');
            $table->decimal('visibility',4,2);
            $table->integer('chill');
            $table->decimal('speed', 5, 3);
            $table->integer('direction');
            $table->integer('city_id')->unsigned();
            $table->foreign('city_id')->references('id')->on('cities');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('weathers');
    }
}
