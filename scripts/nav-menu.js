document.querySelector('.burger-menu').addEventListener('click', () => {
  const dropdownNav = document.getElementById('dropdown-nav');
  dropdownNav.style.height = '100%';
  document.body.classList.add('no-scroll'); // Add class for overflow control
});

document.querySelector('.mobile-menu-closebtn').addEventListener('click', () => {
  const dropdownNav = document.getElementById('dropdown-nav');
  dropdownNav.style.height = '0';
  document.body.classList.remove('no-scroll');
});
