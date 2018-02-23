jQuery(function() {
  //just a basic
  var body = $('body');

  //the Press Start
  var begin = $('.pressStart');
  begin.click(function(){
    start();
    begin.hide();
  });

  //the racers
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

  //the enemy
  var $badguy = $('<div>');
  $badguy.addClass('badguy');
  $badguy.appendTo(body);
  var badpos = 0;
  $badguy.hide();

  //button presses.
  function pressZ(){
    $(document).keydown(function(z){
      if (z.keyCode === 90){
        div1pos += 35;
        $div1.css({'left': '+=35px'});
        if(div1pos >= 1365){
          var p1Wins = confirm("Sonic wins! Play again?");
          if(p1Wins === true){
            location.reload();
          } else{
            location.reload();
          }
        }
      }
    });
  }

  function pressRight(){
    $(document).keydown(function(r){
      if (r.keyCode === 39){
        div2pos += 35;
        $div2.css({'left': '+=35px'});
        if(div2pos >= 1365){
          var p2Wins = confirm("Knuckles wins! Play again?");
          if(p2Wins === true){
            location.reload();
          } else{
            location.reload();
          }
        }
      }
    });
  }

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

  //the entire game starts
  function start(){
    badGuyRuns();
    $div1.show();
    $div2.show();
    $badguy.show();
    pressRight();
    pressZ();
  }
});
