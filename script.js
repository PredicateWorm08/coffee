let cart = [];

function addToCart() {

  const product = {
    name: "Название товара",
    price: 19.99
  };
  cart.push(product);
  updateCartView();
}

function updateCartView() {
  const cartSizeElement = document.getElementById("cart-size");
  cartSizeElement.textContent = cart.length;
}