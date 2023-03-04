// <<<<<<<<<<<<<<<<<<<<<<< testimonials>>>>>>>>>>>>>
$(".testmonial_slider_area").owlCarousel({
  autoplay: true,
  slideSpeed: 1000,
  items: 3,
  loop: true,
  nav: true,
  navText: [
    '<i class="fa fa-arrow-left fa-2x"></i>',
    '<i class="fa fa-arrow-right fa-2x"></i>'
  ],
  margin: 30,
  dots: true,
  responsive: {
    320: {
      items: 1
    },
    767: {
      items: 2
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

// <<<<<<<<<<<<<<<<< testimonials >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("nav-sticky");
  } else {
    $(".navbar").removeClass("nav-sticky");
  }
});

// <<<<<<<<<<<<<<<<<< slider >>>>>>>>>>>>>>>>>>>>

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// <!-- <<<<<<<<<<<<< my tow box heading >>>>>>>>>>>>>> -->
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// <<<<<<<<<<<<<<<<<<<< forms>>>>>>>>>>>>>>>>>>>>

const firebaseConfig = {
  apiKey: "AIzaSyAMMii0GIj3-IWMumTBJwXO1UY5BP8RBhs",
  authDomain: "my-projects-6e822.firebaseapp.com",
  databaseURL: "https://my-projects-6e822-default-rtdb.firebaseio.com",
  projectId: "my-projects-6e822",
  storageBucket: "my-projects-6e822.appspot.com",
  messagingSenderId: "1003294327261",
  appId: "1:1003294327261:web:43738e12468ea313d43634",
  measurementId: "G-N4BJG06R33"
};

// <<<<<<<<<<<< intilize>>>>>>>>
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");
document.getElementById("contacForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventdefault();

  var email = getElementVal("email");
  var phone = getElementVal("phone");

  saveMessages(email, phone);
  // <<<<<<<<<<<<< enable alert>>>>>>>>>>>>
  document.querySelector(".alert").styledisplay = "block";

  // <<<<<<<<<<<<<remove the alert>>>>>>>>>

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // <<<<<<<<<reset the form>>>>>>>>
  document.getElementById("contactForm").reset();
}

const saveMessages = (email, phoene) => {
  var newContactform = contactFormDB.push();

  newContactForm.set({
    email: email,
    phone: phone
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// <<<<<<<<<<<<<<<<< crasual>>>>>>>>>>>>>>
