

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget")
   missionTarget.innerHTML =
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= ${imageUrl}>
   `
}

function validateInput(testInput) {
    if (testInput === ""){return "Empty"
       }
    else if ( isNaN(testInput) === true){
        return "Not a Number" }
    else {
        return "Is a Number"
    } 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //pilot
   const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus =document.getElementById("launchStatus");
    if(validateInput(pilot)==="Empty"|| validateInput(copilot)==="Empty"||validateInput(cargoLevel)==="Empty"||validateInput(fuelLevel)==="Empty"){
        window.alert("All fields are required!")
    }
    else if (validateInput(pilot)=== "Is a Number"||validateInput(copilot)=== "Is a Number"||validateInput(cargoLevel)=== "Not a Number"||validateInput(fuelLevel)=== "Not a Number"){
        window.alert ("Make sure to enter valid information for each field!")
    }
    else {
        list.style.visibility= "visible"
//    // if (validateInput(pilot)=== "Empty"){
//       //  window.alert("All fields are required!")}
//    // else if (validateInput(pilot)=== "Is a Number"){
//         window.alert ("Make sure to enter valid information for each field!")
//     }else {
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`
     // }
//copilot
//   if (validateInput(copilot)=== "Empty"){
//         window.alert("All fields are required!")}
//     else if (validateInput(copilot)=== "Is a Number"){
//         window.alert ("Make sure to enter valid information for each field!")
//     }else {
        copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`}
    //  }
//fuelLevel
if (cargoLevel <= 10000 && fuelLevel >= 10000)
{
    launchStatus.innerHTML = "Shuttle is Ready for Launch"
    launchStatus.style.color = "#419F6A";
}
    // if (validateInput(fuelLevel)=== "Empty"){
    //     window.alert("All fields are required!")}
    // else if (validateInput(fuelLevel)=== "Not a Number"){
    //         window.alert ("Make sure to enter valid information for each field!")}
    else if (fuelLevel< 10000){
        fuelStatus.innerHTML= `Fuel level too low for launch`
        list.style.visibility= "visible"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "#C7254E";}
    else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`
       
    }
    
    
//cargolevel
    // if (validateInput(cargoLevel)=== "Empty"){
    //     window.alert("All fields are required!")}
    // else if (validateInput(cargoLevel)=== "Not a Number"){
         //   window.alert ("Make sure to enter valid information for each field!")}
     if (cargoLevel > 10000){
        cargoStatus.innerHTML= `Cargo mass too heavy for launch`
         list.style.visibility= "visible"
         launchStatus.innerHTML = "Shuttle Not Ready for Launch"
         launchStatus.style.color = "#C7254E";}
     else{
        cargoStatus.innerHTML = `Cargo mass low enough for launch`
    }
   

    
   console.log(pilot)
   console.log(copilot)
   console.log(fuelLevel)
   console.log(cargoLevel)
}

async function myFetch() {
    let response = await fetch('https://handlers.education.launchcode.org/static/planets.json', {
        headers: {
            Accept: 'application/json',}
        })  ;
    let data= await response.json();
    
    return data;   
};


function pickPlanet(planets) {
    let randomNumber = Math.floor(Math.random()*planets.length)
    return planets[randomNumber]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
