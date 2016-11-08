<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

// Route::get('/', function () {
//   return View('layout.index');
// });

// Route::get('/githap', function () {
//  return View('layout.githap');
// });

Route::get('/', function () {
  return "<h1>Hei.</h1>";
});

Route::group(['prefix' => 'githap'], function () {
  Route::get('/{url}', function ($url) {
    return View('layout.githap');
  });

  Route::get('{url}/{username}', function ($url, $username) {
    return View('layout.githap');
  });
});
