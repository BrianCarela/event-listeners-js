
// We're going to begin by assigning our HTML element to variables, so we can select them easily.

var zone1 = document.getElementById("zone-1");
var zone2 = document.getElementById("zone-2");
var zone3 = document.getElementById("zone-3");

var def1 = document.getElementById("definitionOne");
var def2 = document.getElementById("definitionTwo");
var def3 = document.getElementById("definitionThree");
var def4 = document.getElementById("definitionFour");

// This built in method gives the title of the page an event listener.
// The first argument decides what event to listen out for, and the second argument is a callback function.
button.addEventListener("click", function(){
  // Inside of this callback function is where we decide what occurs when the title gets clicked.
  // In this case, we are revealing a hidden message on the page!
  def1.style.display = "inline";
});

// This Event Listener targets the first zone, and when it gets clicked...
zone1.addEventListener("click", function(){
  // It adds a class 'green'! In the css, anything with the class 'green' has a background color of green
  zone1.classList.add("green");
  def2.style.display = "inline";
});

// This gives a class 'green' to the second zone when moused over.
zone2.addEventListener("mouseover", function(){
  zone2.classList.add("green");
  def3.style.display = "inline";
});
// ... But if your mouse leaves this zone, it removes the class.
zone2.addEventListener("mouseout", function(){
  zone2.classList.remove("green");
  def3.style.display = "none";
});

// For adding Event Listeners that involve pressing a button on the keyboard, you have to have the entire window listen for the event.
// This is because a specific element on the page won't 'hear' such event.
window.addEventListener("keypress", function(e){
  var keyCode = e.keyCode;
  // Where do Astronauts go to drink? Keycode 32!
  if(keyCode == 32){
    zone3.classList.add("green");
    def4.style.display = "inline";
  }
});
