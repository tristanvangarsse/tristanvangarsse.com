document.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('box');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // Scrolling down
          content.classList.add('transformed');
      } else {
          // Scrolling up or at the top
          content.classList.remove('transformed');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
});
