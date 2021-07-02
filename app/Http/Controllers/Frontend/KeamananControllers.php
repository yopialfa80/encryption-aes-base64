<?php

namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Controller as Controller;

class KeamananControllers extends Controller
{
    public function web_generator()
    {
        return view('Pages.Keamanan.web_generator');
    }

    public function brute_force()
    {
        return view('Pages.Keamanan.brute_force');
    }

    public function panjang_chipperteks()
    {
        return view('Pages.Keamanan.panjang_chipperteks');
    }
    public function panjang_kunci()
    {
        return view('Pages.Keamanan.panjang_kunci');
    }

    public function infinity_loop()
    {
        return view('Pages.Keamanan.infinity_loop');
    }
}
