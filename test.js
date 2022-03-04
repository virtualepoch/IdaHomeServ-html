var menubox = document.getElementById("menubox");
var menubtn = document.getElementById("menubtn");
var home = document.getElementById("home-link");
var updates = document.getElementById("updates-link");
var testimonials = document.getElementById("testimonials-link");
var gallery = document.getElementById("gallery-link");
var contact = document.getElementById("contact-link");
var facebook = document.getElementById("facebook-link");

menubtn.onclick = function fnMenubox() {
  if (menubox.className == "open") {
    menubox.className = "";
    home.className = "";
    updates.className = "";
    testimonials.className = "";
    gallery.className = "";
    contact.className = "";
    facebook.className = "";
  } else {
    menubox.className = "open";
    home.className = "open";
    updates.className = "open";
    testimonials.className = "open";
    gallery.className = "open";
    contact.className = "open";
    facebook.className = "open";
  }
};

function changeHome(){
  if (menubox.className == "open"){
    menubox.className = "";
    home.className = "";
    updates.className = "";
    testimonials.className = "";
    gallery.className = "";
    contact.className = "";
    facebook.className = "";
  }
};
function changeUpdates(){
  if (menubox.className == "open"){
    menubox.className = "";
    home.className = "";
    updates.className = "";
    testimonials.className = "";
    gallery.className = "";
    contact.className = "";
    facebook.className = "";
  }
};
function changeTestimonials(){
  if (menubox.className == "open"){
    menubox.className = "";
    home.className = "";
    updates.className = "";
    testimonials.className = "";
    gallery.className = "";
    contact.className = "";
    facebook.className = "";
  }
};
function changeGallery(){
  if (menubox.className == "open"){
    menubox.className = "";
    home.className = "";
    updates.className = "";
    testimonials.className = "";
    gallery.className = "";
    contact.className = "";
    facebook.className = "";
  }
};
function changeContact(){
  if (menubox.className == "open"){
    menubox.className = "";
    home.className = "";
    updates.className = "";
    testimonials.className = "";
    gallery.className = "";
    contact.className = "";
    facebook.className = "";
  }
};

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