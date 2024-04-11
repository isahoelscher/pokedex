import React from "react";
import { MdCatchingPokemon } from "react-icons/md";
import "./Header.scss"

const Header = () => {
	return (
		<>
			<div className="header">
         <div className="title">
          <MdCatchingPokemon size={90} color="#DC0A2D"/>
				<h1>PokéDex</h1>
         </div>
				
			</div>
		</>
	);
};

export default Header;
