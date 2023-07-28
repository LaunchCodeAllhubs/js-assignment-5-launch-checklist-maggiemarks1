// Write your JavaScript code here!

window.addEventListener("load", function() {

    const pilotName = document.getElementById("pilotName");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuel = document.querySelector("input[name=fuelLevel]")
    const cargoMass =document.querySelector("input[name=cargoMass]")
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus =document.getElementById("launchStatus");
   
let form = document.querySelector("form");
form.addEventListener("submit",function(){
    let pilot = pilotName.value
    let copilot = copilotName.value
    let fuelLevel = fuel.value
    let cargoLevel = cargoMass.value
    let list = document.getElementById("faultyItems")
formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
event.preventDefault()})



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let pickedPlanet = pickPlanet(listedPlanets)
       console.log(pickedPlanet)
       let name = pickedPlanet.name
       let diameter = pickedPlanet.diameter
       let star = pickedPlanet.star
       let distance = pickedPlanet.distance
       let moons = pickedPlanet.moons
       let imageUrl = pickedPlanet.image
    

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
   
});