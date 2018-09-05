console.log('starter2.js linked');

//code goes here

  //grab all zones, individually too this time
  var $zs = $('.zone');
  var $z1 = $('#zone-1');
  var $z2 = $('#zone-2');
  var $z3 = $('#zone-3');
  var $z4 = $('#zone-4');

  var arr = [$z2, $z3, $z1, $z4];
  console.log('length of things', arr.length);

  //my functions for stuff

  //permanently adds green class, restarts binding process
  function clickR(element){
    $(element).click(function(){
      $(element).addClass('green');
      arr.pop();
      $zs.unbind();
      winnR();
      bindR();
    });
  }

  //binds the signal for the incorrect box
  function redBound(element){
    // Select the element, and give it a hover event listener

      // Select the element, and toggle the class 'red'


  }

  //binds the signal for the correct box
  function greenBound(element){
     // Select the element, and give it a hover event listener

      // Select the element, and toggle the class 'green'


  }

  //goes about binding things across the array
  function bindR(){
    $.each(arr, function(index, element){
      checkR(element);
    });
  }

  //check for winner
  function winnR(){
    if (arr.length === 0){
      window.alert('My code is slick! Oh, and I guess you win too');
    }
  }

  //the main course. This is really the body of my code.
  function checkR(element){
    // console.log(element);
    if(element === arr[arr.length-1]){
      greenBound(element);
      clickR(element);
    }
    else {
      redBound(element);
    }
  }

  //begins the process
  bindR();

