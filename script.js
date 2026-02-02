// const questions = [
//   "Who loves you more: me or me? 😌",
//   "If we were in a movie, would it be comedy or romance? 🎬",
//   "What’s the cutest thing I do without realizing? 🥺",
//   "On a scale of 1 to 10, how lucky am I? 😎",
//   "Will you still love me when I steal your fries? 🍟",
// ];

// function unlock() {
//   const val = document.getElementById("secretInput").value.toLowerCase();
//   if (val.includes("loveyoudheeraj")) {
//     document.getElementById("lockScreen").style.display = "none";
//     document.getElementById("bgMusic").play().catch(() => {});
//   } else {
//     alert("Wrong 😜 Try again");
//   }
// }

let isFinished = false;

function unlock() {
  const input = document.getElementById("secretInput");
  const screen = document.getElementById("lockScreen");
  const msg = document.getElementById("lockMessage");

  const val = input.value.toLowerCase();

  if (val.includes("loveyoudheeraj")) {
    screen.style.display = "none";
    document.getElementById("bgMusic").play().catch(() => {});
    return;
  }

  // Wrong input animation
  screen.classList.add("shake");
  input.classList.add("error");

  msg.innerText = "Hehe 😜 Close… but only Tanisha knows the magic word 💖";
  msg.classList.add("show");

  createBrokenHearts();

  setTimeout(() => {
    screen.classList.remove("shake");
    input.classList.remove("error");
    msg.classList.remove("show");
    input.value = "";
  }, 1200);
}


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
  // Cute + Funny
  {
    q: "Who fell in love first? 😏",
    answers: [
      "Dheeraj (obviously)",
      "Dheeraj, but Tanisha noticed later 😌",
      "Let’s not expose him further"
    ]
  },
  {
    q: "Who gets cuter when angry?",
    answers: [
      "Tanisha 😡➡️😍",
      "Still Tanisha",
      "This question has one answer"
    ]
  },

  // Romantic
  {
    q: "What is Dheeraj’s favorite place in the world?",
    answers: [
      "Where Tanisha is ❤️",
      "Next to Tanisha",
      "Anywhere holding Tanisha’s hand"
    ]
  },
  {
    q: "What makes Tanisha special?",
    answers: [
      "Her smile",
      "Her heart",
      "Everything. No debate."
    ]
  },

  // Teasing
  {
    q: "Who overthinks more?",
    answers: [
      "Tanisha 😄",
      "Tanisha (but it’s cute)",
      "Still Tanisha, stop clicking"
    ]
  },
  {
    q: "Who says ‘I’m fine’ but isn’t?",
    answers: [
      "Tanisha 🙃",
      "Tanisha again",
      "We both know the truth"
    ]
  },

  // Us moments
  {
    q: "What are we best at together?",
    answers: [
      "Laughing at nothing",
      "Annoying each other",
      "Being unstoppable ❤️"
    ]
  },
  {
    q: "Our relationship in one word?",
    answers: [
      "Comfort",
      "Crazy",
      "Forever"
    ]
  },

  // Love confirmation (end strong)
  {
    q: "Will Tanisha choose Dheeraj again?",
    answers: [
      "Always ❤️",
      "Without thinking",
      "This is a silly question"
    ]
  },
  {
    q: "What is Dheeraj most grateful for?",
    answers: [
      "Tanisha",
      "Tanisha’s love",
      "Tanisha choosing him"
    ]
  }
];

let current = 0;

function loadQuestion() {
  if (isFinished) return;

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

let tapCount = 0;
let tapTimer = null;

function launchFireworks() {
  for (let i = 0; i < 40; i++) {
    const spark = document.createElement("div");
    spark.className = "firework";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 2000);
  }
}

function showFinalVerdict() {
  setTimeout(() => {
    document.getElementById("finalVerdict").style.display = "flex";
  }, 800);
}

function selectAnswer(btn) {
  if (isFinished) return;

  btn.classList.add("selected");
  createHearts();

  setTimeout(() => {
    // LAST QUESTION → END FLOW
    if (current === questions.length - 1) {
      isFinished = true;
      endScreen();
      return;
    }

    // NORMAL FLOW
    current++;
    loadQuestion();
  }, 1000);
}


// function selectAnswer(btn) {
//   btn.classList.add("selected");
//   createHearts();

//   tapCount++;
//   clearTimeout(tapTimer);

//   tapTimer = setTimeout(() => tapCount = 0, 800);

//   if (tapCount >= 5) {
//     showEasterEgg();
//     tapCount = 0;
//     return;
//   }

//   setTimeout(() => {
//     current = (current + 1) % questions.length;
//     loadQuestion();
//   }, 1200);
// }

function showEasterEgg() {
  document.getElementById("question-text").innerText =
    "Secret unlocked 😳 Who is insanely in love?";
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  ["Dheeraj 💖", "Dheeraj again", "Okay fine, BOTH 😍"].forEach(ans => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerText = ans;
    btn.onclick = () => endScreen();
    answersDiv.appendChild(btn);
  });
}

// function endScreen() {
//   document.getElementById("endScreen").style.display = "flex";
// }
function endScreen() {
  isFinished = true;

  document.getElementById("question-box").style.pointerEvents = "none";

  launchFireworks();
  showFinalVerdict();
}



function createHearts() {
  const emojis = ["❤️", "😂", "😍", "🥺", "😌", "💖"];
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    // heart.innerText = "❤️";
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}
function createBrokenHearts() {
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💔";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
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


