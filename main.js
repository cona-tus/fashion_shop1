const slideshow = document.querySelector(".slideshow");
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const sliderWidth = slideshow.clientWidth;

window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 5000);
};

slides.forEach(function (element) {
  element.style.width = sliderWidth + "px";
});

const slider = document.querySelector(".slider");
slider.style.width = sliderWidth * totalSlides + "px";

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
nextBtn.addEventListener("click", function () {
  plusSlides(1);
});
prevBtn.addEventListener("click", function () {
  plusSlides(-1);
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlides(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  slideIndex = n;
  if (slideIndex == -1) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex === totalSlides) {
    slideIndex = 0;
  }
  slider.style.left = -(sliderWidth * slideIndex) + "px";
  slideAnimation();
}

function slideAnimation() {
  const slideText = document.querySelectorAll(".slide__text");
  slideText.forEach(function (element) {
    element.classList.remove("fade");
  });
  slideText[slideIndex].classList.add("fade");
}
