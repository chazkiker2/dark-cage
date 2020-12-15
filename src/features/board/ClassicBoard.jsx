import React from "react";
import Tile from "./Tile";
import styled from "styled-components";

import StraightPassage from "./tiles/StraightPassage";
import TPassage from "./tiles/TPassage";

const ClassicBoard = props => {
	return (
		<>
			<h1>Classic Board</h1>
			<SixBySixCage>
				<TPassage />
				<StraightPassage />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
			</SixBySixCage>
		</>
	);
}


const SixBySixCage = styled.div`
	display: grid;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
	gap: 0px 0px;
	/* grid-template-areas:
	". . . . . ."
	". . . . . ."
	". . . . . ."
	". . . . . ."
	". . . . . ."
	". . . . . ."; */
`;

export default ClassicBoard;