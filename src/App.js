import React from 'react'
import './App.scss'
//importing all the stuff for navigation
import Navigation from './Components/navigation/Navigation'
import MobileNavigation from './Components/navigation/MobileNavigation'
import { linkHR } from './Components/navigation/Data' //object that contains all the details for navigation

//importing all the stuff for home page
import Home from './Components/home_page/Home'
import { titleHR } from './Components/home_page/Data' //object that contains all the details for home page

//importing all the stuff for apartments page
import Apartments from './Components/apartments/Apartments'
import { informationHR } from './Components/apartments/Data' //object that contains all the details for apartments page

//importing all the stuff for location page
import Location from './Components/location/Location'
import { locationDetailsHR } from './Components/location/Data' //object that contains all the details for location page

//importing all the stuff for about us page
import AboutUs from './Components/about_us/AboutUs'
import { aboutUsHR } from './Components/about_us/Data' //object that contains all the details for about us page

import Gallery from './Components/apartments/gallery/Gallery'

//importing all the menus
import PriceMenu from './Components/apartments/apartment_menus/price_menu/PriceMenu'
import { priceMenuDetailsHR } from './Components/apartments/apartment_menus/price_menu/price_data/Data'
import EquipmentMenu from './Components/apartments/apartment_menus/equipment_menu/EquipmentMenu'
import AvailibilityMenu from './Components/apartments/apartment_menus/availibilty_menu/AvailibilityMenu'

function App() {
	return (
		<div>
			<Navigation {...linkHR}/>
			<MobileNavigation {...linkHR}/>
			<Home {...titleHR} />
			<Apartments {...informationHR}/>
			<Gallery />
			<PriceMenu {...priceMenuDetailsHR}/>
			<EquipmentMenu />
			<AvailibilityMenu />
			<Location {...locationDetailsHR}/>	
			<AboutUs {...aboutUsHR} />
		</div>
);
}

export default App
