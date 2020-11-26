<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;


    protected $fillable = [
        'description',
        'currency',
        'amount',
        'user_id',
        'category_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
    public function categories()
    {
        return $this->belongsTo('App\Models\Category');
    }
}
