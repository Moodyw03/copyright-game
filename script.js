// Game state variables
let currentLevel = 0;
let score = 0;

// Game levels data
const levels = [
  {
    question:
      "You want to use a famous song in your video project. What do you do?",
    choices: [
      { text: "Use it without permission.", isCorrect: false },
      { text: "Search for royalty-free alternatives.", isCorrect: true },
      {
        text: "Credit the artist in your video description.",
        isCorrect: false,
      },
    ],
    explanation:
      "Using music without permission is illegal. Crediting the artist doesn't allow you to use their music without permission. The best legal option is to use royalty-free music or obtain the necessary permissions.",
  },
  {
    question: "What does 'public domain' mean?",
    choices: [
      { text: "Content owned by the public.", isCorrect: false },
      {
        text: "Content you can use without permission or fees.",
        isCorrect: true,
      },
      { text: "Content available on public websites.", isCorrect: false },
    ],
    explanation:
      "Public domain refers to creative works to which no exclusive intellectual property rights apply. Those rights may have expired, been forfeited, expressly waived, or may be inapplicable.",
  },
  {
    question: "How can you legally use copyrighted material?",
    choices: [
      {
        text: "Use it freely as long as it's for educational purposes.",
        isCorrect: false,
      },
      { text: "Use a small part under fair use provisions.", isCorrect: true },
      { text: "Edit it to make it look different.", isCorrect: false },
    ],
    explanation:
      "Fair use provisions allow the use of copyrighted material without permission for purposes such as criticism, comment, news reporting, teaching, scholarship, or research.",
  },
  {
    question: "What is a copyright notice?",
    choices: [
      {
        text: "A form you must submit to copyright your work.",
        isCorrect: false,
      },
      {
        text: "A declaration of copyright ownership on the work itself.",
        isCorrect: true,
      },
      { text: "An official government document.", isCorrect: false },
    ],
    explanation:
      "A copyright notice is a statement placed on copyrighted work that shows the work is protected by copyright law. It usually includes the copyright symbol ©, the year of first publication, and the name of the copyright holder.",
  },
  {
    question: "What is the purpose of a trademark?",
    choices: [
      { text: "To protect ideas from being used by others.", isCorrect: false },
      {
        text: "To protect symbols, names, and slogans used to identify goods and services.",
        isCorrect: true,
      },
      {
        text: "To provide a government certification of quality.",
        isCorrect: false,
      },
    ],
    explanation:
      "Trademarks protect symbols, names, and slogans used to identify goods and services. They prevent others from using a similar mark that could cause confusion.",
  },
];

function displayLevel() {
  let level = levels[currentLevel];
  let questionElement = document.getElementById("question");
  let choicesElement = document.getElementById("choices");

  questionElement.textContent = level.question;
  choicesElement.innerHTML = "";

  level.choices.forEach(function (choice, index) {
    let button = document.createElement("button");
    button.textContent = choice.text;
    button.addEventListener("click", function () {
      handleChoice(index);
    });
    choicesElement.appendChild(button);
  });
}

function handleChoice(choiceIndex) {
  let choice = levels[currentLevel].choices[choiceIndex];
  if (choice.isCorrect) {
    score++;
    currentLevel++;
    if (currentLevel < levels.length) {
      updateScoreDisplay();
      displayLevel();
    } else {
      showGameCompleted();
    }
  } else {
    alert(levels[currentLevel].explanation);
  }
}

function updateScoreDisplay() {
  let scoreElement = document.getElementById("score");
  scoreElement.textContent = `Score: ${score}`;
}

function showGameCompleted() {
  alert(
    "Congratulations! You have completed the game with a score of " +
      score +
      "."
  );
  // Here you could offer the player to restart the game or display a final message
  // Reset game state if necessary
  score = 0; // Reset score
  currentLevel = 0; // Reset to the first level
  updateScoreDisplay();
  displayLevel(); // Restart game
}

// Initial game setup and start
window.onload = displayLevel;
