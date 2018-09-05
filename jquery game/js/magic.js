
  // Declare a variable called body, and assign it the value of the html tag 'body'


  //The Press Start, this begins the game and hides the logo
  var begin = $('.pressStart');

  // Select the Press Start element, and give it a click event listener.
  begin.click(function(){
    // uncomment these functions once the click event listener is ready
    // start();
    // begin.hide();
  });

  //This is how the racers are added to the page, but then hidden
  var $div1 = $('<div>');
  $div1.addClass('div1');
  $div1.appendTo(body);
  var div1pos = 0;
  $div1.hide();

  var $div2 = $('<div>');
  $div2.addClass('div2');
  $div2.appendTo(body);
  var div2pos = 0;
  $div2.hide();

  //This is how the bad guy is added to the page, but then hidden
  var $badguy = $('<div>');
  $badguy.addClass('badguy');
  $badguy.appendTo(body);
  var badpos = 0;
  $badguy.hide();

  //These are our event listeners
  function pressS(){
    // Upon keydown...
    $(document).keydown(function(z){
      // If the correct key is pressed...
      if (z.keyCode === 83){
        // Move our character over 35 pixels
        div1pos += 35;
        $div1.css({'left': '+=35px'});
        if(div1pos >= 1365){
          // If our character reaches the finish line, they get a winning alert!
          var p1Wins = confirm("Sonic wins! Play again?");
          if(p1Wins === true){
            // Reload the page once the notification gets a response
            location.reload();
          } else{
            location.reload();
          }
        }
      }
    });
  }

  function pressK(){
    // Upon keydown...
    $(document).keydown(function(r){
      // If the correct key is pressed...
      if (r.keyCode === 75){
        // Move our character over 35 pixels
        div2pos += 35;
        $div2.css({'left': '+=35px'});
        if(div2pos >= 1365){
          // If our character reaches the finish line, they get a winning alert!
          var p2Wins = confirm("Knuckles wins! Play again?");
          if(p2Wins === true){
            // Reload the page once the notification gets a response
            location.reload();
          } else{
            location.reload();
          }
        }
      }
    });
  }

  // The bad guy functions the same as the characters, except he moves on his own, over time
  function badGuyRuns(){
    setInterval(function(){
      badpos += 80;
      $badguy.animate({'left': '+=80px'});
      if(badpos >= 1440){
        var badWins = confirm("You let Eggman get away! Play again?");
        if(badWins === true){
          location.reload();
        } else{
          location.reload();
        }
      }
    }, 500);
  }

  //This function is activated when you click on the logo.
  function start(){
    // These 3 lines make our characters appear
    $div1.show();
    $div2.show();
    $badguy.show();
    // This line gets the bad guy moving
    badGuyRuns();
    // These lines add event listeners to the DOM, which listen for the S and K key being pressed
    pressK();
    pressS();
  }


// PHEW
