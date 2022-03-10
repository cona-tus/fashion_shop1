"use strict";

// navbar search button
const searchButton = document.querySelector(".search__icon");
searchButton.addEventListener("click", () => {
  const searchScreen = document.querySelector(".search__screen");
  searchScreen.classList.add("active");
});

const closeButton = document.querySelector(".close__icon");
closeButton.addEventListener("click", () => {
  const searchScreen = document.querySelector(".search__screen");
  searchScreen.classList.remove("active");
});

// sub search button
const subSearchButton = document.querySelector(".sub__search__icon");
subSearchButton.addEventListener("click", () => {
  const subSearchScreen = document.querySelector(".sub__search__screen");
  subSearchScreen.classList.add("active");
});

const subCloseButton = document.querySelector(".sub__close__icon");
subCloseButton.addEventListener("click", () => {
  const subSearchScreen = document.querySelector(".sub__search__screen");
  subSearchScreen.classList.remove("active");
});

const toggleButton = document.querySelector(".toggle__button");

toggleButton.addEventListener("click", () => {
  const toggleScreen = document.querySelector(".toggle__screen");
  toggleScreen.classList.toggle("active");
});

// main scroll slide-in animation
const lookFirstItem = document.querySelector(".lookbook__item:nth-child(1)");
const lookLastItem = document.querySelector(".lookbook__item:nth-child(4)");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);

  if (value > 1800) {
    lookFirstItem.style.animation = "slide-in 0.5s ease-in forwards";
  }

  if (value > 2500) {
    lookLastItem.style.animation = "slide-in 0.5s ease-in forwards";
  }
});
