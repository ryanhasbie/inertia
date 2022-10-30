<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function create()
    {
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => ['email', 'required'],
            'password'  => ['required', 'min:6'],
        ]);

        if(Auth::attempt($request->only('email', 'password'), $request->remember)) {
            session()->regenerate();
            return redirect('/dashboard');
        }

        throw ValidationException::withMessages([
            'email' => 'Yours credentials not exist',
        ]);
    }
}
