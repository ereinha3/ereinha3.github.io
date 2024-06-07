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