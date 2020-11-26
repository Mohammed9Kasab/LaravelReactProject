<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){

        $categories =Category::all();
        return $categories;
    }
    public function store(Request $request){
        $category=new Category();
        $category->name=$request->category_name;
        $category->save();
    }
}
