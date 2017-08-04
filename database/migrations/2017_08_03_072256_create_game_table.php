<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGameTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('game', function(Blueprint $table)
		{
			$table->string('id', 36)->unique('category_id_UNIQUE');
            $table->integer('count', true);
			$table->string('name');
			$table->integer('score');
			$table->string('total_time', 45)->nullable();
			$table->string('level', 45);
			$table->integer('average_speed')->nullable();
			$table->timestamps();
			$table->softDeletes();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('game');
	}

}
