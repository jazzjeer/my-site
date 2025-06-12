window.addEventListener("scroll", () => {
  const heroImage = document.querySelector(".hero-image");
  const scrollY = window.scrollY;
  const fadeOut = Math.min(scrollY / 400, 1); // fade between 0–1
  heroImage.style.opacity = 1 - fadeOut;
});
