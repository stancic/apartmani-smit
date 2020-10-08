import galleryThumbnail from '../../../images/apartment-c/apartmentC-kitchen.jpg'
import apartmentPicture1 from '../../../images/apartment-c/apartmentC-bathroom.jpg'
import apartmentPicture2 from '../../../images/apartment-c/apartmentC-bedroom.jpg'
import apartmentPicture3 from '../../../images/apartment-c/apartmentC-bedroom-2.jpg'
import apartmentPicture4 from '../../../images/apartment-c/apartmentC-living-room.jpg'
import apartmentPicture5 from '../../../images/apartment-c/apartmentC-terrace.jpg'
import apartmentPicture6 from '../../../images/apartment-c/apartmentC-terrace-sea-view.jpg'

export const apartmentCDataHR = {
	name: "Apartman C",
	description: "Nešto o apartmanu",
	abovePrice: "cijene od",
	price: "70 €",
	belowPrice: "po noćenju",
	equipmentList: ["Wifi", "parking", "satelitska tv", "klima"],
	galleryTitle: "Galerija:",
	equipment: "Opremljenost",
	buttonText: "Pošalji upit",
	availibility: "Dostupnost",
	images: [
		{
			id: 14,
			image: galleryThumbnail,
			descriptio: 'Gallery thumbnail'
		},
		{
			id: 15,
			image: apartmentPicture1,
			description: 'Apartment bathroom'
		},
		{	
			id: 16,
			image: apartmentPicture2,
			description: 'Apartment bedroom'
		},
		{	
			id: 17,
			image: apartmentPicture3,
			description: 'Apartment second bedroom'
		},
		{
			id: 18,
			image: apartmentPicture4,
			description: 'Apartment dining room'
		},
		{
			id: 19,
			image: apartmentPicture5,
			description: 'Apartment kitchen'
		},
		{
			id: 20,
			image: apartmentPicture6,
			description: 'Apartment terrace'
		} 
	]
}