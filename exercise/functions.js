// Starter Variables
var zones = document.getElementByClassName("zone");
var zone1 = document.getElementById("zone-1");
var zone2 = document.getElementById("zone-2");
var zone3 = document.getElementById("zone-3");
var zone4 = document.getElementById("zone-4");

var all = [zone1, zone2, zone3, zone4];

console.log('number of zones available: ', all.length);

// Event Listeners don't always use a callback function, they can use functions we write beforehand.
// This can help us remove Event Listeners

function clicker(element){
  element.addEventListener("click" function(){
    element.classList.add('green');
     all.pop();
     // wow, come back to this... I need to remove event listeners individually
     zones.removeEventListener("click", );
     winner();
     binder();
   });
}

function binder(){
  console.log('test');
}

// This begins binding the Event Listeners
binder();
