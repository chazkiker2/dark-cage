import React from "react";
import Tile from "./Tile";
import styled from "styled-components";

import StraightPassage from "./tiles/StraightPassage";
import TPassage from "./tiles/TPassage";
import FourPassage from "./tiles/FourPassage";
import Starting from "./tiles/Starting";

const ClassicBoard = props => {
	return (
		<>
			<SixBySixCage>
				<Tile>
					<TPassage />
				</Tile>
				<Tile>
					<StraightPassage />
				</Tile>
				<Tile>
					<FourPassage />
				</Tile>
				<Tile>
					<Starting />
				</Tile>
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
	width: 1080px;
	height: 1080px;
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