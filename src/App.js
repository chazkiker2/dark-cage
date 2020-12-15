import React from 'react';
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./features/homepage/HomePage";
import PlayHome from "./features/board/PlayHome";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route path="/play">
					<PlayHome />
				</Route>
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
