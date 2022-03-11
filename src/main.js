"use strict";

// navbar search button
const searchButton = document.querySelector(".search__icon");
const closeButton = document.querySelector(".close__icon");
const searchScreen = document.querySelector(".search__screen");

searchButton.addEventListener("click", () => {
  searchScreen.classList.add("active");
});

closeButton.addEventListener("click", () => {
  searchScreen.classList.remove("active");
});

// sub search button
const subSearchButton = document.querySelector(".sub__search__icon");
const subSearchScreen = document.querySelector(".sub__search__screen");
const subCloseButton = document.querySelector(".sub__close__icon");
const toggleButton = document.querySelector(".toggle__button");

subSearchButton.addEventListener("click", () => {
  subSearchScreen.classList.add("active");
});

subCloseButton.addEventListener("click", () => {
  subSearchScreen.classList.remove("active");
});

toggleButton.addEventListener("click", () => {
  const toggleScreen = document.querySelector(".toggle__screen");
  toggleScreen.classList.toggle("active");
});
