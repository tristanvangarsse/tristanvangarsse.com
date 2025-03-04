window.addEventListener("scroll", function () {
  if (window.innerWidth > 1000) { // Only run if screen width is greater than 1000px
    let scrollY = window.scrollY;
    let minWidth = 65;
    let maxWidth = 80;
    let growthRate = 0.03;

    let newWidth = Math.min(minWidth + scrollY * growthRate, maxWidth);
    document.getElementById("power-saver").style.width = newWidth + "vw";
  } else {
    // Reset to default width if below 600px
    document.getElementById("power-saver").style.width = "85vw";
  }
});
