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
            $table->integer('low');
            $table->integer('high');
            $table->integer('temp')->nullable();
            $table->time('sunrise')->nullable();
            $table->time('sunset')->nullable();
            $table->integer('humidity')->nullable();
            $table->decimal('pressure',7,2)->nullable();
            $table->integer('rising')->nullable();
            $table->decimal('visibility',4,2)->nullable();
            $table->integer('chill')->nullable();
            $table->decimal('speed', 5, 3)->nullable();
            $table->integer('direction')->nullable();
            $table->integer('visGevangenSucces')->nullable();
            $table->string('beordeling')->nullable();
            $table->decimal('lat',12,8)->nullable();
            $table->decimal('lng',12,8)->nullable();
            $table->date('datum');
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
