
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets ": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



// Accessing the Toronto Airline routes GeoJSON URL
let earthquakedata = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 1
}

// Grabbing our GeoJSON data.

d3.json(earthquakedata).then(function(data) {
  L.geoJSON(data).addTo(map); 
});

// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//   // style: myStyle,
//   onEachFeature:function(feature, layer) {
//   layer.bindPopup ("test");
// }

// Grabbing our GeoJSON data.

// d3.json(earthquakedata).then(function(data) {
//   console.log(data);
//   L.geoJSON(data, {
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//     layer.bindPopup("<h2>" + feature.properties.AREA_NAME+"<h2>");
//     }
//   }).addTo(map);   
// });