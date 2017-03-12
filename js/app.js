//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox



//An image to overlay


//A caption to overlay

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
//Add overlay
$("body").append($overlay);
$overlay.append($image);


//Capture the click event on a link to an image
$("#gallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  console.log(imageLocation);
  //Update overlay with the image linked in the link
  $("#overlay img").attr("src", imageLocation)
  //Show the overlay.
  $overlay.show();
});
  
  //Get child's alt attribute and set caption
  

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
})
  










