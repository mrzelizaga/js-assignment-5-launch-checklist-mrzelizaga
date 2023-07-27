// Write your JavaScript code here!

window.addEventListener("load", function () {
  

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    //console.log(listedPlanets);
  }).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    const randomPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(
      document,
      randomPlanet.name,
      randomPlanet.diameter,
      randomPlanet.star,
      randomPlanet.distance,
      randomPlanet.moons,
      randomPlanet.image
    );
  });
  let list = document.getElementById("faultyItems")
  let form = document.querySelector("form")


  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const pilotInput = document.querySelector("input[name=pilotName]");
    const pilot = pilotInput.value;
    const copilotInput = document.querySelector("input[name=copilotName]");
    const copilot = copilotInput.value;
    const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    const fuelLevel = fuelLevelInput.value;
    const cargoLevelInput = document.querySelector("input[name=cargoMass]");
    const cargoLevel = cargoLevelInput.value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});