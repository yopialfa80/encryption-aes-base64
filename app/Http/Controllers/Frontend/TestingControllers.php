<?php

namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Controller as Controller;

class TestingControllers extends Controller
{
    public function performance()
    {
        return view('Pages.Testing.performance');
    }
}
