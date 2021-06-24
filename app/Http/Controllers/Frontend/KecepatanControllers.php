<?php

namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Controller as Controller;
use App\Models\Server;
use Illuminate\Http\Request;

class KecepatanControllers extends Controller
{
    public function teks()
    {
        return view('Pages.Kecepatan.teks');
    }

    public function gambar()
    {
        return view('Pages.Kecepatan.gambar');
    }

    public function video()
    {
        return view('Pages.Kecepatan.video');
    }
}
