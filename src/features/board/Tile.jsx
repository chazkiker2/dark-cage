import React, { useState } from "react";
import styled from "styled-components";

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
`;

export default Tile;