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
            $table->string('titel');
            $table->string('type')->default('plaats');
            $table->string('image');
            $table->decimal('lat',12,8);
            $table->decimal('lng',12,8);
            $table->string('watertype');
            $table->text('viswater');
            $table->text('reglementen')->nullable();
            $table->boolean('nachvissen')->default(0);
            $table->boolean('toilet')->default(0);
            $table->boolean('betaalwater')->default(0);
            $table->boolean('prive')->default(0);
            $table->string('vissoorten')->nullable();
            $table->string('vergunigen')->nullable();
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('active')->nullable();
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
