$(function(){

  var h1 = $("h1");
  highlight(h1);


  
  var h2 = $("h2");
  highlight(h2);


  var h1 = $("h3");
  highlight(h1);

  var h1 = $("li:even");
  highlight(h1);

  
  var h1 = $("li:odd");
  highlight(h1);

  var f1 = $("form");
  highlight(f1);

});


function highlight(elements){
  elements.css({"background-color":"rgba(180, 180, 30, 0.8) "});
}