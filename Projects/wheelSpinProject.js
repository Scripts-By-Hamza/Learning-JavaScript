const wheel = document.getElementById("wheel");
const resultDisplay = document.getElementById("result");

const segments = [
  "🎉 Free Coffee!",
  "😢 Better Luck Next Time",
  "🎁 Mystery Box!",
  "🔥 Double XP Boost!",
  "🏆 Instant Prize!",
  "🎊 Surprise Gift!",
];

let isSpinning = false;

function spinWheel() {
  if (isSpinning) return;

  isSpinning = true;
  resultDisplay.textContent = "";

  const randomIndex = Math.floor(Math.random() * segments.length);
  const degreesPerSegment = 360 / segments.length;
  const stopAngle =
    360 * 5 + (360 - randomIndex * degreesPerSegment - degreesPerSegment / 2);

  wheel.style.transform = `rotate(${stopAngle}deg)`;

  setTimeout(() => {
    resultDisplay.textContent = `You got: ${segments[randomIndex]}`;
    isSpinning = false;
  }, 5000);
}
