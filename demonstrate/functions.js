
// We're going to begin by assigning our HTML element to variables, so we can select them easily.

var title = document.getElementById("title");
var zone1 = document.getElementById("zone-1");
var zone2 = document.getElementById("zone-2");
var zone3 = document.getElementById("zone-3");

// This built in method gives the title of the page an event listener. The first argument decides what event to listen out for, and the second argument is a callback function.
title.addEventListener("click", function(){
  // Inside of this callback function is where we decide what occurs when the title gets clicked. In this case, we are revealing a hidden message on the page!
  document.getElementById("definition").style.display = "inline";
});

zone2.addEventListener("onload", function(){
  console.log("dfg");
  zone2.classList.add("green");
});

zone2.addEventListener("click", function(){
  zone2.classList.add("green");
});
