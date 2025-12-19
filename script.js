// === 1. Typed Title ===
new Typed("#typed-title", {
  strings: ["Speedrun Learning"],
  typeSpeed: 45,
  showCursor: true,
  cursorChar: "|",
  loop: false,
});

// === 2. Build spinner ===
const container = document.querySelector(".spinner-container");
const COUNT = 16;

for (let n = 0; n < COUNT; n++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const SIZE = 20; // vw
  const step = SIZE / COUNT;
  const localSize = SIZE - step * n;
  const offset = (step * n) / 2;

  circle.style.width = localSize + "vw";
  circle.style.height = localSize + "vw";
  circle.style.left = offset + "vw";
  circle.style.top = offset + "vw";
  circle.style.animationDuration = (9 / (n + 1)) + "s";

  container.appendChild(circle);
}

// === 3. Fade loader without white flash ===
setTimeout(() => {
  const loader = document.getElementById("loading-screen");
  loader.classList.add("fade-out");

  // fully remove from layout AFTER fade finishes
  setTimeout(() => {
    loader.classList.add("fade-out-complete");
  }, 1000);

}, 1750);