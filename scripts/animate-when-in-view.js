// Select all elements with the target class
const elements = document.querySelectorAll('.trigger-when-in-view');

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class when the element is in view
      entry.target.classList.add('fadeinmove-bc-3');
      // Optionally, unobserve the element to avoid re-triggering
      observer.unobserve(entry.target);
    }
  });
});

// Observe each target element
elements.forEach(element => observer.observe(element));
