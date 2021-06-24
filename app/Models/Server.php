<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    protected $table = 'server';

    protected $primaryKey = 'id';
	
	protected $guarded = [];

}
