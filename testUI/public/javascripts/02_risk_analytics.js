// Center of the map
var center = [52.5376, 13.2637];

// Create a variable that contains the map, initial settings
var map = L.map('map').setView(center, 16); 

// Initialiation of the attributes
let drawEvent = false; 

// Add tileLayer
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=86IucIQ0W7mo5uspiDDB', 
    {
     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map); 

// Extract query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedSubmitScenario = urlParams.get('selectedSubmitScenario');
const selectedSubmitRiskParam = urlParams.get('selectedSubmitRiskParam');
const selectedSubmitYear = urlParams.get('selectedSubmitYear');

// Update the dynamicText element with the extracted values
const dynamicText = document.getElementById('dynamic-text');
const newText = `In the selected Climate Storyline Scenario ${selectedSubmitScenario}, for the Climate Risk Parameter of ${selectedSubmitRiskParam}, in the year ${selectedSubmitYear}:`;
dynamicText.textContent = newText;

function updateDynamicText() {
    const scenario = selectedSubmitScenario;
    const riskParam = selectedSubmitRiskParam;
    const year = selectedSubmitYear;

    dynamicText.innerHTML = ""; // Clear previous content
    
    const scenarioSpan = document.createElement('span');
    scenarioSpan.innerHTML = `In the selected Climate Storyline Scenario <strong>${scenario}</strong>, `;
    
    const riskParamSpan = document.createElement('span');
    riskParamSpan.innerHTML = `for the Climate Risk Parameter of <strong>${riskParam}</strong>, `;
    
    const yearSpan = document.createElement('span');
    yearSpan.innerHTML = `in the year <strong>${year}</strong>:`;
    
    dynamicText.appendChild(scenarioSpan);
    dynamicText.appendChild(riskParamSpan);
    dynamicText.appendChild(yearSpan);
}

updateDynamicText()



