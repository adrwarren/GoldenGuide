// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.width = "140px";
//   } else {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.width = "140px";
//   }
// }

// sticky1
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// $(window).scroll(function(){
//             if($(this).scrollTop() > 100){
//                 $('.nav').addClass('sticky')
//             } else{
//                 $('.nav').removeClass('sticky')
//             }
//         });

// for forms
var thankYou = $('.thankYou');
var checkOutButton = $('.row1');
checkOutButton.on("click", thankYouMessage);
function thankYouMessage() {
  thankYou.append(`<h4>Thank you for your interest. </h4>`)

  //clear all inputs
  var inputs = $('.');
  inputs.val(" ")

  //clear list
  var list = document.getElementById("myList");
  while (list.hasChildNodes()) {   
  list.removeChild(list.firstChild);
  }

  event.preventDefault();
}

