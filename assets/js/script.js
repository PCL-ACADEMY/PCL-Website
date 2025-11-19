// script.js for AssistiveTouch and menu logic
// Handles menu open/close, drag, and transparency

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const assistiveMenu = document.getElementById('assistiveMenu');
  let menuOpen = false;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    assistiveMenu.classList.add('show');
    menuBtn.classList.add('hide');
    menuOpen = true;
    // Lower transparency when menu is open
    assistiveMenu.classList.add('active-transparency');
  });

  document.addEventListener('click', (e) => {
    if (menuOpen && !assistiveMenu.contains(e.target)) {
      assistiveMenu.classList.remove('show');
      menuBtn.classList.remove('hide');
      menuOpen = false;
      assistiveMenu.classList.remove('active-transparency');
    }
  });
  assistiveMenu.addEventListener('click', e => e.stopPropagation());

  // Drag functionality
  let isDragging = false, offsetX, offsetY;
  menuBtn.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - menuBtn.getBoundingClientRect().left;
    offsetY = e.clientY - menuBtn.getBoundingClientRect().top;
    menuBtn.style.transition = 'none';
  });
  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
      menuBtn.style.left = x + 'px';
      menuBtn.style.top = y + 'px';
      menuBtn.style.position = 'fixed';
      assistiveMenu.style.right = '';
      assistiveMenu.style.bottom = '';
      assistiveMenu.style.left = x + 'px';
      assistiveMenu.style.top = (y - assistiveMenu.offsetHeight - 10) + 'px';
    }
  });
  document.addEventListener('mouseup', function() {
    isDragging = false;
    menuBtn.style.transition = '';
  });
  // Touch support
  menuBtn.addEventListener('touchstart', function(e) {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - menuBtn.getBoundingClientRect().left;
    offsetY = touch.clientY - menuBtn.getBoundingClientRect().top;
    menuBtn.style.transition = 'none';
  });
  document.addEventListener('touchmove', function(e) {
    if (isDragging) {
      const touch = e.touches[0];
      let x = touch.clientX - offsetX;
      let y = touch.clientY - offsetY;
      menuBtn.style.left = x + 'px';
      menuBtn.style.top = y + 'px';
      menuBtn.style.position = 'fixed';
      assistiveMenu.style.right = '';
      assistiveMenu.style.bottom = '';
      assistiveMenu.style.left = x + 'px';
      assistiveMenu.style.top = (y - assistiveMenu.offsetHeight - 10) + 'px';
    }
  }, {passive: false});
  document.addEventListener('touchend', function() {
    isDragging = false;
    menuBtn.style.transition = '';
  });

  // Menu navigation
  document.querySelectorAll('.assistive-item').forEach(item => {
    item.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      if (target) window.location.href = target;
    });
  });
});
