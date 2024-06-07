let images = document.querySelectorAll(".lazyload");
new LazyLoad(images, {
    root: null,
    rootMargin: "1000px",
    threshold: 0
});