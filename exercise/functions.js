// Starter Variables
var zones = document.getElementsByClassName("zone");
var zone1 = document.getElementById("zone-1");
var zone2 = document.getElementById("zone-2");
var zone3 = document.getElementById("zone-3");
var zone4 = document.getElementById("zone-4");

var all = [zone1, zone2, zone3, zone4];

console.log('number of zones available: ', all.length);

// This gives a class 'green' to the second zone when moused over.
zone2.addEventListener("mouseover", function(){
  zone2.classList.add("green");
});
// ... But if your mouse leaves this zone, it removes the class.
zone2.addEventListener("mouseout", function(){
  zone2.classList.remove("green");
});
