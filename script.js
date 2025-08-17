const container = document.querySelector('.scroll-container');

// Slide timings
setTimeout(() => {
  container.style.transform = "translateX(-100vw)"; // Page 2
}, 1000);

setTimeout(() => {
  container.style.transform = "translateX(-200vw)"; // Page 3
}, 2000);

setTimeout(() => {
  container.style.transform = "translateX(-300vw)"; // Page 4
}, 3000);

// Stays on page 4 (no more timeouts)
