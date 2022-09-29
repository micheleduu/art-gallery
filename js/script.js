import LocomotiveScroll from "https://cdn.skypack.dev/locomotive-scroll";

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});

var mybutton = document.getElementById("back-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// var cursor = document.getElementById("cursor");
// document.body.addEventListener("mousemove", function(e) {
//   cursor.style.left = e.clientX + "px",
//     cursor.style.top = e.clientY + "px";
// });
