const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let slideIndex = 0;

window.addEventListener("load", () => {
  setInterval(function () {
    plusSlides(1);
  }, 5000);
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
    element.classList.remove("showing");
  });
  slides[slideIndex].classList.add("showing");
  console.log(slideIndex);
}

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", function () {
  plusSlides(1);
});
prevBtn.addEventListener("click", function () {
  plusSlides(-1);
});
