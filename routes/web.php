<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Frontend as FrontendPath;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Pages.dashboard');
});

Route::get('/dashboard', function () {
    return view('Pages.dashboard');
});

// Route::get('/', function () {
//     return view('Pages.test');
// });

Route::prefix('ketepatan')->group(function () {
    Route::get('/teks-encrypt', [FrontendPath\KetepatanControllers::class, 'teks']);
    Route::get('/gambar-encrypt', [FrontendPath\KetepatanControllers::class, 'gambar']);
    Route::get('/video-encrypt', [FrontendPath\KetepatanControllers::class, 'video']);
});

Route::prefix('kecepatan')->group(function () {
    Route::get('/teks-speed', [FrontendPath\KecepatanControllers::class, 'teks']);
    Route::get('/gambar-speed', [FrontendPath\KecepatanControllers::class, 'gambar']);
    Route::get('/video-speed', [FrontendPath\KecepatanControllers::class, 'video']);
});

Route::prefix('keamanan')->group(function () {
    Route::get('/panjang-chipperteks', [FrontendPath\KeamananControllers::class, 'panjang_chipperteks']);
    Route::get('/infinity-loop', [FrontendPath\KeamananControllers::class, 'infinity_loop']);
    Route::get('/panjang-kunci', [FrontendPath\KeamananControllers::class, 'panjang_kunci']);
    Route::get('/web-generator', [FrontendPath\KeamananControllers::class, 'web_generator']);
    Route::get('/brute-force', [FrontendPath\KeamananControllers::class, 'brute_force']);
});

// Route::prefix('testing')->group(function () {
//     Route::get('/performance', [FrontendPath\TestingControllers::class, 'performance']);
//     Route::get('/gambar', [FrontendPath\SecurityControllers::class, 'gambar']);
//     Route::get('/video', [FrontendPath\SecurityControllers::class, 'video']);
// });