var menubox = document.getElementById("menubox");

function menuOpen() {
  if (menubox.className == "open") {
    menubox.className = "";
  } else {
    menubox.className = "open";
  }
}

const mainSection = document.getElementById('main-section')

function scrollToTop() {
  mainSection.scrollTo(0, 0);
}

mainSection.onscroll = function () {
  scroll();
};

function scroll() {
  if (mainSection.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("to-top-button").style.bottom = "10px";
  } else {
    document.getElementById("to-top-button").style.bottom = "-100px";
  }
}

/*


var home = document.getElementById("home");
var about = document.getElementById("about");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
var actionbtn = document.getElementById("actionbtn");
var actionbtn2 = document.getElementById("actionbtn2");
var actionbtn3 = document.getElementById("actionbtn3");
var actionbtn4 = document.getElementById("actionbtn4");

function changeHome() {
  home.style.display = "block";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  actionbtn.style.display = "block";
  actionbtn2.style.display = "none";
  actionbtn3.style.display = "none";
  actionbtn4.style.display = "none";
  menubox.className = "";
  home.className = "";
  updates.className = "";
  testimonials.className = "";
  gallery.className = "";
}
function changeAbout() {
  home.style.display = "none";
  about.style.display = "block";
  projects.style.display = "none";
  contact.style.display = "none";
  actionbtn.style.display = "none";
  actionbtn2.style.display = "block";
  actionbtn3.style.display = "none";
  actionbtn4.style.display = "none";
  menubox.className = "";
  home.className = "";
  updates.className = "";
  testimonials.className = "";
  gallery.className = "";
}

function changeProjects() {
  home.style.display = "none";
  about.style.display = "none";
  projects.style.display = "block";
  contact.style.display = "none";
  actionbtn.style.display = "none";
  actionbtn2.style.display = "none";
  actionbtn3.style.display = "block";
  actionbtn4.style.display = "none";
  menubox.className = "";
  home.className = "";
  updates.className = "";
  testimonials.className = "";
  gallery.className = "";
}
function changeContact() {
  home.style.display = "none";
  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "block";
  actionbtn.style.display = "none";
  actionbtn2.style.display = "none";
  actionbtn3.style.display = "none";
  actionbtn4.style.display = "block";
  menubox.className = "";
  home.className = "";
  updates.className = "";
  testimonials.className = "";
  gallery.className = "";
}
*/
