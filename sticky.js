window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  navbar.classList.add("sticky")
}