import Card from "../components/Card/Card";
import ReactLoading from "react-loading";
import { useQuery } from "react-query";
import { listPokemons } from "../Pokemon/services/listPokemons";
import "./Pokedex.scss";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DetailsModal from "../components/DetailsModal/DetailsModal";
import { getPokemonDetails } from "../Pokemon/services/getPokemonDetails";

Modal.setAppElement("#root");

function Pokedex(): React.ReactElement {
	const [selectedPokemon, setSelectedPokemon] = useState("");
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 14;

	const { data, isLoading, isError } = useQuery(
		["listPokemons", currentPage, limit],
		async () => {
			return listPokemons(currentPage, limit);
		}
	);

	useEffect(() => {
		if (selectedPokemon !== "") {
			getPokemonDetails(selectedPokemon);
		}
	}, [selectedPokemon]);

	const { data: pokemonDetails } = useQuery(
		["getPokemonDetails", selectedPokemon],
		async () => {
			return getPokemonDetails(selectedPokemon);
		}
	);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	if (isLoading) {
		return (
			<div className="loader-container">
				<ReactLoading
					type="bubbles"
					color="#dc0a2d"
					height={100}
					width={100}
					className="loader"
				/>
			</div>
		);
	}

	if (isError || !data) {
		return <div>Error fetching data</div>;
	}

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
							abilities={pokemon.abilities.map(
								(ability) => ability.ability.name
							)}
							onClick={() => {
								setSelectedPokemon(pokemon.name);
								openModal();
							}}
						/>
					))}
				</div>
				<Pagination
					currentPage={currentPage}
					onPageChange={handlePageChange}
					totalPages={Math.ceil(data.count / limit)}
				/>

				<DetailsModal
					isOpen={modalIsOpen}
					closeModal={closeModal}
					pokemonHeight={pokemonDetails?.height!}
					pokemonWeight={pokemonDetails?.weight!}
					pokemonName={pokemonDetails?.name!}
					frontShiny={pokemonDetails?.sprites?.front_shiny || ""}
					backShiny={pokemonDetails?.sprites?.back_shiny || ""}
					stats={pokemonDetails?.stats || []}
				/>
			</div>
		</>
	);
}

export default Pokedex;
