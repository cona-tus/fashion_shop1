let slideIndex = 0;

window.onload = () => {
  showSlides(slideIndex);

  setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
};

function moveSlides(n) {
  slideIndex = slideIndex + n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  const size = slides.length;

  if (n + 1 > size) {
    slideIndex = 0;
    n = 0;
  } else if (n < 0) {
    slideIndex = size - 1;
    n = size - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n].style.display = "block";
  dots[n].className += " active";
}
