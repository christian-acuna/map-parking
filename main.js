mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aWFubWluZ2xlcyIsImEiOiIzMjdlOTI2ODMwNDg4MWI1ZjdhZjE0MGE2ZjQ5NjQ5NiJ9.OAso8BqXVyQeMCxaX_6FMA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-122.4679928, 37.7787859], // starting position
    zoom: 12 // starting zoom
});
