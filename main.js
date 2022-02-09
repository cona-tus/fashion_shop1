const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideText = document.querySelectorAll(".slide__text");
let slideIndex = 0;
const SHOWING_CLASS = "showing";

window.addEventListener("load", () => {
  init();
  setInterval(function () {
    plusSlides(1);
  }, 5000);
});

function init() {
  const firstSlide = document.querySelector(".slide");
  const firstTitle = document.querySelector(".slide__title");
  firstSlide.classList.add(SHOWING_CLASS);
  firstTitle.style.animation = "fade-in 0.5s ease-in";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  slideIndex = n;
  if (slideIndex == -1) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex === totalSlides) {
    slideIndex = 0;
  }
  slides.forEach(function (element) {
    element.classList.remove(SHOWING_CLASS);
  });
  slides[slideIndex].classList.add(SHOWING_CLASS);
  slideAnimation();
}

function slideAnimation() {
  const slideTitle = document.querySelectorAll(".slide__title");

  slideTitle.forEach(function (element) {
    element.style.animation = "";
  });
  slideTitle[slideIndex].style.animation = "fade-in 0.5s ease-in";
}

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", function () {
  plusSlides(1);
});
prevBtn.addEventListener("click", function () {
  plusSlides(-1);
});
