<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVisPleksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vis_pleks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('naam');
            $table->string('image');
            $table->string('watertype');
            $table->text('Viswater');
            $table->text('Reglementen')->nullable();
            $table->boolean('nachvissen')->default(0);
            $table->boolean('toilet')->default(0);
            $table->boolean('betaalwater')->default(0);
            $table->boolean('prive')->default(0);
            $table->string('vissoorte')->nullable();
            $table->text('text')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('vis_pleks');
    }
}
