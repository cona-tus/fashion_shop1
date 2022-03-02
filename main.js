"use strict";

// const trendingBtnPrev = document.querySelector("#trending__prev");
// const trendingBtnNext = document.querySelector("#trending__next");
// const trendingItems = document.querySelector(".trending__items");
// let initial = 0;
// let amount = 50;

// trendingBtnNext.addEventListener("click", () => {
//   initial -= amount;
//   trendingItems.style.transform = "translateX(" + initial + "vw)";
//   console.log(initial);

//   if (initial !== -100) {
//     trendingBtnNext.classList.remove("hidden");
//     trendingBtnPrev.classList.remove("hidden");
//   } else {
//     trendingBtnNext.classList.add("hidden");
//   }
// });

// trendingBtnPrev.addEventListener("click", () => {
//   trendingBtnPrev.classList.add("hidden");
//   initial += amount;
//   trendingItems.style.transform = "translateX(" + initial + "vw)";
//   console.log(initial);

//   if (initial !== 0) {
//     trendingBtnPrev.classList.remove("hidden");
//     trendingBtnNext.classList.remove("hidden");
//   } else {
//     trendingBtnNext.classList.remove("hidden");
//   }
// });

// // navbar
// const shopNavbar = document.querySelector(".shop__navbar");
// const shopButton = document.querySelector(".shop__button");
// const shopMenu = document.querySelector(".shop__menu");

// shopButton.addEventListener("mouseover", () => {
//   console.log("hi");
//   shopMenu.classList.add("active");
// });

// shopButton.addEventListener("mouseleave", () => {
//   console.log("bye");
//   shopMenu.classList.remove("active");
// });

// filter

const categoryBtnContainer = document.querySelector(".category__items");
const productContainer = document.querySelector(".category__products");
const products = document.querySelectorAll(".product");

categoryBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  const active = document.querySelector(".category__button.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  e.target.classList.add("selected");

  productContainer.classList.add("filter__animation");
  setTimeout(() => {
    products.forEach((product) => {
      if (filter === "*" || filter === product.dataset.type) {
        product.classList.remove("invisible");
      } else {
        product.classList.add("invisible");
      }
    });
    productContainer.classList.remove("filter__animation");
  }, 300);
});
