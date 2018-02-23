// 3 types of event listeners: click, hover, keyboard button. Don't let this get too complicated

document.getElementById("title").addEventListener("click", function(){
  console.log("hi");
  document.getElementById("definition").style.display = "inline";
});

document.getElementById("zone-1").addEventListener("click", function(){
  console.log("first test");
});
