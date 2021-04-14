// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");


    form.addEventListener("submit", function(event) {
       event.preventDefault()

       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      //document.getElementById("faultyItems").style.visibilty = "visibile";
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" 
       || cargoMassInput.value === "") {
         alert("All fields are required!");
          // stop the form submission
          event.preventDefault();
          return;
       }
       //const regex = /^[a-zA-Z/s]*$/
       //regex.test(pilotName.value)
     if(typeof pilotNameInput.value !== "string"){
        event.preventDefault()
        alert("Pilot name must be letters")
        return;
     }
     if (typeof copilotNameInput.value !== "string"){
        event.preventDefault()
        alert("Copilot must be letters")
        return false
     }
     if (isNaN(fuelLevelInput.value)){
     event.preventDefault()
     alert("Please use numbers")
     return false
     }

     if (isNaN(cargoMassInput.value)){
     event.preventDefault()
     alert("Please use numbers")
     return false
      }
     
     if (fuelLevelInput.value < 10000){
        document.getElementById("faultyItems").setAttribute("style", "visibility: visible");
        document.getElementById("launchStatus").style.color="red"
        faultyItems.innerHTML = `
        <ol>
           <li id="pilotStatus">${pilotNameInput.value} Ready</li>
           <li id="copilotStatus">${copilotNameInput.value} Ready</li>
           <li id="fuelStatus">Need more fuel!</li>
          
        </ol>
        `;
        launchStatus.innerHTML = `
        <h2 id="launchStatus">Shuttle is not Ready</h2>
        `
     }

      if (cargoMassInput.value > 10000){
         document.getElementById("faultyItems").setAttribute("style", "visibility: visible");
        document.getElementById("launchStatus").style.color="red"
        faultyItems.innerHTML = `
        <ol>
           <li id="pilotStatus">${pilotNameInput.value} Ready</li>
           <li id="copilotStatus">${copilotNameInput.value} Ready</li>
           <li id="fuelStatus">Too much cargo!</li>
          
        </ol>
        `;
        launchStatus.innerHTML = `
        <h2 id="launchStatus">Shuttle is not Ready</h2>
        `;
    }

    else
       //(cargoMassInput.value > 10000 && fuelLevelInput.value < 10000) 
       {

        document.getElementById("faultyItems").setAttribute("style", "visibility: visible");
        document.getElementById("launchStatus").style.color="green"
        faultyItems.innerHTML = `
        <ol>
        <li id="pilotStatus">${pilotNameInput.value} Ready</li>
        <li id="copilotStatus">${copilotNameInput.value} Ready</li>
        <li id="fuelStatus">Fuel level high enough for launch</li>
        <li id="cargoStatus">Cargo mass low enough for launch</li>
        </ol>
        `;
        launchStatus.innerHTML = `
        <h2 id="launchStatus">Shuttle Ready!</h2>
        `;
       }
     
let planet;
let dest;
dest = 3
     
        fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function(response){
           response.json().then(function(json){
              console.log(json);
              //planet = json[dest];
               console.log(json[dest])
              missionTarget.innerHTML= `
        <h2>Mission Destinaton</h2>
        <ol>
           <li>Name: ${json[dest].name}</li>
           <li>Diameter: ${json[dest].diamter}</li>
           <li>Star: ${json[dest].star}</li>
           <li>Distance from Earth: ${json[dest].distance}</li>
           <li>Number of Moons: ${json[dest].moon}</li>
        </ol>
        <img src="${json[dest].image}"/>
        `;
        console.log("works here")
           })
        }) 
        

   })
});