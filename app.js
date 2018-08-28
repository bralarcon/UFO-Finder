dataSet = data;

var $tbody = document.querySelector("#table-body");
var $dateInput = document.querySelector("#date-input");
var $cityInput = document.querySelector("#city-input");
var $stateInput = document.querySelector("#state-input");
var $countryInput = document.querySelector("#country-input");
var $shapeInput = document.querySelector("#shape-input");
var $submitButton = document.querySelector("#submit");

// Filtered list
var filteredSightings = dataSet;


var startingIndex = 0;
var resultsPerPage = 70;


renderTable(dataSet);  

// Function to render table
function renderTable() {

    
    var endingIndex = startingIndex + resultsPerPage;

    // Looping data
    for (var i = 0; i < filteredSightings.length; i++) {
    
        
        var $row = $tbody.insertRow(i);
        var currentSighting = filteredSightings[i];
        var fields = Object.keys(currentSighting);

        // Insert filter
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentSighting[field];
        };
    };
};

// Event listener for submit button
$submitButton.addEventListener("click", filterInput);

// Function to filter
function filterDate(sighting) {
    return sighting.datetime == $dateInput.value.trim().toLowerCase();
};

function filterCity(sighting) {
    return sighting.city == $cityInput.value.trim().toLowerCase();
};

function filterState(sighting) {
    return sighting.state == $stateInput.value.trim().toLowerCase();
};

function filterCountry(sighting) {
    return sighting.country == $countryInput.value.trim().toLowerCase();
};

function filterShape(sighting) {
    return sighting.shape == $shapeInput.value.trim().toLowerCase();
};

function filterInput(event) {

    event.preventDefault();

    filteredSightings = dataSet;

    // Filters
    if ($dateInput.value) {
        filteredSightings = filteredSightings.filter(filterDate);
    };

    if ($cityInput.value) {
        filteredSightings = filteredSightings.filter(filterCity);
    };

    if ($stateInput.value) {
        filteredSightings = filteredSightings.filter(filterState);
    };

    if ($countryInput.value) {
        filteredSightings = filteredSightings.filter(filterCountry);
    };

    if ($shapeInput.value) {
        filteredSightings = filteredSightings.filter(filterShape);
    };

    if (!$dateInput && !$cityInput && !$stateInput && !$countryInput && !$shapeInput) {
        filteredSightings = dataSet;
    };

    // Reset inputs
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";

    // Re-render table
    $tbody.innerHTML = "";
    renderTable();
};


