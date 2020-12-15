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


let squaresMap = OrderedMap();
for (let i = 0; i < 36; i++) {
	squaresMap = squaresMap.set(i, null);
}
// console.log(squaresMap.toJSON());
squaresMap.sortBy((v, k) => k);

const initHistoryMap = OrderedMap();
initHistoryMap.set(0, squaresMap);
// console.log(initHistoryMap.toJSON());
// console.log(initHistoryMap.get("0"));


const ClassicBoard = props => {
	// const [history, setHistory] = useState(OrderedMap({ 0: initSquares }));
	const [history, setHistory] = useState(OrderedMap({ 0: squaresMap }));
	const [stepNum, setStepNum] = useState(1);
	// const [nextPlayer, setNextPlayer] = useState(1);

	useEffect(() => {
		const sort = () => {
			setHistory(h => h.sortBy((v, k) => k));
			// if (!history.isEmpty() && history.last()) {
			// 	setHistory(h => h.last().sortBy((v, k) => k));
			// }
		}
		sort();
		// console.log(history.last().toArray());
	}, [])

	const addTile = (location, tile) => {
		setHistory(history.set(stepNum, history.last().set(location, tile)));
	}

	return (
		<Page>
			<div>
				<button onClick={() => addTile(2, (<StraightPassage />))}>Add</button>
				<button onClick={() => addTile(4, (<TPassage />))}>Add</button>
			</div>
			<SixBySixCage>
				{
					history.last()?.toArray().map(([k, v]) => {
						return (<Tile>{v}</Tile>)
					})
				}
			</SixBySixCage>
		</Page>
	);
}

const Page = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	overflow-x: auto;
`;


const SixBySixCage = styled.div`
	/* padding: 10vmin 1rem; */
	width: 96vw;
	justify-content: center;
	
	/* height: 100vh; */
	/* max-height: 80vh; */
	/* max-width: 80vw; */
	/* display: grid;
	grid-template-columns: repeat()(auto-fill, minmax(8rem, 1fr));
	grid-auto-rows: 1fr; */
	display: grid;
  grid-template-columns: repeat(6, minmax(16%, 1fr));
  grid-auto-rows: 1fr;
	&::before {
		content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
	}
	& > *:first-child {
		grid-row: 1 / 1;
		grid-column: 1 / 1;
	}
	/* & > * {
		background: var(--pDarker);
		border: 1px white solid;
	} */
	/* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; */
	/* grid-auto-flow: row; */
	justify-items: center;
	align-items: center;
	gap: 0;
	/* overflow-x: auto; */
`;

export default ClassicBoard;