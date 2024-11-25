window.addEventListener('DOMContentLoaded', (event) => {
  const parent = document.querySelector('.slideshow-container');
  const child = document.querySelector('.slide');

  function resizeParentToFitChild() {
    const childRect = child.getBoundingClientRect();
    parent.style.width = `${childRect.width}px`;
    parent.style.height = `${childRect.height}px`;
  }

  // Initial resize
  resizeParentToFitChild();

  // Optionally, if the child size might change, observe changes
  const resizeObserver = new ResizeObserver(resizeParentToFitChild);
  resizeObserver.observe(child);
});
