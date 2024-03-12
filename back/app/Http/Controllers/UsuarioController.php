<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use App\Models\usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = usuario::all();
        return response()->json($usuarios, 200);
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
            "nombre" => 'required|string',
            "apellido" => 'required|string',
            "correo" => 'required|string',
            "clave" => 'required|string',
            "id_rol" => 'integer',

        ]);

        $data = $request->all();
        $data['clave'] = Hash::make($request->clave);

        $usuario = usuario::create($data);

        Bitacora::add("Usuario creado con id: {$usuario->id}");
        return response()->json($usuario, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $usuario = usuario::findOrFail($id);
        return response()->json(['usuario: ' => $usuario], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(usuario $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "nombre" => 'required|string',
            "apellido" => 'required|string',
            "correo" => 'required|string',
            "clave" => 'required|string',
            "id_rol" => 'required|string',
        ]);

        $usuario = usuario::findOrFail($id);
        $data = $request->all();

        if ($request->has('clave')) {
            $data['clave'] = Hash::make($request->clave);
        }

        $usuario->update($data);
        return response()->json($usuario, 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario = usuario::findOrFail($id);
        $usuario->delete();
        return response()->json(['usuario: ' => $usuario], 200);
    }
}
