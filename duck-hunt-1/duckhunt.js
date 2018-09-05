// This is a jQuery "ready" closure:
jQuery(function() { //less characters than the $(document).ready(function){})
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // I'll do some of the work for you, first I will grab the <body></body>
  var $body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "duck"
  var $duck = $('<div>').addClass('duck').appendTo($body);

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  setInterval(function(){
    $duck.toggleClass('flap');
  }, 250);

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  $duck.css({
    top: '100px',
    left: '100px'
  });

  // 4. Try making the duck move to a different location after 1 second
  //method A
  // setInterval(function(){
  //   $duck.css({
  //       top: '100px',
  //       left: '100px'
  //   });
  // }, 1000);
  //method B
  $duck.animate({
        top: Math.random()*500,
        left: Math.random()*500
  }, 1000);

  // 5. Congratulations!
});
