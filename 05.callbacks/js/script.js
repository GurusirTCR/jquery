// $(function(){

//   $('.red').animate({
//     opacity:"0"
//   },1000)

//   $('.green').animate({
//     opacity:"0"
//   },2000)

//   $('.blue').animate({
//     opacity:"0"
//   },3000)

// })
// =====================================
$(function() {
  $(".red").fadeTo(1000,0, function(){
  
    $(".green").fadeTo(1000,0, function(){
    
      $(".blue").fadeTo(1000,0);
    });
  });
});