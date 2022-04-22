$(function(){
    $('.blue').animate({
        marginLeft: "200px",
        opacity: "0",
        height: "50px",
        width: "50px",
        marginTop: "25px"
      }, 1000);
    
      // Animate font size of all paragraphs
      $("p").animate({
        "font-size": "20px",
        "font-weight":600,
      }, 1000);
})