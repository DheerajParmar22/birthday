// const questions = [
//   "Who loves you more: me or me? 😌",
//   "If we were in a movie, would it be comedy or romance? 🎬",
//   "What’s the cutest thing I do without realizing? 🥺",
//   "On a scale of 1 to 10, how lucky am I? 😎",
//   "Will you still love me when I steal your fries? 🍟",
// ];

const questions = [
  {
    q: "Who is the luckiest person alive?",
    answers: [
      "Dheeraj obviously 😌",
      "Dheeraj (no second option)",
      "Still Dheeraj ❤️",
    ],
  },
  {
    q: "Who loves Tanisha the most?",
    answers: [
      "Dheeraj 🥺",
      "Dheeraj (emotionally)",
      "Dheeraj (professionally 😎)",
    ],
  },
  {
    q: "Who is Tanisha thinking about right now?",
    answers: ["Dheeraj 😏", "Dheeraj again", "Why is this even a question?"],
  },
  {
    q: "Who is cutest when overthinking?",
    answers: ["Tanisha 😍", "Tanisha obviously", "Tanisha + 100 points"],
  },
  {
    q: "Will Tanisha stay with Dheeraj forever?",
    answers: ["Yes ❤️", "Obviously yes", "Scroll up. Still yes."],
  },
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question-text").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((ans) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.className = "answer-btn";
    btn.onclick = () => selectAnswer(btn);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(btn) {
  btn.classList.add("selected");

  createHearts();

  setTimeout(() => {
    current = (current + 1) % questions.length;
    loadQuestion();
  }, 1200);
}

function createHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

loadQuestion();

let index = 0;

function nextQuestion() {
  document.getElementById("question").innerText = questions[index];
  index = (index + 1) % questions.length;
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Show first question automatically
nextQuestion();
