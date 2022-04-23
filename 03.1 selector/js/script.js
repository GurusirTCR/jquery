$(function () {
    var redBoxes = $(".red");
    highlight(redBoxes);
});

$(function () {
    var p = $("p");
    highlight(p);

    var p = $("#list");
    highlight(p);
    
    var emails = $("input[type=text]");
    highlight(emails);

    var pass = $("input[type=password]");
    highlight(pass);

    var li = $("ul:even");
    highlight1(li);

    var selected = $("input:checked");
    console.log(selected.length);


})
function highlight(element) {
    element.css("background-color", "rgba(180, 180, 30, 0.8)");
  }
  function highlight1(element) {
    element.css("background-color", "rgba(200, 120, 30, 0.8)");
  }