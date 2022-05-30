function scrollToTop() {
  window.scrollTo(0, 0);
}

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("to-top-button").style.bottom = "10px";
  } else {
    document.getElementById("to-top-button").style.bottom = "-100px";
  }
}

const menuBtn = document.getElementById("menu-btn");
var menuBox = document.getElementById("menu-box");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBox.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBox.classList.remove("open");
    menuOpen = false;
  }
});

function openMenu() {
  menuBtn.classList.remove("open");
  menuBox.classList.remove("open");
}

// menuBtn.addEventListener("mousedown", function () {
//   menuBtn.style.boxShadow = "none";
// });
// menuBtn.addEventListener("mouseup", function () {
//   menuBtn.style.boxShadow = "";
// });
// menuBtn.addEventListener("touchstart", function () {
//   menuBtn.style.boxShadow = "none";
// });
// menuBtn.addEventListener("touchend", function () {
//   menuBtn.style.boxShadow = "";
// });
// DO ALL BUTTON AT SAME TIME!
// const button = document.getElementsByClassName('button')
// button.addEventListener('mousedown', function(){
//   button.style.boxShadow = 'none'
// })
// button.addEventListener('mouseup', function(){
//   button.style.boxShadow = ''
// })

const aboutLink = document.getElementById("about-link");
aboutLink.addEventListener("mousedown", function () {
  aboutLink.style.boxShadow = "none";
});
aboutLink.addEventListener("mouseup", function () {
  aboutLink.style.boxShadow = "";
});
aboutLink.addEventListener("touchstart", function () {
  aboutLink.style.boxShadow = "none";
});
aboutLink.addEventListener("touchend", function () {
  aboutLink.style.boxShadow = "";
});
aboutLink.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBox.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBox.classList.remove("open");
    menuOpen = false;
  }
});

const servicesLink = document.getElementById("services-link");
servicesLink.addEventListener("mousedown", function () {
  servicesLink.style.boxShadow = "none";
});
servicesLink.addEventListener("mouseup", function () {
  servicesLink.style.boxShadow = "";
});
servicesLink.addEventListener("touchstart", function () {
  servicesLink.style.boxShadow = "none";
});
servicesLink.addEventListener("touchend", function () {
  servicesLink.style.boxShadow = "";
});
servicesLink.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBox.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBox.classList.remove("open");
    menuOpen = false;
  }
});

const testimonialsLink = document.getElementById("testimonials-link");
testimonialsLink.addEventListener("mousedown", function () {
  testimonialsLink.style.boxShadow = "none";
});
testimonialsLink.addEventListener("mouseup", function () {
  testimonialsLink.style.boxShadow = "";
});
testimonialsLink.addEventListener("touchstart", function () {
  testimonialsLink.style.boxShadow = "none";
});
testimonialsLink.addEventListener("touchend", function () {
  testimonialsLink.style.boxShadow = "";
});
testimonialsLink.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBox.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBox.classList.remove("open");
    menuOpen = false;
  }
});

const galleryLink = document.getElementById("gallery-link");
galleryLink.addEventListener("mousedown", function () {
  galleryLink.style.boxShadow = "none";
});
galleryLink.addEventListener("mouseup", function () {
  galleryLink.style.boxShadow = "";
});
galleryLink.addEventListener("touchstart", function () {
  galleryLink.style.boxShadow = "none";
});
galleryLink.addEventListener("touchend", function () {
  galleryLink.style.boxShadow = "";
});
galleryLink.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBox.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBox.classList.remove("open");
    menuOpen = false;
  }
});

const contactLink = document.getElementById("contact-link");
contactLink.addEventListener("mousedown", function () {
  contactLink.style.boxShadow = "none";
});
contactLink.addEventListener("mouseup", function () {
  contactLink.style.boxShadow = "";
});
contactLink.addEventListener("touchstart", function () {
  contactLink.style.boxShadow = "none";
});
contactLink.addEventListener("touchend", function () {
  contactLink.style.boxShadow = "";
});
contactLink.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBox.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBox.classList.remove("open");
    menuOpen = false;
  }
});

const facebookLink = document.getElementById("facebook-link");
facebookLink.addEventListener("mousedown", function () {
  facebookLink.style.boxShadow = "none";
});
facebookLink.addEventListener("mouseup", function () {
  facebookLink.style.boxShadow = "";
});
facebookLink.addEventListener("touchstart", function () {
  facebookLink.style.boxShadow = "none";
});
facebookLink.addEventListener("touchend", function () {
  facebookLink.style.boxShadow = "";
});
facebookLink.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBox.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBox.classList.remove("open");
    menuOpen = false;
  }
});
