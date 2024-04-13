import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./DetailsModal.scss";
import { VscSymbolRuler } from "react-icons/vsc";
import { TbWeight } from "react-icons/tb";
import Stats from "../Stats/Stats";

interface Stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

interface DetailsModalProps {
	isOpen: boolean;
	closeModal: () => void;
	pokemonName: string;
	frontShiny: string;
	backShiny: string;
	pokemonWeight: number;
	pokemonHeight: number;
  stats: Stat[]
}

const DetailsModal: React.FC<DetailsModalProps> = ({
	isOpen,
	closeModal,
	pokemonName,
	frontShiny,
	pokemonWeight,
	pokemonHeight,
	backShiny,
  stats
}) => {
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		if (isOpen) {
			const timeout = setTimeout(() => {
				setDataLoaded(true);
			}, 2000);

			return () => clearTimeout(timeout);
		}
	}, [isOpen]);

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			overlayClassName="modal-overlay"
			className="modal-content"
		>
			{dataLoaded ? (
				<>
					<h1>{pokemonName}</h1>
					<div className="pokemon-shiny">
						<img src={frontShiny} alt={pokemonName} />
						<img src={backShiny} alt={pokemonName} />
					</div>
					<h3 className="about">About</h3>
					<div className="divider">
						<div className="column">
							<p className="specs">
								<TbWeight /> {`${pokemonWeight}kg`}
							</p>
							<p className="subtitle">Weight</p>
						</div>

						<div className="column">
							<p className="specs">
								<VscSymbolRuler /> {`${pokemonHeight}cm`}
							</p>
							<p className="subtitle">Height</p>
						</div>
					</div>
					<h4>Base Stats</h4>
					
						<Stats stats={stats} />
					
				</>
			) : (
				<div>Carregando...</div>
			)}
		</Modal>
	);
};

export default DetailsModal;
