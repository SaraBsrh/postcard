const container = document.querySelector('.scroll-container');
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");

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

// Function to show texts on page 4
function showTexts() {
  const texts = document.querySelectorAll("#page4 .appear");
  texts.forEach((text, index) => {
    setTimeout(() => {
      text.classList.add("visible");
    }, index * 500); // 0.5s delay for each text
  });

  // وقتی متن‌ها شروع به ظاهر شدن می‌کنن، دکمه پخش نشون داده بشه
  playBtn.style.display = "block";
}

// Trigger texts after auto-scroll (around 6s total)
setTimeout(showTexts, 6000);

// Play music on button click
playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none"; // hide button after click
  playBtn.remove()
});
