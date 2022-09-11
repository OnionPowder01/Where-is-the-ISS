// Making a map and tiles
const myMap = L.map('issMap').setView([0, 0], 1); //creating map with 0 lat and 0 long
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution} ); // { } because its expecting an object as attributtion
tiles.addTo(myMap);

//Making a marker with a custom icon
const issIcon = L.icon({
iconUrl: 'iss200.png',
iconSize: [50, 32],
iconAnchor: [25, 16], 
});

const marker = L.marker([0, 0],{icon: issIcon} ).addTo(myMap);  // creating marker and adding to it the custom icon

///     API     ///
const url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getIss() {
    const response = await fetch(url); //fetching the url created before
    const data = await response.json(); //converting the received data into JSON format
    const { latitude, longitude } = data; //same as data.latitude // data.longitude

    
    marker.setLatLng([latitude, longitude]); //setting the marker lat and long

    //To show them on the webpage
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;


}
getIss();