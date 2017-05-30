<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVisSoortsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vis_soorts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('aantal');
            $table->string('soort');
            $table->date('datum');
            $table->integer('vis_dag_id')->unsigned();
            $table->foreign('vis_dag_id')->references('id')->on('vis_dags');
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
        Schema::dropIfExists('vis_soorts');
    }
}
