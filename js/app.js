//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox



//An image to overlay


//A caption to overlay

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $imageCaption = $('<p></p>');
//Add overlay
$("body").append($overlay);
$overlay.append($image);
$overlay.append($imageCaption);


//Capture the click event on a link to an image
$("#gallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  console.log(imageLocation);
  //Update overlay with the image linked in the link
  $("#overlay img").attr("src", imageLocation);
  var imageText = $(this).children("p").text();
  $imageCaption.text(imageText);
  //Show the overlay.
  $overlay.show();
});
  
  //Get child's alt attribute and set caption
  

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
})
  










