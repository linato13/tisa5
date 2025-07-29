const countdown = document.getElementById("countdown");
const envelopeContainer = document.getElementById("envelope-container");
const envelope = document.getElementById("envelope");
const audio = document.getElementById("bg-music");
let musicStarted = false;

let count = 3;
const countdownInterval = setInterval(() => {
  countdown.textContent = count;
  count--;
  if (count < 0) {
    clearInterval(countdownInterval);
    countdown.classList.add("hidden");
    envelopeContainer.classList.remove("hidden");
    envelope.classList.add("open");
  }
}, 1000);

envelope.addEventListener("click", () => {
  if (!musicStarted) {
    audio.play();
    musicStarted = true;
  }
  spawnHearts(10);
});

function spawnHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight - 50 + "px";
    d
