document.getElementById('see-more').addEventListener('click', function() {
    const left = document.querySelector('.landing-img.left');
    const right = document.querySelector('.landing-img.right');
    left.classList.add('elevator-left');
    right.classList.add('elevator-right');
    // Hide button during animation
    this.style.display = 'none';
    // After animation, redirect to home.html
    setTimeout(function() {
        window.location.href = 'home.html';
    }, 1000); // match the CSS transition duration
});
