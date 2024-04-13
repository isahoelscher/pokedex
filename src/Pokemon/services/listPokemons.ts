import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetail";
import { getPokemonDetails } from "./getPokemonDetails";
import { API_URL } from "../../constants";

export interface PokemonListInterface {
	name: string;
	url: string;
}

export interface ListPokemonsInterface {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonDetail[];
}

export async function listPokemons(page: number, limit: number): Promise<ListPokemonsInterface> {
	const endpoint = `${API_URL}/pokemon`;

	const response = await axios.get<ListPokemonsInterface>(endpoint, {
		params: {
			limit,
			offset: (page - 1) * limit,
		},
	});

	const promiseArr = response.data.results.map(async (pokemon) =>
		getPokemonDetails(pokemon.name)
	);

	// wait 10 seconds before continue
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const resultsPromise = await Promise.all(promiseArr);

	return {
		...response.data,
		results: resultsPromise,
	};
}
