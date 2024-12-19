const menuTrigger = document.getElementById('menu-trigger');
const bottomOpenAnim = document.getElementById('bread-bottom-open');
const bottomCloseAnim = document.getElementById('bread-bottom-close');
const topOpenAnim = document.getElementById('bread-top-open');
const topCloseAnim = document.getElementById('bread-top-close');

// Select the div to animate
const animatedDropdown = document.getElementById('header');
const noScroll = document.getElementById('body-anchor'); // Should be the body or html element

let isMenuOpen = false;

// Function to disable scroll
function disableScroll() {
  document.body.style.overflow = 'hidden'; // Prevent scrollbars
  document.body.style.position = 'fixed'; // Lock position
  document.body.style.width = '100%'; // Prevent layout shifts
}

// Function to enable scroll
function enableScroll() {
  document.body.style.overflow = ''; // Reset styles
  document.body.style.position = '';
  document.body.style.width = '';
}

// Toggle the menu and scroll lock
menuTrigger.addEventListener('click', () => {
  if (isMenuOpen) {
    // Play "close" animations
    bottomCloseAnim.beginElement();
    topCloseAnim.beginElement();

    // Remove 'open' and reset scroll
    animatedDropdown.classList.remove('open');
    enableScroll();
  } else {
    // Play "open" animations
    bottomOpenAnim.beginElement();
    topOpenAnim.beginElement();

    // Add 'open' and disable scroll
    animatedDropdown.classList.add('open');
    disableScroll();
  }
  isMenuOpen = !isMenuOpen; // Toggle the state
});
