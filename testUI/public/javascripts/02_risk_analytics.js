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
    scenarioSpan.innerHTML = `In the <strong>${scenario}</strong> Scenario  `;
    
    const yearSpan = document.createElement('span');
    yearSpan.innerHTML = `for the year <strong>${year}</strong>,`;  

    const riskParamSpan = document.createElement('span');
    riskParamSpan.innerHTML = ` the risk factor <strong>${riskParam}</strong> will impact the your assets of your portfolio <strong><span class='color-word'>strongly</span></strong>.`;
    
    dynamicText.appendChild(scenarioSpan);
    dynamicText.appendChild(yearSpan);
    dynamicText.appendChild(riskParamSpan);
}

updateDynamicText()

const gradientBars = [
    { name: "Humans", value: 55 },
    { name: "Animals", value: 45 },
    { name: "Ecosystem", value: 60 },
    { name: "Infrastructure", value: 75 }
  ];
  
// Calculate the average score from the gradient bars
const totalValues = gradientBars.reduce((sum, bar) => sum + bar.value, 0);
const averageValue = totalValues / gradientBars.length;

// Calculate the score percentage
const scorePercentage = Math.round((averageValue));

// Update the .percentage element with the calculated score
const scorePercentageElement = document.querySelector(".percentage");
scorePercentageElement.textContent = `${scorePercentage}%`;

const circlePath = document.querySelector("path.circle"); // Get the path element

// Calculate the dash array values
const dashArrayValue = `${scorePercentage} ${100 - scorePercentage}`;

// Set the dash array attribute
circlePath.setAttribute("stroke-dasharray", dashArrayValue);

