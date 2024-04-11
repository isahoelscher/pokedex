import React from "react";
import TypeBadge from "../TypeBadge/TypeBadge";
import "./Card.scss";
import { PokemonType } from "../../constants";

interface CardProps {
	imageUrl: string;
	name: string;
	types: string[];
	abilities: string[];
}

const Card: React.FC<CardProps> = ({ imageUrl, name, types, abilities }) => {
	const getCssClass =
		PokemonType[types[0].toUpperCase() as keyof typeof PokemonType] || "normal";

	return (
		<div className={`card ${getCssClass}`}>
			<img src={imageUrl} alt={name} />
			<h2>{name}</h2>
			<span className="abilities"> {abilities.join(" | ")}</span>

			<div className="card-types">
				{types.map((type, key) => (
					<TypeBadge key={key} type={type} />
				))}
			</div>
		</div>
	);
};

export default Card;
