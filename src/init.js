$(document).ready(function() {
  
  window.dancers = [];

    // console.log($(window.dancers[i].$node[0]).hasClass('dancer2'));
    //   console.log(window.dancers[i])
    //   console.log(window.dancers[i].$node[0])

  $(document).on('click', '.spell', function() {
  console.log('clicked spell')
    for (var i = 0; i < window.dancers.length; i++) {
      if ($(window.dancers[i].$node[0]).hasClass('dancer2')) {
        $(window.dancers[i].$node[0]).remove();
      }
    }
  });

 $(document).on('click', '.spell', function() {
    console.log('ex clicked')
    var ex = window['makeExplosion'];
    var explosion = new ex(100,100,1000);
  $('body').append(explosion.$node);
    console.log(explosion)
    explosion.explosion();
    $(explosion).toggle()
  });

  $(document).on('click', '.lineUp', function() {
    for (var i = 0; i < window.dancers.length; i++) {
  
      window.dancers[i].lineUp();
    }
  });

  $(document).on('click', '.goBack', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].goBack();
    }
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    //dancerMakerFunction = 'makeBlinkyDancer'
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // window[makeBlinkyDancer] = function()
    //dancerMakerFunction = makeBlinkyDancer()
   
    
    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );  
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

});



