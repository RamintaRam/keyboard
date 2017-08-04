<?php

namespace App\Models;

use App\Models\CoreModel;
use Illuminate\Database\Eloquent\Model;

class Game extends CoreModel
{
    protected $table = 'game';

    protected $fillable = ['id', 'name', 'score', 'total_time', 'level', 'average_speed'];

    protected $hidden = ['id', 'level', 'updated_at', 'count', 'total_time', 'average_speed', 'deleted_at'];
}
