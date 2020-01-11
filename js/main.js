;(function() {
	"use strict";


let bestSlider = $('.ba-slider');
bestSlider.slick({
slide: '.ba-section-intro',
arrows: false,
dots: true,
fade: true
});

let hotSlider = $('.ba-hot-slider');
hotSlider.slick({
slide: '.ba-card',
slidesToShow: 3,
  slidesToScroll: 3,
infinite: false,
fade: false,

});


function initBaMap() {
	// The location of Uluru
let cities = {
brooklyn: {
	coords : {lat: 40.678177, lng: -73.944160},
	
},

}

	let mapCenter = cities.brooklyn.coords;
	// The map, centered at mapCenter

	let mapEl = document.getElementById('map');

	let mapOption = {
		zoom: 15,
		center: mapCenter,
		disableDefaultUI: true,
		styles: [
			{
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#f5f5f5"
				 }
			  ]
			},
			{
			  "elementType": "labels.icon",
			  "stylers": [
				 {
					"visibility": "off"
				 }
			  ]
			},
			{
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#616161"
				 }
			  ]
			},
			{
			  "elementType": "labels.text.stroke",
			  "stylers": [
				 {
					"color": "#f5f5f5"
				 }
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#bdbdbd"
				 }
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#eeeeee"
				 }
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#757575"
				 }
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#e5e5e5"
				 }
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#9e9e9e"
				 }
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#ffffff"
				 }
			  ]
			},
			{
			  "featureType": "road.arterial",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#757575"
				 }
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#dadada"
				 }
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#616161"
				 }
			  ]
			},
			{
			  "featureType": "road.local",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#9e9e9e"
				 }
			  ]
			},
			{
			  "featureType": "transit.line",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#e5e5e5"
				 }
			  ]
			},
			{
			  "featureType": "transit.station",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#eeeeee"
				 }
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "geometry",
			  "stylers": [
				 {
					"color": "#c9c9c9"
				 }
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.fill",
			  "stylers": [
				 {
					"color": "#9e9e9e"
				 }
			  ]
			}
		 ]
	};
	let $baMap = new google.maps.Map(mapEl, mapOption);

	for (const city in cities) {
		let marker = new google.maps.Marker(
			{
				position: cities[city].coords,
				map: $baMap,
				icon: "img/marker.svg"
			
			});
		
	}
}
document.addEventListener('DOMContentLoaded', initBaMap);



})();

