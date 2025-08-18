const container = document.querySelector('.scroll-container');

// Slide timings
setTimeout(() => {
  container.style.transform = "translateX(-100vw)"; // Page 2
}, 800);

setTimeout(() => {
  container.style.transform = "translateX(-200vw)"; // Page 3
}, 2000);

setTimeout(() => {
  container.style.transform = "translateX(-300vw)"; // Page 4
}, 2800);

// Stays on page 4 (no more timeouts)

function showTexts() {
    const texts = document.querySelectorAll("#page4 .appear");
    texts.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add("visible");
      }, index * 500); // 0.5s delay for each text
    });
  }
  
  // Run when Page 4 is reached (after auto-scroll, ~6s if each page shows 2s)
  setTimeout(showTexts, 6000);
  
  