// Google Maps intigrate

function schoolLoc() {
	var initialLoc = {
		center: new google.maps.LatLng(14.4793997, 120.9988282),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(document.getElementById("schoolLocMap"), initialLoc);
};