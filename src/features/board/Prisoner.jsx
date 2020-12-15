import React from "react";

const startingPrisonerMaterials = {
	candleStatus: true,
	nerves: 1,
	tokenColor: "",
	startingTile: 1,
}

const Prisoner = props => {
	const [prisoner, setPrisoner] = useState(startingPrisonerMaterials);
	return (
		<div>
			<h1>Prisoner</h1>
			<p>Status: {prisoner.candleStatus ? "Lit" : "LIGHTS OUT"}</p>
			<p>Nerve Count: {prisoner.nerves}</p>
			<p>Player Color: {prisoner.tokenColor}</p>
			<p>Starting Tile: {prisoner.startingTile}</p>
		</div>
	)
}

export default Prisoner;