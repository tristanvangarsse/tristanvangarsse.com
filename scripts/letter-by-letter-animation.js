const textElement = document.getElementById("move-in-letters");
const rawText = textElement.textContent;
textElement.textContent = "";

const lines = rawText.split("|");
const totalLetters = rawText.replace(/\*\*/g, '').length; // Exclude marker characters from count

let currentLetterIndex = 0;

lines.forEach((line) => {
  const lineDiv = document.createElement("div");
  
  // Split the line into segments (normal text and highlighted text)
  const segments = line.split(/\*\*(.*?)\*\*/);
  
  segments.forEach((segment, segmentIndex) => {
    // Odd indexes are inside ** markers (to be highlighted)
    const isHighlighted = segmentIndex % 2 === 1;
    
    const letters = segment.split("");
    
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      
      if (isHighlighted) {
        span.classList.add("highlight");
      }
      
      // Global easing calculation
      const progress = currentLetterIndex / totalLetters;
      const delay = Math.pow(progress, 2.5) * 2;
      
      span.style.animation = `move-in-letters 0.9s ease forwards ${delay}s`;
      lineDiv.appendChild(span);
      
      // Only increment for non-marker characters
      if (letter !== '*') {
        currentLetterIndex++;
      }
    });
  });

  textElement.appendChild(lineDiv);
});