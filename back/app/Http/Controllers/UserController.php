<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::with('role', 'estado')->get();
        return response()->json($user, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => 'required|string',
            "apellido" => 'required|string',
            "email" => 'required|string',
            "password" => 'required|string',
            "id_rol" => 'required',

        ]);

        $data = $request->all();
        $data['password'] = Hash::make($request->password);

        $user = User::create($data);

        Bitacora::add("Usuario creado con id: {$user->id}");
        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json(['user: ' => $user], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "name" => 'required|string',
            "apellido" => 'required|string',
            "email" => 'required|string',
            "password" => 'required|string',
            "id_rol" => 'required',
        ]);

        $user = User::findOrFail($id);
        $data = $request->all();

        if ($request->has('password')) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);
        Bitacora::add("Usuario Actualizado con id: {$user->id}");
        return response()->json($user, 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $User = User::findOrFail($id);
        $User->delete();
        Bitacora::add("Usuario eliminado con id: {$User->id}");
        return response()->json(['User: ' => $User], 200);
    }
}
