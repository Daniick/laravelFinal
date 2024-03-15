<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'nombre'
    ];

    public function estado()
    {
        return $this->belongsTo(estado::class, 'id_estado');
    }
}
