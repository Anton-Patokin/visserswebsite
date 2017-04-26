<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWedstrijdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wedstrijds', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('lat',12,8);
            $table->decimal('lng',12,8);
            $table->string('titel');
            $table->string('image');
            $table->string('prijzen');
            $table->string('category');
            $table->string('hengel');
            $table->string('visserij');
            $table->decimal('kostprijs',10,2);
            $table->string('duur');
            $table->string('water');
            $table->date('datum');
            $table->integer('dag');
            $table->string('maand');
            $table->string('loting');
            $table->text('text');
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
        Schema::dropIfExists('wedstrijds');
    }
}
