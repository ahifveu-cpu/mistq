const tickerWords = [
  "ЧЁ??",
  "КАВО?",
  "mistq?",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "PHP",
  "PYTHON",
  "Scripts",
  "Backend",
  "Frontend",
  "Databases",
  "DevOps",
  "сайты",
  "боты",
  "автоматизация",
  "цифровые штуки",
];

const tickerSequence = document.querySelector("#ticker-sequence");
const tickerCopy = document.querySelector("#ticker-copy");

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }

  return items;
}

function fillTicker() {
  tickerSequence.textContent = "";

  while (tickerSequence.scrollWidth < window.innerWidth + 120) {
    const randomOrder = shuffle([...tickerWords]);
    const phrase = `${randomOrder.join("  ✳  ")}  ✳  `;
    tickerSequence.append(document.createTextNode(phrase));
  }

  // The second half must match the first exactly for a seamless loop.
  tickerCopy.textContent = tickerSequence.textContent;
}

fillTicker();

let resizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(fillTicker, 150);
});
