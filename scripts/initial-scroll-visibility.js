let lastState = null;
let initialized = false;

function handleScroll() {
  const targetDivs = document.querySelectorAll('.initial-scroll-visibility');
  const scrollDistance = window.scrollY;
  const isMobile = window.innerWidth < 700;

  targetDivs.forEach(function(targetDiv) {
    if (isMobile) {
      // Always show immediately on mobile
      targetDiv.classList.remove('not-initialized', 'popdown-hide', 'popdown-show');
      targetDiv.style.transform = 'translate(-50%,0px)';
      targetDiv.style.opacity = '1';
      targetDiv.style.pointerEvents = 'auto';
      lastState = 'shown';
      return;
    }

    // Normal behavior for desktop
    if (!initialized) {
      targetDiv.classList.remove('not-initialized');
      lastState = scrollDistance > 200 ? 'shown' : 'hidden';
      initialized = true;
      return;
    }

    const shouldBeShown = scrollDistance > 200;

    if (shouldBeShown && lastState !== 'shown') {
      targetDiv.classList.remove('popdown-hide', 'popdown-show');
      void targetDiv.offsetWidth;
      targetDiv.classList.add('popdown-show');
      lastState = 'shown';
    } else if (!shouldBeShown && lastState !== 'hidden') {
      targetDiv.classList.remove('popdown-show', 'popdown-hide');
      void targetDiv.offsetWidth;
      targetDiv.classList.add('popdown-hide');
      lastState = 'hidden';
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll); // trigger on resize as well
window.addEventListener('load', handleScroll);   // run on initial load
