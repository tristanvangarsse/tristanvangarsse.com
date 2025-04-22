const textElement = document.getElementById("move-in-letters");
const rawText = textElement.textContent;
textElement.textContent = "";

const lines = rawText.split("|");
const allLetters = lines.flatMap(line => line.split(""));
const totalLetters = allLetters.length;

let currentLetterIndex = 0;

lines.forEach((line) => {
  const lineDiv = document.createElement("div");
  const letters = line.split("");

  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    
    // Global easing calculation
    const progress = currentLetterIndex / totalLetters;
    const delay = Math.pow(progress, 2.5) * 2; // Quadratic easing over all letters
    
    span.style.animation = `move-in-letters 0.9s ease forwards ${delay}s`;
    lineDiv.appendChild(span);
    currentLetterIndex++;
  });

  textElement.appendChild(lineDiv);
});