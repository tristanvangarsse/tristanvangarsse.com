document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  let slideInterval;
  let hasScrolled = false;

  function showNextSlide() {
      slides[currentIndex].classList.remove('show');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('show');
  }

  function startSlideshow() {
      if (!hasScrolled) {
          slideInterval = setInterval(showNextSlide, 5000); // Change slide every 5 seconds
          hasScrolled = true;
      }
  }

  window.addEventListener('scroll', function() {
      if (window.scrollY > 0 && !hasScrolled) {
          startSlideshow();
      }
  });

  // Initial display
  slides[currentIndex].classList.add('show');
});
