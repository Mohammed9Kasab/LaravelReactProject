<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ExpenseController extends Controller
{
    public function index(){
        $expenses=Expense::where('user_id', Auth::user()->id)->get();
        return $expenses;
    }
    public function store(Request $request){
        $expense=new Expense();
        $expense->description=$request->expense_description;
        $expense->currency=$request->currency;
        $expense->user_id= Auth::user()->id;
        $expense->amount=$request->amount;
        $expense->category_id=$request->category_id;

        $expense->save();
    }
    public function destroy($id){
        $expense=Expense::find($id);
        $expense->delete();
    }
    public function edit($id){
        $expense=Expense::find($id);
        return $expense;
    }
    public function update(Request $request,$id){
        $expense=Expense::find($id);
        $expense->description=$request->expense_description;
        $expense->currency=$request->currency;
        $expense->user_id=auth()->id();
        $expense->amount=$request->amount;
        $expense->category_id=$request->category_id;
        $expense->save();
    }
    public function showChart(){
        $data=DB::table('expenses')
            ->join('categories','expenses.category_id','=','categories.id')
            ->where('expenses.user_id','=',1)
            ->select(
                DB::raw('categories.name as category'),
                DB::raw('sum(expenses.amount)as amounts')
            )
            ->groupBy('category')
            ->get();
        $array[]=['category','amounts'];
        foreach ($data as $key =>$value)
        {
            $array[++$key]=[$value->category,$value->amounts];
        }
        return response()->json(['status'=>1 ,'err'=>0,'result'=>$array]);
    }
}
