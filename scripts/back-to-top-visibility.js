// script.js
window.addEventListener('scroll', function() {
  const targetDivs = document.querySelectorAll('.back-to-top');
  const scrollDistance = window.scrollY; // The distance the page has scrolled vertically

  targetDivs.forEach(function(targetDiv) {
      if (scrollDistance > 1000) { // Adjust this value to your desired scroll distance
          targetDiv.style.display = 'block';
          // Trigger a reflow to restart the animation
          targetDiv.style.animation = 'none';
          targetDiv.offsetHeight; /* trigger reflow */
          targetDiv.style.animation = '';
      } else {
          targetDiv.style.display = 'none';
      }
  });
});

