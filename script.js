// This returns an array of all the buttons on the page.
var buttons = $("button" );

// Use this loop to iterate through `buttons` and create an event listener for each button.
// With `this`, you should only need to define ONE event listener.
// Do not modify the loop itself.
for(var i = 0; i < buttons.length; i++ ){
  buttons.eq(i).on( "click", function() {
    console.log( $(this).html() );
  });
}
