const slideshow = document.querySelector(".slideshow__section");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideText = document.querySelectorAll(".slide__text");
let slideIndex = 0;
const SHOWING_CLASS = "showing";

window.addEventListener("load", () => {
  init();
});

function init() {
  const firstSlide = document.querySelector(".slide");
  const firstTitle = document.querySelector(".slide__title");
  const firstButtion = document.querySelector(".more__button");

  firstSlide.classList.add(SHOWING_CLASS);
  firstTitle.style.animation = "fade-in 0.5s ease-in";
  firstButtion.style.animation = "fade-in 0.3s ease-in 0.3s forwards";
}

slideshow.addEventListener("mouseover", () => {
  clearInterval(autoSlider);
});
slideshow.addEventListener("mouseleave", () => {
  autoSlider = setInterval(() => {
    plusSlides(1);
  }, 2000);
});

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
  const slideButton = document.querySelectorAll(".more__button");

  slideTitle.forEach(function (element) {
    element.style.animation = "";
  });
  slideTitle[slideIndex].style.animation = "fade-in 0.5s ease-in";

  slideButton.forEach(function (element) {
    element.style.animation = "";
  });
  slideButton[slideIndex].style.animation =
    "fade-in 0.3s ease-in 0.3s forwards";
}

const nextBtn = document.querySelector("#slider__next");
const prevBtn = document.querySelector("#slider__prev");
nextBtn.addEventListener("click", () => {
  plusSlides(1);
});
prevBtn.addEventListener("click", () => {
  plusSlides(-1);
});

let autoSlider = setInterval(() => {
  plusSlides(1);
}, 2000);
