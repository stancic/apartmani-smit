import galleryThumbnail from '../../../images/apartment-a/apartmentA-living-room.jpg'
import apartmentPicture1 from '../../../images/apartment-a/apartmentA-bathroom.jpg'
import apartmentPicture2 from '../../../images/apartment-a/apartmentA-bedroom.jpg'
import apartmentPicture3 from '../../../images/apartment-a/apartmentA-bedroom-2.jpg'
import apartmentPicture4 from '../../../images/apartment-a/apartmentA-dining-room.jpg'
import apartmentPicture5 from '../../../images/apartment-a/apartmentA-kitchen.jpg'
import apartmentPicture6 from '../../../images/apartment-a/apartmentA-terrace.jpg'

export const apartmentADataHR = {
	name: "Apartman A",
	description: "Nešto o apartmanu",
	abovePrice: "cijene od",
	price: "70 €",
	belowPrice: "po noćenju",
	equipmentList: ["Wifi", "parking", "satelitska tv", "klima"],
	galleryTitle: "Galerija:",
	equipment: "Opremljenost",
	availibility: "Dostupnost",
	buttonText: "Pošalji upit",
	images: [
		{
			id: 0,
			image: galleryThumbnail,
			description: 'Gallery thumbnail'
		},
		{
			id: 1,
			image: apartmentPicture1,
			description: 'Apartment bathroom'
		},
		{	
			id: 2,
			image: apartmentPicture2,
			description: 'Apartment bedroom'
		},
		{	
			id: 3,
			image: apartmentPicture3,
			description: 'Apartment second bedroom'
		},
		{
			id: 4,
			image: apartmentPicture4,
			description: 'Apartment dining room'
		},
		{
			id: 5,
			image: apartmentPicture5,
			description: 'Apartment kitchen'
		},
		{
			id: 6,
			image: apartmentPicture6,
			description: 'Apartment terrace'
		} 
	]
}