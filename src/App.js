import React from 'react'
import './App.scss'
import Navigation from './Components/navigation/Navigation'

import { linkHR } from './Components/navigation/Data'
import { Route, Switch } from 'react-router-dom';
import Home from './Components/home_page/Home'
function App() {
	return (
		<div>
			<Navigation {...linkHR}/>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
  );
}

export default App
