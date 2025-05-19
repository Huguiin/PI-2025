// Get the quantity span and buttons
const quantitySpan = document.getElementById('quantity');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

// Initialize the quantity value
let quantity = 0;

// Increase quantity
increaseBtn.addEventListener('click', () => {
  quantity++;
  quantitySpan.textContent = quantity; // Update the span text
});

// Decrease quantity (ensure it doesn't go below 0)
decreaseBtn.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    quantitySpan.textContent = quantity; // Update the span text
  }
});

const productList = document.querySelector('.product-list');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollPosition = 0;
const cardWidth = document.querySelector('.product-card').offsetWidth + 20; // Card width + gap
const visibleCards = Math.floor(document.querySelector('.carousel-container').offsetWidth / cardWidth);
const totalCards = document.querySelectorAll('.product-card').length;
const maxScroll = (totalCards - visibleCards) * cardWidth;

prevBtn.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - cardWidth, 0);
  productList.style.transform = `translateX(-${scrollPosition}px)`;
});

nextBtn.addEventListener('click', () => {
  scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
  productList.style.transform = `translateX(-${scrollPosition}px)`;
});

// Ensure the first element is fully visible
productList.style.transform = `translateX(0px)`;

