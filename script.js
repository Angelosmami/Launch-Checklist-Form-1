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


      if (pilotName === "" || copilotName === "" || fuelLevel === "" || isNaN(fuelLevel) || cargoMass === "" || isNaN(cargoMass)) {
         alert("All fields are required!");

         faultyItems.style.visibility = 'hidden';
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         
         

         }else{
         faultyItems.style.visibility = 'visible';
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} Ready`;
         document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot} Ready`;

         if (fuelLevel < 10000){
         document.getElementById('fuelStatus').innerHTML = "Not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready to launch";
         launchStatus.style.color = 'red';
           
         }else{
         launchStatus.innerHTML = "Shuttle ready for launch";
         launchStatus.style.color = 'green';

         if (cargoMass > 10000) {
            document.getElementById('cargoStatus').innerHTML = "Too much mass for the shuttle to take off"
            launchStatus.innerHTML = "Shuttle not ready to launch";
            launchStatus.style.color = 'red';

         }else{
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = 'green';
            }
         }
      }  
   });
});


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
