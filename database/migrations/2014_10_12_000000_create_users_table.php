<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('image')->nullable();
            $table->integer('leeftijd')->nullable();
            $table->string('geslacht')->nullable();
            $table->string('ervaring')->nullable();
            $table->string('telefonnummer')->nullable();
            $table->integer('vraagprijs')->nullable();
            $table->integer('active')->default(0);
            $table->integer('lat')->nullable();
            $table->integer('lng')->nullable();
            $table->text('text')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
