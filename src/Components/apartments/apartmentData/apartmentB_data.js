import galleryThumbnail from '../../../images/apartment-b/apartmentB-living-room.jpg'
import apartmentPicture1 from '../../../images/apartment-b/apartmentB-bathroom.jpg'
import apartmentPicture2 from '../../../images/apartment-b/apartmentB-bedroom.jpg'
import apartmentPicture3 from '../../../images/apartment-b/apartmentB-bedroom-2.jpg'
import apartmentPicture4 from '../../../images/apartment-b/apartmentB-dining-room.jpg'
import apartmentPicture5 from '../../../images/apartment-b/apartmentB-kitchen.jpg'
import apartmentPicture6 from '../../../images/apartment-b/apartmentB-terrace.jpg'

export const apartmentBDataHR = {
	name: "Apartman B",
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
			id: 7,
			image: galleryThumbnail,
			description: 'Gallery thumbnail'
		},
		{
			id: 8,
			image: apartmentPicture1,
			description: 'Apartment bathroom'
		},
		{	
			id: 9,
			image: apartmentPicture2,
			description: 'Apartment bedroom'
		},
		{	
			id: 10,
			image: apartmentPicture3,
			description: 'Apartment second bedroom'
		},
		{
			id: 11,
			image: apartmentPicture4,
			description: 'Apartment dining room'
		},
		{
			id: 12,
			image: apartmentPicture5,
			description: 'Apartment kitchen'
		},
		{
			id: 13,
			image: apartmentPicture6,
			description: 'Apartment terrace'
		} 
	]
}