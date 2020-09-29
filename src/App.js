import React from 'react'
import './App.scss'
import Navigation from './Components/navigation/Navigation'
import { linkHR } from './Components/navigation/Data'
import Home from './Components/home_page/Home'
import { titleHR } from './Components/home_page/Data'
import MobileNavigation from './Components/navigation/MobileNavigation'
import Apartments from './Components/apartments/Apartments'
import { informationHR } from './Components/apartments/Data'
import Location from './Components/location/Location'
import { locationDetailsHR } from './Components/location/Data'
import AboutUs from './Components/about_us/AboutUs'
import { aboutUsHR } from './Components/about_us/Data'
function App() {
	return (
		<div>
			<Navigation {...linkHR}/>
			<MobileNavigation />
			<Home {...titleHR} />
			<Apartments {...informationHR}/>
			<Location {...locationDetailsHR}/>	
			<AboutUs {...aboutUsHR} />
		</div>
  );
}

export default App
