let images = document.querySelectorAll(".lazyload");
new LazyLoad(images, {
    root: null,
    rootMargin: "1px",
    threshold: 0
});