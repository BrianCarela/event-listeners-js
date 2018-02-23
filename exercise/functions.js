// Starter Variables
var zones = document.getElementsByClassName("zone");
var zone1 = document.getElementById("zone-1");
var zone2 = document.getElementById("zone-2");
var zone3 = document.getElementById("zone-3");
var zone4 = document.getElementById("zone-4");

var all = [zone3, zone1, zone2, zone4];

console.log('number of zones available: ', all.length);

// Write the Event Listeners!
function bindRed(element){
  // This Event Listener should give a class 'red' to the zone when moused over.

    // element.classList.add("red");

  // ... But if your mouse leaves this zone, it removes the class.

    // element.classList.remove("red");

}

// Write the Event Listeners!
function bindGreen(element){
  // This Event Listener should give a class 'green' to the zone when moused over.
  element.addEventListener("mouseover", addGreen(element));
  // ... But if your mouse leaves this zone, it removes the class.
  element.addEventListener("mouseout", removeGreen(element));
}

// Logic loop.
function clicker(element){
  element.addEventListener("click", function(){
    // Give the next zone in line a permanent green background
    element.classList.add("green");
    // Remove such zone from the array
    all.pop();
    // Check for winner
    winner();
    // Bind the next zone in line. Won't work if all zones are removed from the array
    binder();
  });
}

// Adding & Removing red class
function addRed(element){
  element.classList.add("red");
}

function removeRed(element){
  element.classList.remove("red");
}

// Adding & Removing green class
function addGreen(element){
  element.classList.add("green");
}

function removeGreen(element){
  element.classList.remove("green");
}

// Check to see if the puzzle is solved
function winner(){
  if (all.length === 0){
    document.getElementById("announcement").style.display = "inline";
  }
}

// unbinds the red Event Listeners before binding it green
function unbinder(element){
  for (let e = all.length - 1; e >= 0; e--) {
    element.removeEventListener("mouseover", addRed(element));
    element.removeEventListener("mouseout", removeRed(element));
  }
}

// Checks to see if the last element in the list is the next piece of the puzzle
function checker(element){
  if(element == all[all.length-1]){
    unbinder(element);
    bindGreen(element);
    clicker(element);
  } else {
    bindRed(element);
  }
}

// Binds the event listeners
function binder(){
  for (var i = all.length - 1; i >= 0; i--) {
    checker(all[i]);
  }
}

binder();

// Honestly, don't even look down here. Removing event listeners is a pain in JS, as opposed to JQuery, so now my code is at the least buggy version I could make it before 5 AM, and I stripped this exercise down to a single instance of students filling in the correct code.
// line 100. Goodnight.
