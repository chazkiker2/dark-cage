import React from "react";
import Header from "../shared/Header";
import ClassicBoard from "./ClassicBoard";

const PlayHome = props => {
	return (
		<div>
			<Header />
			<div>
				<ClassicBoard />
			</div>
		</div>
	);
}

export default PlayHome;