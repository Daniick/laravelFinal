<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = role::with('estado')->get();
        return response()->json($roles, 200);
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
            'nombre' => 'required|unique:roles'
        ]);

        $roles = role::create($request->all());
        Bitacora::add("Rol creado con id: {$roles->id}");
        return response()->json($roles, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $roles = role::findOrFail($id);
        return response()->json(['Rol: ' => $roles], 201);  // 200 = OK, 201 = Created, 204 = No Content, 400 = Bad Request, 401 = Unauthorized, 403 = Forbidden, 404 = Not Found, 422 = Unprocessable Entity, 500 = Internal Server Error, 503 =
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string',
            'id_estado' => 'required'
        ]);

        $roles = role::findOrFail($id);
        $roles->update($request->all());
        Bitacora::add("Se ah Actualizado el Rol con id: {$roles->id}");
        return response()->json(['message' => 'Rol Actualizado', 'Rol' => $roles, 200]); // 200 = OK, 201 = Created, 204 = No Content, 400 = Bad Request, 401 = Unauthorized, 403 = Forbidden, 404 = Not Found, 422 = Unprocessable Entity, 500 = Internal Server Error, 503 =
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(role $role)
    {
        $roles = role::findOrFail($role->id);
        $roles->delete();
        Bitacora::add("Se ah Eliminado el Rol con id: {$roles->id}");
        return response()->json(['message' => 'Rol Eliminado', 'Rol' => $roles, 200]); // 200 = OK, 201 = Created, 204 = No Content, 400 = Bad Request, 401 = Unauthorized, 403 = Forbidden, 404 = Not Found, 42
    }
}
