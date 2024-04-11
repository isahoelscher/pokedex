import React from "react";
import { PokemonType } from "../../constants";
import "./TypeBadge.scss"

interface TypeBadgeProps {
	type: string;
}

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {

const getCssClass = PokemonType[type.toUpperCase() as keyof typeof PokemonType] || "normal";

	return <div className={`type-badge ${getCssClass}`}>{type}</div>;
};

export default TypeBadge;
