let images = document.querySelectorAll(".lazyload");
new LazyLoad(images, {
    root: null,
    rootMargin: "2000px",
    threshold: 0
});