[...document.querySelectorAll('*')].forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.right > window.innerWidth || rect.left < 0) {
    console.log('⚠️ Overflowing element:', el, rect);
    el.style.outline = '3px solid green';
  }
});
