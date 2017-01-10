mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aWFubWluZ2xlcyIsImEiOiIzMjdlOTI2ODMwNDg4MWI1ZjdhZjE0MGE2ZjQ5NjQ5NiJ9.OAso8BqXVyQeMCxaX_6FMA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-122.4679928, 37.7787859], // starting position
    zoom: 12 // starting zoom
});

var geojson = {
	"data": [
		[1, "E5ABFB51-6D58-4A1F-A8FA-5FE12684F3AE", 1, 1394624989, "875159", 1394624989, "875159", "{\n}", [null, "37.8007983983", "-122.4368696024", null, false], "Area 5", "354-20160", "-", "0.0000000000", "Grey", "SS", "Y", "N", "SFMTA", "ON", "0.0000000000", "2016.0000000000", "CHESTNUT ST", "3977000.0000000000", "Marina"]
	]
}


// new mapboxgl.Marker()
//   .setLngLat([-122.4679928, 37.7787859])
//   .addTo(map);

var marker = new mapboxgl.Marker()
    .setLngLat([-122.4679928, 37.7787859])
    .addTo(map);

// // add markers to map
// geojson.data.forEach(function(marker) {
//   var el = document.createElement('div');
//   el.className = 'marker';
//   el.style.backgroundImage = 'url(https://placekitten.com/g/25/25)';
//   el.style.width = '25px';
//   el.style.height = '25px';
//
//   el.addEventListener('click', function() {
//     window.alert(marker[1]);
//   });
//
//     new mapboxgl.Marker(el, {offset: [20, 20]})
//     	.setLngLat([marker[8][2], marker[8][1]])
//     	.addTo(map);
// });
