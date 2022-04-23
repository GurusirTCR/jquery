$(function(){
  var gallery = $(".galleryimage").find("img");

  gallery.css({
    opacity : "0.5",
  }) 

  gallery.mouseleave(function() {
    $(this).stop().fadeTo(500,0.5);
  })


  gallery.mouseenter(function() {
    $(this).stop().fadeTo(500,1);
  })


})