$(function(){
 var gallery = $(".galleryimage").find("img").first();
  
  var img = [
    'img/1.png',
    'img/2.png',
    'img/3.png'
  ]
var i=0;

setInterval(function(){
i=(i+1) % img.length;

gallery.fadeOut(function(){
  $(this).attr("src",img[i]);
  $(this).fadeIn();
})
console.log(i);
},2000);

})