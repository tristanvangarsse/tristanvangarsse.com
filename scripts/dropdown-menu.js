const menuTrigger = document.getElementById('menu-trigger');
const bottomOpenAnim = document.getElementById('bread-bottom-open');
const bottomCloseAnim = document.getElementById('bread-bottom-close');
const topOpenAnim = document.getElementById('bread-top-open');
const topCloseAnim = document.getElementById('bread-top-close');

// Select the div to animate
const animatedDropdown = document.getElementById('animated-dropdown');
const noScroll = document.getElementById('body-anchor'); // Should be the body or html element

let isMenuOpen = false;

// Toggle the menu and scroll lock
menuTrigger.addEventListener('click', () => {
  if (isMenuOpen) {
    // Play "close" animations
    bottomCloseAnim.beginElement();
    topCloseAnim.beginElement();

    // Remove 'open' and reset scroll
    animatedDropdown.classList.remove('open');
  } else {
    // Play "open" animations
    bottomOpenAnim.beginElement();
    topOpenAnim.beginElement();

    // Add 'open' and disable scroll
    animatedDropdown.classList.add('open');
  }
  isMenuOpen = !isMenuOpen; // Toggle the state
});



// Closes menu when link is clicked
document.querySelectorAll('.mobile-menu[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) {
      bottomCloseAnim.beginElement();
      topCloseAnim.beginElement();
      animatedDropdown.classList.remove('open');
      isMenuOpen = false;
    }
  });
});


// debug
document.querySelectorAll('.mobile-menu[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    // Then add the menu closing logic from solution 1
  });
});