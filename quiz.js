const questions = [
  {
    question: "Яка ваша стать?",
    answers: [
      { text: "Чоловік", points: 100 },
      { text: "Жінка", points: 100 },
      { text: "Не хочу казати", points: 100 }
    ]
  },
  {
    question: "Який ваш ріст?",
    answers: [
      { text: "<160 см", points: 70 },
      { text: "160-180 см", points: 100 },
      { text: ">180 см", points: 110 }
    ]
  },
  {
    question: "Яким спортом займаєтесь?",
    answers: [
      { text: "Бокс", points: 120 },
      { text: "Шахи", points: 60 },
      { text: "Нічим", points: 40 }
    ]
  },
  // додавай інші питання сюди
];

let currentQuestionIndex = 0;
let totalPoints = 0;

const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionNumberEl.textContent = `Питання ${currentQuestionIndex + 1} з ${questions.length}`;
  questionTextEl.textContent = current.question;

  answersContainer.innerHTML = "";

  current.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer.text;
    btn.onclick = () => selectAnswer(answer.points);
    answersContainer.appendChild(btn);
  });
}

function selectAnswer(points) {
  totalPoints += points;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    window.location.href = `result.html?score=${totalPoints}`;
  }
}

loadQuestion();
