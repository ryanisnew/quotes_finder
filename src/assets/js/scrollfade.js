const elementsToFadeInUpOnScroll = document.querySelectorAll(
  ".scroll-fade",
);
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function (event) {
    elementsToFadeInUpOnScroll.forEach(function (element) {
      if (window.scrollY >= element.offsetTop - window.innerHeight) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}
