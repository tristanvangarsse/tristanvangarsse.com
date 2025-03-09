window.addEventListener("scroll", function () {
  if (window.innerWidth > 1500) { // Only run if screen width is greater than 1400px
    let scrollY = window.scrollY;
    let minWidth = 50;
    let maxWidth = 65;
    let growthRate = 0.03;

    let newWidth = Math.min(minWidth + scrollY * growthRate, maxWidth);
    document.getElementById("power-saver").style.width = newWidth + "vw";
  } else {
    // Reset to default width if below 600px
    document.getElementById("power-saver").style.width = "85vw";
  }
});
