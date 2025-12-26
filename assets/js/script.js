document.addEventListener('DOMContentLoaded', function() {
  // Loader logic
  const loader = document.querySelector('.page-loader');
  const mainContent = document.querySelector('body');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hide');
      setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.overflow = '';
      }, 400);
    }, 1200); // Loader duration (adjust as needed)
    mainContent.style.overflow = 'hidden';
  }

  const menuBtn = document.getElementById('menuBtn');
  const assistiveMenu = document.getElementById('assistiveMenu');
  const speechBubble = document.getElementById('speechBubble');
  let menuOpen = false;
  let bubbleTimeout = null;

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

  menuBtn.addEventListener('click', function(e) {
    if (isDragging || mouseMoved) {
      return;
    }
    e.stopPropagation();
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
  }, true);

  document.addEventListener('click', (e) => {
    if (menuOpen && !assistiveMenu.contains(e.target)) {
      assistiveMenu.classList.remove('show');
      menuBtn.classList.remove('hide');
      menuOpen = false;
      assistiveMenu.classList.remove('active-transparency');
      assistiveMenu.style.pointerEvents = 'none';
    }
  });
  assistiveMenu.addEventListener('click', e => e.stopPropagation());

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
      menuBtn.click();
    }
    isDragging = false;
    menuBtn.style.transition = '';
  });
  menuBtn.addEventListener('touchstart', function(e) {
    isDragging = true;
    touchMoved = false; 
    touchStartTime = Date.now();
    const touch = e.touches[0];
    offsetX = touch.clientX - menuBtn.getBoundingClientRect().left;
    offsetY = touch.clientY - menuBtn.getBoundingClientRect().top;
    menuBtn.style.transition = 'none';
    e.preventDefault();
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
      if (menuOpen) {
        assistiveMenu.style.left = x + 'px';
        assistiveMenu.style.top = y + menuBtn.offsetHeight + 8 + 'px';
        assistiveMenu.style.right = '';
        assistiveMenu.style.bottom = '';
      }
      e.preventDefault();
    }
  }, {passive: false});

  document.addEventListener('touchend', function(e) {
    isDragging = false;
    menuBtn.style.transition = '';
    if (tapTimeout && !touchMoved) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
      menuBtn.click();
    } else if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
    }
    touchMoved = false;
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
      if (menuOpen) {
        assistiveMenu.style.left = x + 'px';
        assistiveMenu.style.top = y + menuBtn.offsetHeight + 8 + 'px';
        assistiveMenu.style.right = '';
        assistiveMenu.style.bottom = '';
      }
      e.preventDefault();
    }
  }, {passive: false});

  document.addEventListener('touchend', function(e) {
    isDragging = false;
    menuBtn.style.transition = '';
    if (tapTimeout && !touchMoved) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
      menuBtn.click();
    } else if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
    }
    touchMoved = false;
  });

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
      menuBtn.click();
    }
    isDragging = false;
    menuBtn.style.transition = '';
  });

  document.querySelectorAll('.assistive-item').forEach(item => {
    item.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      if (target) window.top.location.href = target;
    });
  });
});
