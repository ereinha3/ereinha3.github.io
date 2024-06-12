document.addEventListener('DOMContentLoaded', () => {
  const marquee = document.getElementById('marquee');
  const initialMarqueeOffsetTop = marquee.offsetTop;

  window.addEventListener('scroll', () => {
      if (window.scrollY > initialMarqueeOffsetTop) {
          marquee.classList.add("hidden")
      }
  });
});

const marquee = document.getElementById('marquee')
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

// Listen for scroll events
window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  // If user scrolled down and navbar is not already hidden, hide it
  if (currentScroll > lastScrollTop && !navbar.classList.contains('navbar-hidden')) {
    navbar.classList.add('navbar-hidden');
    marquee.classList.add('marquee-hidden');
  } 
  // If user scrolled up and navbar is hidden, show it
  else if (currentScroll < lastScrollTop && navbar.classList.contains('navbar-hidden')) {
    navbar.classList.remove('navbar-hidden');
    marquee.classList.remove('marquee-hidden');

  }

  lastScrollTop = currentScroll;
});

const circle = document.getElementById('eyelid');

const userAgent = navigator.userAgent || window.opera;

  // Check for Mobile
if ((/android/i.test(userAgent)) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) || (/webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
    circle.remove();
}

let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;
let currentScrollX = 0;
let currentScrollY = 0;
const circleRadius = 24;

  // Update the mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX + window.scrollX;
    mouseY = e.clientY + window.scrollY;
});

  // Update the circle position on scroll
document.addEventListener('scroll', () => {
    mouseX = mouseX + window.scrollX - currentScrollX;
    mouseY = mouseY + window.scrollY - currentScrollY;
    currentScrollX = window.scrollX;
    currentScrollY = window.scrollY;
});

// Update the circle position with a delay
function updateCirclePosition() {
  const delay = 1; // Change this value to adjust the delay

  // Calculate the new position with some easing/delay
  circleX += (mouseX - circleX) * delay;
  circleY += (mouseY - circleY) * delay;

  // Apply the new position to the circle
  circle.style.left = `${circleX - circleRadius}px`;
  circle.style.top = `${circleY - circleRadius}px`;
  // Call the function again on the next frame
  requestAnimationFrame(updateCirclePosition);
}

// Start the animation
updateCirclePosition();

