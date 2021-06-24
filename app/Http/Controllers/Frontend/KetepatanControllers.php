<?php

namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Controller as Controller;
use App\Models\Server;
use Illuminate\Http\Request;

class KetepatanControllers extends Controller
{
    public function teks()
    {
        return view('Pages.Ketepatan.teks');
    }

    public function gambar()
    {
        return view('Pages.Ketepatan.gambar');
    }

    public function video()
    {
        return view('Pages.Ketepatan.video');
    }
}
