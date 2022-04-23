$(function(){


  var thred = $("li li").filter(function(index){
    return index%3==0;
  });
  highlight(thred);

  
  var h1 = $("li").first();
  highlight(h1);

  var h1 = $("li").last();
  highlight(h1);

  var forth = $("li").eq(4);
  highlight(forth);
  
  var forth = $("li").eq(6);
  highlight(forth);  
});


function highlight(elements){
  elements.css({"background-color":"rgba(180, 180, 30, 0.8) "});
}