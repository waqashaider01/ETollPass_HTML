 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 


// Toogle Header Start 
 
let menuBar=document.getElementById('menuBar')
 console.log(menuBar)
$(document).ready(function () {
$("#langBtn").click(function () {
  
 
  $("#language").toggle();
  $("#icon1").toggleClass("rotate");
  $("#Support").hide()
  $("#langBtn").css("border-bottom", " 3px solid  #083994");
 
  $("#suprtBtn").css("border-bottom", "none");
  

});
$("#suprtBtn").click(function () {

  $("#Support").toggle();
  $("#icon2").toggleClass("rotate");
  $("#language").hide();
  $("#suprtBtn").css("border-bottom", " 3px solid  #083994");
  $("#langBtn").css("border-bottom", "none");
  // $("#menuBar").toggle();


   

   

});
});

 

// Toogle Header Start 
