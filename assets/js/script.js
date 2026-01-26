document.addEventListener('DOMContentLoaded', function() {
  const loader = document.querySelector('.page-loader');
  const body = document.body;

  if (loader) {
    body.style.overflow = 'hidden';

    window.addEventListener('load', () => {
      loader.classList.add('hide');

      setTimeout(() => {
        loader.style.display = 'none';
        body.style.overflow = '';
      }, 400);
    });
  }


  const menuBtn = document.getElementById('menuBtn');
  const assistiveMenu = document.getElementById('assistiveMenu');
  const speechBubble = document.getElementById('speechBubble');
  let menuOpen = false;
  let bubbleTimeout = null;
  let hoverTimeout = null;

  assistiveMenu.style.pointerEvents = 'none';

  function showSpeechBubble() {
    if (speechBubble) {
      speechBubble.classList.remove('hide');
      bubbleTimeout = setTimeout(() => {
        speechBubble.classList.add('hide');
      }, 2200);
    }
  }
  showSpeechBubble();

  function openMenu() {
    const btnRect = menuBtn.getBoundingClientRect();
    assistiveMenu.style.left = btnRect.left + -105 + 'px';
    assistiveMenu.style.top = btnRect.top + menuBtn.offsetHeight + -150 + 'px'; 
    assistiveMenu.style.right = '';
    assistiveMenu.style.bottom = '';
    assistiveMenu.classList.add('show');
    menuBtn.classList.add('hide');
    menuOpen = true;
    assistiveMenu.classList.add('active-transparency');
    assistiveMenu.style.pointerEvents = 'auto';
  }

  function closeMenu() {
    assistiveMenu.classList.remove('show');
    menuBtn.classList.remove('hide');
    menuOpen = false;
    assistiveMenu.classList.remove('active-transparency');
    assistiveMenu.style.pointerEvents = 'none';
  }

  menuBtn.addEventListener('mouseenter', function() {
    if (!isDragging) {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        openMenu();
      }, 300); 
    }
  });

  menuBtn.addEventListener('mouseleave', function() {
    clearTimeout(hoverTimeout);
    if (menuOpen) {
      hoverTimeout = setTimeout(() => {
        closeMenu();
      }, 200);
    }
  });

  assistiveMenu.addEventListener('mouseenter', function() {
    clearTimeout(hoverTimeout);
  });

  assistiveMenu.addEventListener('mouseleave', function() {
    if (menuOpen) {
      closeMenu();
    }
  });

  menuBtn.addEventListener('click', function(e) {
    if (mouseMoved) {
      return;
    }
    e.stopPropagation();
    
  }, true);

  document.addEventListener('click', (e) => {
    if (menuOpen && !assistiveMenu.contains(e.target)) {
      closeMenu();
    }
  });
  
  assistiveMenu.addEventListener('click', e => e.stopPropagation());

  let isDragging = false, offsetX, offsetY;
  let mouseDownTime = 0;
  let mouseMoved = false;

  menuBtn.addEventListener('mousedown', function(e) {
    mouseDownTime = Date.now();
    
    if (menuOpen) {
      closeMenu();
      setTimeout(() => {
        isDragging = true;
        mouseMoved = false;
        offsetX = e.clientX - menuBtn.getBoundingClientRect().left;
        offsetY = e.clientY - menuBtn.getBoundingClientRect().top;
        menuBtn.style.transition = 'none';
      }, 50);
    } else {
      isDragging = true;
      mouseMoved = false;
      offsetX = e.clientX - menuBtn.getBoundingClientRect().left;
      offsetY = e.clientY - menuBtn.getBoundingClientRect().top;
      menuBtn.style.transition = 'none';
    }
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      mouseMoved = true;
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
      menuBtn.style.left = x + 'px';
      menuBtn.style.top = y + 'px';
      menuBtn.style.position = 'fixed';
    }
  });

  document.addEventListener('mouseup', function(e) {
    isDragging = false;
    menuBtn.style.transition = '';
  });

  let touchStartTime = 0;
  let touchMoved = false;
  let tapTimeout = null;

  menuBtn.addEventListener('touchstart', function(e) {
    isDragging = true;
    touchMoved = false; 
    touchStartTime = Date.now();
    const touch = e.touches[0];
    offsetX = touch.clientX - menuBtn.getBoundingClientRect().left;
    offsetY = touch.clientY - menuBtn.getBoundingClientRect().top;
    menuBtn.style.transition = 'none';
    e.preventDefault();
    
    if (menuOpen) {
      closeMenu();
    }
    
    if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
    }
    tapTimeout = setTimeout(() => {
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
      e.preventDefault();
    }
  }, {passive: false});

  document.addEventListener('touchend', function(e) {
    isDragging = false;
    menuBtn.style.transition = '';
    
    if (tapTimeout && !touchMoved) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
      if (!menuOpen) {
        openMenu();
      }
    } else if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
    }
    touchMoved = false;
  });

  document.querySelectorAll('.assistive-item').forEach(item => {
    item.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      if (target) window.top.location.href = target;
    });
  });
});