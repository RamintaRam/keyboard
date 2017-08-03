<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends CoreModel
{
    protected $table = 'vr_menu';

    protected $fillable = ['id', 'name', 'score', 'total_time', 'level', 'average_speed'];

}
