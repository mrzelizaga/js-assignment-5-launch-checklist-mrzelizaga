// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">
  `
}


function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Is a String";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotValidation = validateInput(pilot);
  const coPilotValidation = validateInput(copilot);
  const fuelLevelValidation = validateInput(fuelLevel);
  const cargoLevelValidation = validateInput(cargoLevel);

  if (pilotValidation === "Empty" || coPilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoLevelValidation === "Empty") {
    alert("All fields are required!");
  } else if (pilotValidation === "Not a Number" || coPilotValidation === "Not a Number") {
    alert("Please enter a valid name for Pilot and CoPilot.");
  } else if (fuelLevelValidation === "Not a Number" || cargoLevelValidation === "Not a Number") {
    alert("Fuel Level and Cargo Level must be numbers.");
  } else if (pilotValidation === "Is a Number" || coPilotValidation === "Is a Number") {
    alert("Please enter a valid name for Pilot and CoPilot.");
  } else {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");

    list.style.visibility = 'visible';

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;

    if (fuelLevel < 10000 && cargoLevel <= 10000) {
      fuelStatus.innerHTML = "Fuel level too low for launch"
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      list.style.visibility = "visible";
      launchStatus.style.color = "#C7254E";
    } else if (cargoLevel > 10000) {
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      list.style.visibility = "visible";
      launchStatus.style.color = "#C7254E";
    } else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      cargoStatus.innerHTML = "Cargo mass low enough for launch";
      launchStatus.innerHTML = "Shuttle Is Ready Launch";
      list.style.visibility = "visible";
      launchStatus.style.color = "#419F6A";
    }
  }
}




async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  const index = Math.floor(Math.random() * planets.length);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;