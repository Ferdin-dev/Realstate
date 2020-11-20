function openNav() {
  document.getElementById("navmenu").style.top = "inherit";
}

function closeNav() {
  document.getElementById("navmenu").style.top = "-220px";
}

function dropMenu() {
  document.getElementById("dropdown").classList.toggle("show");
}

// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementById('navmenu');
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

/* Accordion button */
let accordion = document.getElementsByClassName("accordion-btn");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Counter section */
$(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });
});

/* Owl carousel */
$(function () {
  $("#customers-testimonial").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoPlayHoverPause: true
  });
});