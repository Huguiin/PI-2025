function toggleCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.toggle('active');
}

// Attach the toggleCart function to the cart icon and close button
document.getElementById('cart-icon').addEventListener('click', toggleCart);
document.getElementById('close-cart-btn').addEventListener('click', toggleCart);
