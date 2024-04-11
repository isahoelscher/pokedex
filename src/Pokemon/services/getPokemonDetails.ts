import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetail";
import { API_URL } from "../../constants";

export async function getPokemonDetails(name: string): Promise<PokemonDetail> {
  const endpoint = `${API_URL}/pokemon/${name}`;

  const response = await axios.get<PokemonDetail>(endpoint);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return response.data;
}