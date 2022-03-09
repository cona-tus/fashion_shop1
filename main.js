"use strict";

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
