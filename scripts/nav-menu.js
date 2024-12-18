const menuTrigger = document.getElementById('menu-trigger');
const bottomOpenAnim = document.getElementById('bread-bottom-open');
const bottomCloseAnim = document.getElementById('bread-bottom-close');
const topOpenAnim = document.getElementById('bread-top-open');
const topCloseAnim = document.getElementById('bread-top-close');

// Select the div to animate
const animatedDropdown = document.getElementById('header');
const noScrollBody = document.getElementById('body-anchor');

let isMenuOpen = false;

menuTrigger.addEventListener('click', () => {
  if (isMenuOpen) {
    // Play "close" animations
    bottomCloseAnim.beginElement();
    topCloseAnim.beginElement();

    // Remove 'open' class
    animatedDropdown.classList.remove('open');
    noScrollBody.classList.remove('no-scroll');

  } else {
    // Play "open" animations
    bottomOpenAnim.beginElement();
    topOpenAnim.beginElement();

    // Add 'open' class
    animatedDropdown.classList.add('open');
    noScrollBody.classList.add('no-scroll');    

  }
  isMenuOpen = !isMenuOpen;
});