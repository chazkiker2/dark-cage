import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();

// const tileMap = new Map();
// tileMap.set(0, )

export const initState = {
	remainingTiles: {
		start: 4,
		key: 6,
		waxEater: 12,
		gate: 4,
		straightPassage: 10,
		tPassage: 32,
		fourWayPassage: 12,
	},
	tileMap: 

}

const tileSlice = createSlice({
	name: "tiles",
	initialState: initState,
	reducers: {
		drawTile: (state, action) => { },
	}
})