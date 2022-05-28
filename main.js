var menubox = document.getElementById("menubox");

function menuOpen() {
  if (menubox.className == "open") {
    menubox.className = "";
  } else {
    menubox.className = "open";
  }
}

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

const menuBtn = document.getElementById('menubtn')
menuBtn.addEventListener('mousedown', function(){
  menuBtn.style.boxShadow = 'none';
})
menuBtn.addEventListener('mouseup', function(){
  menuBtn.style.boxShadow = '';
})

// DO ALL BUTTON AT SAME TIME!
// const button = document.getElementsByClassName('button')
// button.addEventListener('mousedown', function(){
//   button.style.boxShadow = 'none'
// })
// button.addEventListener('mouseup', function(){
//   button.style.boxShadow = ''
// })

const aboutLink = document.getElementById('about-link')
aboutLink.addEventListener('mousedown', function(){
  aboutLink.style.boxShadow = 'none';
})
aboutLink.addEventListener('mouseup', function(){
  aboutLink.style.boxShadow = '';
})

const servicesLink = document.getElementById('services-link')
servicesLink.addEventListener('mousedown', function(){
  servicesLink.style.boxShadow = 'none';
})
servicesLink.addEventListener('mouseup', function(){
  servicesLink.style.boxShadow = '';
})

const testimonialsLink = document.getElementById('testimonials-link')
testimonialsLink.addEventListener('mousedown', function(){
  testimonialsLink.style.boxShadow = 'none';
})
testimonialsLink.addEventListener('mouseup', function(){
  testimonialsLink.style.boxShadow = '';
})

const galleryLink = document.getElementById('gallery-link')
galleryLink.addEventListener('mousedown', function(){
  galleryLink.style.boxShadow = 'none';
})
galleryLink.addEventListener('mouseup', function(){
  galleryLink.style.boxShadow = '';
})

const contactLink = document.getElementById('contact-link')
contactLink.addEventListener('mousedown', function(){
  contactLink.style.boxShadow = 'none';
})
contactLink.addEventListener('mouseup', function(){
  contactLink.style.boxShadow = '';
})

const facebookLink = document.getElementById('facebook-link')
facebookLink.addEventListener('mousedown', function(){
  facebookLink.style.boxShadow = 'none';
})
facebookLink.addEventListener('mouseup', function(){
  facebookLink.style.boxShadow = '';
})
