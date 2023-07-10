// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (input === ""){
    return "Empty"; 
   } else if (isNaN(input)){
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilotValidation = validateInput (pilot);
   const coPilotValidation = validateInput (copilot);
   const fuelLevelValidation = validateInput (fuelLevel);
   const cargoLevelValidation = validateInput (cargoLevel);
   

   if (pilotValidation === "Empty") || coPilotValidation === "Empty" || fuelLevel === "Empty" || cargoLevel === "Empty"{
    alert ("All fields are required!");
   } else if (pilotValidation === "Not a Number") || coPilotValidation === "Not a Number"{
    alert ("Please enter a valid name for Pilot and CoPilot");
   } else if (fuelLevel === "Not a Number" || cargoLevel === "Not a Number"){
    alert ("Fuel Level and Cargo Level must be numbers.");
   } else if (pilotValidation === "Is a Number") || coPilotValidation === "Is a Number"){
    alert ("Please enter a valid name for Pilot and CoPilot.")
   } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        let launchStatus = document.getElementId("launchStatus");
        if (fuelLevel < 1000 && cargloLevel <= 1000){
            fuelStatus.innerHTML = "Fuel level low."
        }
   }
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
