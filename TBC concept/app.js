const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 5,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 80,
  },
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".off_screen_menu");
let locationButton = document.querySelector(".nav-button-location");
let contactButton = document.querySelector(".nav-button-contact");
let emailButton = document.querySelector(".nav-button-email");
let navButton = document.querySelector(".nav-button");
let x = document.querySelector(".fa-x");
let circles = document.querySelector(".circles");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let header = document.querySelector("header");
let footer_resposive = document.querySelector(".responsive-footer-container");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");

  if (burger.classList.contains("active")) {
    main.classList.add("hide-main"),
      footer_resposive.classList.add("hide-footer-responsive");
    footer.classList.add("hide-footer");
  } else {
    main.classList.remove("hide-main");
    footer_resposive.classList.remove("hide-footer-responsive");
    footer.classList.remove("hide-footer");
  }
});

navButton.addEventListener("click", function () {
  locationButton.classList.toggle("active");
  emailButton.classList.toggle("active");
  contactButton.classList.toggle("active");
  x.classList.toggle("active");
  circles.classList.toggle("active");
});
