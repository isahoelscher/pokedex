import Card from "../components/Card/Card";

import { useQuery } from "react-query";
import { listPokemons } from "../Pokemon/services/listPokemons";
import "./Pokedex.scss"
import Header from "../components/Header/Header";

function Pokedex(): React.ReactElement {
	const { data } = useQuery(`listPokemons`, listPokemons);

	return (
		<>
			<div className="container">
				<Header />

				<div className="list-pokemons">
					{data?.results.map((pokemon, key) => (
					<Card
						key={key}
						imageUrl={pokemon.sprites.front_default}
						name={pokemon.name}
						types={pokemon.types.map((type) => type.type.name)}
						abilities={pokemon.abilities.map((ability) => ability.ability.name)}
					/>
				))}
				</div>

				
			</div>
		</>
	);
}

export default Pokedex;
