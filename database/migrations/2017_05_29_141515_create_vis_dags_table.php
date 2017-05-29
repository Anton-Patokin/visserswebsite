<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVisDagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vis_dags', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('temp');
            $table->time('sunrise');
            $table->time('sunset');
            $table->integer('humidity');
            $table->decimal('pressure',7,2);
            $table->integer('rising');
            $table->decimal('visibility',4,2);
            $table->integer('chill');
            $table->decimal('speed', 5, 3);
            $table->integer('direction');
            $table->integer('visGevangenSucces');
            $table->string('beordeling');
            $table->decimal('lat',12,8)->nullable();
            $table->decimal('lng',12,8)->nullable();
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('vis_dags');
    }
}
