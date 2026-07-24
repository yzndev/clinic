<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'full_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'service_id' => 'nullable|exists:services,id',
            'message' => 'nullable|string',
        ]);

        $appointment = Appointment::create($validatedData);

        return response()->json([
            'message' => 'نوبت شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.',
            'data' => $appointment
        ], 201);
    }
}
