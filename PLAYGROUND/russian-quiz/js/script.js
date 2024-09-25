const russianSentences = [
  { "question": "pri-vyét", "answer": "Привет" },
  { "question": "kak tye-byá za-vút?", "answer": "Как тебя зовут?" },
  { "question": "spasibo", "answer": "Спасибо" }
];

const russianLetters = [
  { "question": "[a]", "answer": "Aa" },
  { "question": "[b]", "answer": "Бб" },
  { "question": "[v]", "answer": "Вв" },
  { "question": "[g]", "answer": "Гг" }
];

let currentWords = [];
let totalSpin = [];

function getLanguageFromPage() {
  const path = window.location.pathname; // Get the current page path
  const pageName = path.split('/').pop(); // Get the last part of the path (the file name)

  if (pageName.includes('sentences')) {
      return russianSentences;
  } else if (pageName.includes('letters')) {
      return russianLetters;
  }
  return null; // Return null if no language is found
}


function displayRandomWord() {
  if (totalSpin.length === currentWords.length) {
      totalSpin = []; // Reset if all words have been shown
  }

  let spin;
  do {
      spin = Math.floor(Math.random() * currentWords.length);
  } while (totalSpin.includes(spin));

  totalSpin.push(spin);
  const selectedWord = currentWords[spin];
  document.getElementById('randomizer').innerHTML = `${selectedWord.question}<br><span>${selectedWord.answer}</span>`;
}

function init() {
  currentWords = getLanguageFromPage();
  if (currentWords) {
      displayRandomWord(); // Display the first random word on load
  } else {
      console.error('Language not found for this page.');
  }
}

window.onload = init;

// Add button functionality
document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.innerText = 'Get New Word';
  button.onclick = displayRandomWord; // Set the button click event

  const randomizerDiv = document.getElementById('randomizer');
  randomizerDiv.parentNode.insertBefore(button, randomizerDiv); // Insert button before the div
});
