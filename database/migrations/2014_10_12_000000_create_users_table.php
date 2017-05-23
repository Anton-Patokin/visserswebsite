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
            $table->string('titel')->nullable();
            $table->string('type')->default('trainer');
            $table->string('email')->unique();
            $table->string('image')->nullable();
            $table->integer('leeftijd')->nullable();
            $table->string('geslacht')->nullable();
            $table->string('ervaring')->nullable();
            $table->string('telefonnummer')->nullable();
            $table->integer('vraagprijs')->nullable();
            $table->integer('active')->default(0);
            $table->decimal('lat',12,8)->nullable();
            $table->decimal('lng',12,8)->nullable();
            $table->text('text')->nullable();
            $table->text('admin')->nullable();
            $table->string('password');
            $table->string('nummer')->nullable();
            $table->string('straat')->nullable();
            $table->string('provincie')->nullable();
            $table->string('geweest')->nullable();
            $table->string('postCode');
            $table->string('stad')->nullable();
            $table->string('land')->nullable();
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
