import { createSlice } from "@reduxjs/toolkit";

export const initState = {
	position: null,
	error: "",
	routes: new Set(),
	containing: null,
}

const tileSlice = createSlice({
	name: "tile",
	initialState: initState,
	reducers: {
		setTile: (state, action) => {
			const { tileToSet } = action.payload;
			state.containing = tileToSet;
		}
	}
})