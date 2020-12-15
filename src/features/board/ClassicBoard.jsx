import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Map, OrderedMap } from "immutable";

import Tile from "../tiles/Tile";
import StraightPassage from "../tiles/StraightPassage";
import TPassage from "../tiles/TPassage";
import FourPassage from "../tiles/FourPassage";
import Starting from "../tiles/Starting";
import Gate from "../tiles/Gate";
import WaxEater from "../tiles/WaxEater";
import Key from "../tiles/Key";

const createInitSquaresMap = () => {
	let squaresMap = OrderedMap();
	for (let i = 0; i < 36; i++) {
		squaresMap = squaresMap.set(i, null);
	}
	// console.log(squaresMap.toJSON());
	return squaresMap.sortBy((v, k) => k);
}
const initSquares = createInitSquaresMap();
const initHistoryMap = OrderedMap({ 0: initSquares });
// console.log(initHistoryMap.toJSON());
// console.log(initHistoryMap.get("0"));


const ClassicBoard = props => {
	const [history, setHistory] = useState(initHistoryMap);
	const [stepNum, setStepNum] = useState(0);
	const [nextPlayer, setNextPlayer] = useState(1);
	const [squares, setSquares] = useState(initSquares);

	// const sort = () => {
	// 	// const sortedByKey = squares.toOrderedMap().sortBy((v, k) => k);
	// 	setHistory(history.sortBy((v, k) => k));
	// 	setHistory(history.last().sortBy((v, k) => k));

	// 	// setSquares(squares.toOrderedMap().sortBy((v, k) => k));
	// }

	// const handleMove = (i) => {
	// 	setHistory(3);
	// }
	useEffect(() => {
		// setSquares(st => st.sortBy(s => s.key));
		// setSquares(squares.toOrderedMap().sortBy((v, k) => k));
		const sort = () => {
			// const sortedByKey = squares.toOrderedMap().sortBy((v, k) => k);
			setHistory(history.sortBy((v, k) => k));
			setHistory(history.last().sortBy((v, k) => k));

			// setSquares(squares.toOrderedMap().sortBy((v, k) => k));
		}
		sort();

	}, [])

	return (
		<>
			<SixBySixCage>
				{


				}
				{/* row 1 */}
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
				<Tile>
					<Gate />
				</Tile>
				<Tile>
					<WaxEater />
				</Tile>
				<Tile>
					<Key />
				</Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
				<Tile></Tile>
			</SixBySixCage>
		</>
	);
}


const SixBySixCage = styled.div`
	padding: 10vmin 1rem;
	width: 100vw;
	height: 100vh;
	max-height: 100vh;
	max-width: 100vw;
	display: grid;
	grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
	grid-template-rows: auto;
	/* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; */
	grid-auto-flow: row;
	justify-items: stretch;
	gap: 0px 0px;
	overflow-x: auto;
`;

export default ClassicBoard;