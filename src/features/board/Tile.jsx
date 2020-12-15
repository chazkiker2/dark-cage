import React, { useState } from "react";
import styled from "styled-components";

import StraightPassage from "./tiles/StraightPassage";
import TPassage from "./tiles/TPassage";
import FourPassage from "./tiles/FourPassage";

const initRoutes = {
	up: false,
	right: false,
	down: false,
	left: false,
}

const TileEnum = Object.freeze(
	{
		empty: null,
		starting: 1,
		key: 2,
		waxEater: 3,
		gate: 4,
		straight: StraightPassage,
		t: TPassage,
		four: 7,
		pit: 8,
	}
)

const Tile = props => {
	return (
		<TileContainer>
			{props.children}
		</TileContainer>
	);

}

const TileContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	background-color: var(--pDarkest);
	border: 1px solid white;
	height: 180px; 
	width: 180px;
	/* transform: ${props => `rotate(${props.rotation}deg)`}; */
`;

export default Tile;