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

// --- Carousel Logic ---
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = track ? track.querySelectorAll('.card') : [];
const cardsToShow = 4;
let currentIndex = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 20; // 20px gap
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= cards.length - cardsToShow;
}

if (track && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - cardsToShow) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Responsivo: atualiza ao redimensionar
  window.addEventListener('resize', updateCarousel);

  // Inicializa
  updateCarousel();
}

