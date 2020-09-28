import React from 'react'
import './App.scss'
import Navigation from './Components/navigation/Navigation'
import { linkHR } from './Components/navigation/Data'
import { Route, Switch } from 'react-router-dom';
import Home from './Components/home_page/Home'
import { titleHR } from './Components/home_page/Data';
import MobileNavigation from './Components/navigation/MobileNavigation';
import Apartments from './Components/apartments/Apartments';


function App() {
	return (
		<div>
			<Navigation {...linkHR}/>
			<MobileNavigation />
			<Home {...titleHR} />
			<Apartments title={"Apartmani"}/>
				
		</div>
  );
}

export default App
