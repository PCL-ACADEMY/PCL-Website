// script.js for AssistiveTouch and menu logic
// Handles menu open/close, drag, and transparency

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const assistiveMenu = document.getElementById('assistiveMenu');
  let menuOpen = false;

  // On page load, make sure assistiveMenu is not clickable
  assistiveMenu.style.pointerEvents = 'none';

  menuBtn.addEventListener('click', function(e) {
    if (isDragging || mouseMoved) {
      // Prevent opening if drag just happened
      return;
    }
    e.stopPropagation();
    // Get current button position
    const btnRect = menuBtn.getBoundingClientRect();
    assistiveMenu.style.left = btnRect.left + -105 + 'px';
    assistiveMenu.style.top = btnRect.top + menuBtn.offsetHeight + -150 + 'px'; // 8px below button
    assistiveMenu.style.right = '';
    assistiveMenu.style.bottom = '';
    assistiveMenu.classList.add('show');
    menuBtn.classList.add('hide');
    menuOpen = true;
    // Lower transparency when menu is open
    assistiveMenu.classList.add('active-transparency');
    // Enable pointer events when menu is open
    assistiveMenu.style.pointerEvents = 'auto';
  }, true);

  document.addEventListener('click', (e) => {
    if (menuOpen && !assistiveMenu.contains(e.target)) {
      assistiveMenu.classList.remove('show');
      menuBtn.classList.remove('hide');
      menuOpen = false;
      assistiveMenu.classList.remove('active-transparency');
      // Disable pointer events when menu is closed
      assistiveMenu.style.pointerEvents = 'none';
    }
  });
  assistiveMenu.addEventListener('click', e => e.stopPropagation());

  // Drag functionality
  let isDragging = false, offsetX, offsetY;
  menuBtn.addEventListener('mousedown', function(e) {
    isDragging = true;
    mouseMoved = false;
    mouseDownTime = Date.now();
    offsetX = e.clientX - menuBtn.getBoundingClientRect().left;
    offsetY = e.clientY - menuBtn.getBoundingClientRect().top;
    menuBtn.style.transition = 'none';
  });
  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      mouseMoved = true;
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
      menuBtn.style.left = x + 'px';
      menuBtn.style.top = y + 'px';
      menuBtn.style.position = 'fixed';
      // Move menu with button if open
      if (menuOpen) {
        assistiveMenu.style.left = x + 'px';
        assistiveMenu.style.top = y + menuBtn.offsetHeight + 8 + 'px';
        assistiveMenu.style.right = '';
        assistiveMenu.style.bottom = '';
      }
    }
  });
  document.addEventListener('mouseup', function(e) {
    if (isDragging && !mouseMoved && Date.now() - mouseDownTime < 300) {
      // Simulate click to open menu only if it was a quick click, not drag
      menuBtn.click();
    }
    isDragging = false;
    menuBtn.style.transition = '';
  });
  // Touch support
  menuBtn.addEventListener('touchstart', function(e) {
    isDragging = true;
    touchMoved = false; // Always reset on touchstart
    touchStartTime = Date.now();
    const touch = e.touches[0];
    offsetX = touch.clientX - menuBtn.getBoundingClientRect().left;
    offsetY = touch.clientY - menuBtn.getBoundingClientRect().top;
    menuBtn.style.transition = 'none';
    // Prevent scrolling while dragging
    e.preventDefault();
    // Clear any previous tapTimeout
    if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
    }
    // Set a timeout to detect long press (e.g., 400ms)
    tapTimeout = setTimeout(() => {
      // If still holding after 400ms, do NOT open menu
      tapTimeout = null;
    }, 400);
  }, {passive: false});

  document.addEventListener('touchmove', function(e) {
    if (isDragging) {
      touchMoved = true;
      const touch = e.touches[0];
      let x = touch.clientX - offsetX;
      let y = touch.clientY - offsetY;
      menuBtn.style.left = x + 'px';
      menuBtn.style.top = y + 'px';
      menuBtn.style.position = 'fixed';
      // Move menu with button if open
      if (menuOpen) {
        assistiveMenu.style.left = x + 'px';
        assistiveMenu.style.top = y + menuBtn.offsetHeight + 8 + 'px';
        assistiveMenu.style.right = '';
        assistiveMenu.style.bottom = '';
      }
      // Prevent page scroll while dragging
      e.preventDefault();
    }
  }, {passive: false});

  document.addEventListener('touchend', function(e) {
    isDragging = false;
    menuBtn.style.transition = '';
    // Only open menu if it was a quick tap (not long press, not drag)
    if (tapTimeout && !touchMoved) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
      // Simulate click to open menu
      menuBtn.click();
    } else if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
    }
    // Always reset touchMoved after touchend
    touchMoved = false;
  });

  // --- Enhanced Mobile/Touch Logic ---
  let touchStartTime = 0;
  let touchMoved = false;
  let tapTimeout = null;

  menuBtn.addEventListener('touchstart', function(e) {
    isDragging = true;
    touchMoved = false; // Always reset on touchstart
    touchStartTime = Date.now();
    const touch = e.touches[0];
    offsetX = touch.clientX - menuBtn.getBoundingClientRect().left;
    offsetY = touch.clientY - menuBtn.getBoundingClientRect().top;
    menuBtn.style.transition = 'none';
    // Prevent scrolling while dragging
    e.preventDefault();
    // Clear any previous tapTimeout
    if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
    }
    // Set a timeout to detect long press (e.g., 400ms)
    tapTimeout = setTimeout(() => {
      // If still holding after 400ms, do NOT open menu
      tapTimeout = null;
    }, 400);
  }, {passive: false});

  document.addEventListener('touchmove', function(e) {
    if (isDragging) {
      touchMoved = true;
      const touch = e.touches[0];
      let x = touch.clientX - offsetX;
      let y = touch.clientY - offsetY;
      menuBtn.style.left = x + 'px';
      menuBtn.style.top = y + 'px';
      menuBtn.style.position = 'fixed';
      // Move menu with button if open
      if (menuOpen) {
        assistiveMenu.style.left = x + 'px';
        assistiveMenu.style.top = y + menuBtn.offsetHeight + 8 + 'px';
        assistiveMenu.style.right = '';
        assistiveMenu.style.bottom = '';
      }
      // Prevent page scroll while dragging
      e.preventDefault();
    }
  }, {passive: false});

  document.addEventListener('touchend', function(e) {
    isDragging = false;
    menuBtn.style.transition = '';
    // Only open menu if it was a quick tap (not long press, not drag)
    if (tapTimeout && !touchMoved) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
      // Simulate click to open menu
      menuBtn.click();
    } else if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
    }
    // Always reset touchMoved after touchend
    touchMoved = false;
  });

  // --- Desktop: Prevent accidental menu open on drag ---
  let mouseDownTime = 0;
  let mouseMoved = false;
  menuBtn.addEventListener('mousedown', function(e) {
    isDragging = true;
    mouseMoved = false;
    mouseDownTime = Date.now();
    offsetX = e.clientX - menuBtn.getBoundingClientRect().left;
    offsetY = e.clientY - menuBtn.getBoundingClientRect().top;
    menuBtn.style.transition = 'none';
  });
  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      mouseMoved = true;
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
      menuBtn.style.left = x + 'px';
      menuBtn.style.top = y + 'px';
      menuBtn.style.position = 'fixed';
      // Move menu with button if open
      if (menuOpen) {
        assistiveMenu.style.left = x + 'px';
        assistiveMenu.style.top = y + menuBtn.offsetHeight + 8 + 'px';
        assistiveMenu.style.right = '';
        assistiveMenu.style.bottom = '';
      }
    }
  });
  document.addEventListener('mouseup', function(e) {
    if (isDragging && !mouseMoved && Date.now() - mouseDownTime < 300) {
      // Simulate click to open menu only if it was a quick click, not drag
      menuBtn.click();
    }
    isDragging = false;
    menuBtn.style.transition = '';
  });

  // Menu navigation
  document.querySelectorAll('.assistive-item').forEach(item => {
    item.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      if (target) window.top.location.href = target;
    });
  });
});
