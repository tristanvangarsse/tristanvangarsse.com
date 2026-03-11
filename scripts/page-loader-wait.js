window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader-main");
  
  loader.classList.add("hidden");

  setTimeout(() => {
    loader.remove(); // optional: remove from DOM
  }, 5000); // match CSS transition
});