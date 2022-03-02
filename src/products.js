"use strict";

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
