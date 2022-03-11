"use strict";

// remove items
const removeButton = document.getElementsByClassName("cart__remove");
for (let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener("click", removeItem);
}

function removeItem(event) {
  event.target.parentNode.remove();
  updateCartPrice();
}

// change item quantity
const decreBtnArr = document.getElementsByClassName("cart__decrement");
const increBtnArr = document.getElementsByClassName("cart__increment");

for (let decreBtn of decreBtnArr) {
  decreBtn.onclick = function () {
    let currentInput = decreBtn.nextElementSibling;
    currentInput.value = currentInput.value - 1;
    if (isNaN(currentInput.value) || currentInput.value <= 0) {
      currentInput.value = 1;
    }
  };
}

for (let increBtn of increBtnArr) {
  increBtn.onclick = function () {
    let currentInput = increBtn.previousElementSibling;
    currentInput.value = parseInt(currentInput.value) + 1;
  };
}

// update cart price
function updateCartPrice() {
  let total = 0;
  let cartItems = document.getElementsByClassName("cart__item");
  for (let i = 0; i < cartItems.length; i += 2) {
    var priceElement = cartItems[i].getElementsByClassName("cart__price")[0];
    var quantityElement =
      cartItems[i].getElementsByClassName("cart__quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("total__price")[0].innerText = "$" + total;
}

// purchase messsage
const purchaseButton = document.querySelector(".checkout__button");
purchaseButton.addEventListener("click", purchaseBtnClicked);

function purchaseBtnClicked() {
  alert("Thank you for your purchase");
  let cartItems = document.getElementsByClassName("cart__item")[0];
  cartItems.parentNode.remove();
  updateCartPrice();
}
