"use strict";

// Center of the map
var center = [52.5376, 13.2637];

// Create a variable that contains the map, initial settings
var map = L.map('map').setView(center, 12); 

// Initialiation of the attributes
let drawEvent = false; 

// Add tileLayer
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=86IucIQ0W7mo5uspiDDB', 
    {
     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map); 

    
// Add drawControl
var drawnItems = new L.FeatureGroup();

map.addLayer(drawnItems);
var drawControl = new L.Control.Draw ({
    edit: {
        featureGroup: drawnItems,
    },
    draw: {
        drawnItems:false,
        marker:false,
        polyline: false,
        circle: false,
        polygon:false,
        circlemarker:false,
    }
});
map.addControl(drawControl);

// Array to store drawn rectangles
var array = [];

// Manage draw events
map.on(L.Draw.Event.CREATED, function (e) {
    var type = e.layerType,
        layer = e.layer; 
    drawEvent = true; 
    if (type == 'rectangle') {
      var rectangle = e; 
      console.log(rectangle.layer._latlngs);
      array.push(rectangle)
    }
    drawnItems.addLayer(layer);
    console.log(drawnItems)
    console.log(array)
 });
 
map.on('draw:edited', function (e) {
    var layers = e.layers;
    layers.eachLayer(function (layer) {
    });
});

// Declare variables for dropdowns outside of the event listener
const scenarioDropdown = document.querySelector('.custom-select:nth-child(1)');
const riskParamDropdown = document.querySelector('.custom-select:nth-child(2)');
const yearDropdown = document.querySelector('.custom-select:nth-child(3)');

// Submit button
const submitButton = document.getElementById('submitButton');

let selectedSubmitScenario = "";
let selectedSubmitRiskParam = "";
let selectedSubmitYear = "";

submitButton.addEventListener('click', function() {
    selectedSubmitScenario = scenarioDropdown.options[scenarioDropdown.selectedIndex].text;
    selectedSubmitRiskParam = riskParamDropdown.options[riskParamDropdown.selectedIndex].text;
    selectedSubmitYear = yearDropdown.options[yearDropdown.selectedIndex].text;
    
    const url = `/RiskReport/Analytics?selectedSubmitScenario=${selectedSubmitScenario}&selectedSubmitRiskParam=${selectedSubmitRiskParam}&selectedSubmitYear=${selectedSubmitYear}`;
    window.location.href = url;
});
