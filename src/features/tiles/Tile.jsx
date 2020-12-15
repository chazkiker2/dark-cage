import React, { useState } from "react";
import styled from "styled-components";

const Tile = props => {
	const [rotation, setRotation] = useState(0);
	const rotate = () => {
		setRotation(rotation + 90 >= 360 ? rotation - 270 : rotation + 90);
	}
	return (
		<TileSlot>
			{
				props.children
					? (
						<TileContainer onClick={rotate} rotation={rotation}>
							{props.children}
						</TileContainer>
					)
					: null
			}
		</TileSlot>
	);
}
const TileSlot = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	background-color: var(--pDarkest);
	border: 1px solid white;
	height: 100%; 
	width: 100%;
	/* min-width: 18vmin;
	min-height: 18vmin; */
`;

const TileContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border: 1px solid white;
	background: var(--pDarker);
	transform: ${props => `rotate(${props.rotation}deg)`};
	transition: transform 0.2s ease-in-out;
`;

export default Tile;