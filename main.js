"use strict";

const trendingBtnPrev = document.querySelector("#trending__prev");
const trendingBtnNext = document.querySelector("#trending__next");
const trendingItems = document.querySelector(".trending__items");
let initial = 0;
let amount = 500;

trendingBtnNext.addEventListener("click", () => {
  initial -= amount;
  trendingItems.style.transform = "translateX(" + initial + "px)";
  console.log(initial);

  if (initial !== -1000) {
    trendingBtnNext.classList.remove("hidden");
    trendingBtnPrev.classList.remove("hidden");
  } else {
    trendingBtnNext.classList.add("hidden");
  }
});

trendingBtnPrev.addEventListener("click", () => {
  trendingBtnPrev.classList.add("hidden");
  initial += amount;
  trendingItems.style.transform = "translateX(" + initial + "px)";
  console.log(initial);

  if (initial !== 0) {
    trendingBtnPrev.classList.remove("hidden");
    trendingBtnNext.classList.remove("hidden");
  } else {
    trendingBtnNext.classList.remove("hidden");
  }
});
