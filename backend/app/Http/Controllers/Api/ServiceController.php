<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $service = Service::where('is_active', true)->get();
        return response()->json($service);
    }
}
