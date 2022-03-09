"use strict";

const removeButton = document.getElementsByClassName("cart__remove");
for (let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener("click", () => {
    removeItem(event);
  });
}
function removeItem(event) {
  event.target.parentNode.remove();
  updateCartPrice();
}

const cartInput = document.querySelector(".cart__quantity");
function stepper(btn) {
  let classNames = btn.getAttribute("class");
  let min = cartInput.getAttribute("min");
  let max = cartInput.getAttribute("max");
  let step = cartInput.getAttribute("step");
  let value = cartInput.getAttribute("value");
  let calcStep = classNames == "cart__increment" ? step + 1 : step + -1;
  let newValue = parseInt(value) + calcStep;
  if (newValue >= min && newValue <= max) {
    cartInput.setAttribute("value", newValue);
  }
}

function updateCartPrice() {
  let total = 0;
  const cartItems = document.getElementsByClassName("cart__item");
  for (var i = 0; i < cartItems.length; i += 2) {
    cartRow = cartItems[i];
    let priceElement = cartRow.getElementsByClassName("cart__price")[0];
    let cartInput = cartRow.getElementsByClassName("cart__quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = cartInput.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("total__price")[0].innerText = "$" + total;
}
