window.addEventListener("load", function() {
   let form = document.querySelector('form');
   form.addEventListener('submit', function(event){
      event.preventDefault();

      let pilotName = document.querySelector('input[name=pilotName]').value;
      let copilotName = document.querySelector('input[name=copilotName]').value;
      let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
      let cargoMass = document.querySelector('input[name=cargoMass]').value;

      let faultyItems = document.getElementById('faultyItems');
      let launchStatus =document.getElementById('launchStatus');


      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
         alert("All fields are required!");

         // faultyItems.style.visibility = 'hidden';
         // launchStatus.innerHTML = "Awaiting Information Before Launch";

         }else{
            // if (isNaN(fuelLevel)){
               if (isNaN(pilotName)===false || isNaN(copilotName)===false || isNaN(fuelLevel) || isNaN(cargoMass)) {
               alert("Make sure you enter valid information for each field");

               // faultyItems.style.visibility = 'hidden';
               // launchStatus.innerHTML = "Awaiting Information Before Launch";

         }else{
         faultyItems.style.visibility = 'visible';
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName} Ready`;
         document.getElementById('copilotStatus').innerHTML = `Copilot ${copilotName} Ready`;

         if (fuelLevel < 10000){
         document.getElementById('fuelStatus').innerHTML = "Not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready to launch";
         launchStatus.style.color = 'red';
           
         }else{
         document.getElementById('fuelStatus').innerHTML = "Fuel level high enough for launch";
         launchStatus.innerHTML = "Shuttle ready for launch";
         launchStatus.style.color = 'green';

         if (cargoMass > 10000) {
            document.getElementById('cargoStatus').innerHTML = "Too much mass for the shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready to launch";
            launchStatus.style.color = 'red';

         }else{
            document.getElementById('cargoStatus').innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = 'green';
         }
            }
         }
      }  
   });
});

window.addEventListener('load', function(){
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
   response.json().then(function(planets){
      let planet = planets[3];
      let destination = document.getElementById('missionTarget');
      destination.innerHTML = 
         `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${planet.name}</li>
            <li>Diameter: ${planet.diameter}</li>
            <li>Star: ${planet.star}</li>
            <li>Distance from Earth: ${planet.distance}</li>
            <li>Number of Moons: ${planet.moons}</li>
         </ol>
         <img src="${planet.image}"></img>`

   })
   })
})

