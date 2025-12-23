// Swiper-section script from swiper-section.html
(function() {
  const cards = document.querySelectorAll('.card');
  const prevBtn = document.querySelector('.nav-btn.prev');
  const nextBtn = document.querySelector('.nav-btn.next');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalYear = document.getElementById('modalYear');
  const modalLabel = document.getElementById('modalLabel');
  const modalInfo = document.getElementById('modalInfo');
  const closeModal = document.getElementById('closeModal');
  const galleryWrapper = document.querySelector('.gallery-wrapper');
  if (!cards.length || !galleryWrapper) return;
  const positions = ['left-3', 'left-2', 'left-1', 'center', 'right-1', 'right-2'];
  let currentPositions = Array.from({length: 6}, (_, i) => i);
  let touchStartX = 0, touchEndX = 0, isDragging = false;
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) rotateLeft();
      else rotateRight();
    }
  }
  galleryWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isDragging = true;
  }, { passive: true });
  galleryWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (isDragging) { handleSwipe(); isDragging = false; }
  }, { passive: true });
  let mouseStartX = 0, mouseEndX = 0, isMouseDragging = false;
  galleryWrapper.addEventListener('mousedown', (e) => {
    mouseStartX = e.screenX;
    isMouseDragging = true;
    galleryWrapper.style.cursor = 'grabbing';
  });
  galleryWrapper.addEventListener('mouseup', (e) => {
    if (!isMouseDragging) return;
    mouseEndX = e.screenX;
    const diff = mouseStartX - mouseEndX;
    const swipeThreshold = 50;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) rotateLeft();
      else rotateRight();
    }
    isMouseDragging = false;
    galleryWrapper.style.cursor = 'grab';
  });
  galleryWrapper.addEventListener('mouseleave', () => {
    if (isMouseDragging) {
      isMouseDragging = false;
      galleryWrapper.style.cursor = 'grab';
    }
  });
  galleryWrapper.style.cursor = 'grab';
  function updateCards() {
    cards.forEach((card, idx) => {
      card.className = 'card ' + positions[currentPositions[idx]];
    });
  }
  function rotateLeft() {
    currentPositions = currentPositions.map(pos => (pos + 1) % 6);
    updateCards();
  }
  function rotateRight() {
    currentPositions = currentPositions.map(pos => (pos - 1 + 6) % 6);
    updateCards();
  }
  prevBtn.addEventListener('click', rotateRight);
  nextBtn.addEventListener('click', rotateLeft);
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      if (currentPositions[idx] === 10) {
        const img = card.querySelector('img');
        const year = card.dataset.year;
        const label = card.dataset.label;
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalYear.textContent = year;
        modalLabel.textContent = label;
        if (!year) modalInfo.style.display = 'none';
        else modalInfo.style.display = 'flex';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        const centerIdx = currentPositions.indexOf(10);
        const diff = idx - centerIdx;
        if (diff > 0) for (let i = 0; i < diff; i++) rotateLeft();
        else if (diff < 0) for (let i = 0; i < Math.abs(diff); i++) rotateRight();
      }
    });
  });
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
  setInterval(rotateLeft, 5000);
  updateCards();
})();