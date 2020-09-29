import galleryThumbnail from '../../../images/apartment-c/apartmentC-kitchen.jpg'
import apartmentPicture1 from '../../../images/apartment-c/apartmentC-bathroom.jpg'
import apartmentPicture2 from '../../../images/apartment-c/apartmentC-bedroom.jpg'
import apartmentPicture3 from '../../../images/apartment-c/apartmentC-bedroom-2.jpg'
import apartmentPicture4 from '../../../images/apartment-c/apartmentC-living-room.jpg'
import apartmentPicture5 from '../../../images/apartment-c/apartmentC-terrace.jpg'
import apartmentPicture6 from '../../../images/apartment-c/apartmentC-terrace-sea-view.jpg'

export const apartmentCDataHR = {
	description: "Nešto o apartmanu",
	abovePrice: "cijene od",
	price: "70 €",
	belowPrice: "po noćenju",
	equipmentList: ["Wifi", "parking", "satelitska tv", "klima"],
	galleryThumbnail: galleryThumbnail,
	galleryTitle: "Galerija:",
	equipment: "Opremljenost",
	availibility: "Dostupnost",
	images: [
		{
			id: 0,
			image: apartmentPicture1,
			description: 'Apartment bathroom'
		},
		{	
			id: 1,
			image: apartmentPicture2,
			description: 'Apartment bedroom'
		},
		{	
			id: 2,
			image: apartmentPicture3,
			description: 'Apartment second bedroom'
		},
		{
			id: 3,
			image: apartmentPicture4,
			description: 'Apartment dining room'
		},
		{
			id: 4,
			image: apartmentPicture5,
			description: 'Apartment kitchen'
		},
		{
			id: 5,
			image: apartmentPicture6,
			description: 'Apartment terrace'
		} 
	]
}