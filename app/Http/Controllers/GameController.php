<?php namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Routing\Controller;
use Ramsey\Uuid\Uuid;

class GameController extends Controller {

	/**
	 * Display a listing of the resource.
	 * GET /game
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('welcome');
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /game/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /game
	 *
	 * @return Response
	 */
	public function store()
	{
        $data = request()->all();
        Game::create([
            'id' => Uuid::uuid4(),
            'name' => $data['name'],
            'level' => $data['level'],
            'score' => $data['score'],
        ]);
        dd($data);
        return view('welcome');
	}

	/**
	 * Display the specified resource.
	 * GET /game/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /game/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /game/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /game/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}