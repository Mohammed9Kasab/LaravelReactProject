<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ExpenseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/login', [AccessTokenController::class, 'issueToken'])
    ->middleware(['api_login', 'throttle']);
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/expenses', [ExpenseController::class, 'index']);
});
Route::get('/expenses/AddExpenses', [CategoryController::class, 'index']);
Route::post('/category/store', [CategoryController::class, 'store']);
Route::post('/expense/store', [ExpenseController::class, 'store']);
Route::delete('/expense/delete/{id}', [ExpenseController::class, 'destroy']);
Route::get('/expense/edit/{id}', [ExpenseController::class, 'edit']);
Route::put('/expense/update/{id}', [ExpenseController::class, 'update']);
Route::get('/expenses/chart', [ExpenseController::class, 'showChart']);
