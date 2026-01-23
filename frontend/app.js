/* ---------- LOGIN ---------- */
function login(e) {
  e.preventDefault();
  const name = document.getElementById("usernameInput").value.trim();
  if (!name) return;

  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function logout() {
  localStorage.clear();
  location.reload();
}

/* ---------- DONE STATE ---------- */
let completed = JSON.parse(localStorage.getItem("completed")) || [];

/* ---------- DATA ---------- */
const data = {
  Amazon: [
    { title: "Two Sum", desc: "Find indices of two numbers that add up to target.",
      cons: ["O(n) preferred"], src: "https://leetcode.com/problems/two-sum/",
      sol: "Use hashmap to store elements." },

    { title: "Merge Intervals", desc: "Merge overlapping intervals.",
      cons: ["Sorting required"], src: "https://leetcode.com/problems/merge-intervals/",
      sol: "Sort intervals and merge greedily." }
  ],

  Microsoft: [
    { title: "Detect Cycle in Linked List", desc: "Check if linked list has a cycle.",
      cons: ["No extra memory"], src: "https://leetcode.com/problems/linked-list-cycle/",
      sol: "Use slow and fast pointer technique." }
  ],

  Cisco: [
    { title: "Binary Search", desc: "Search element in sorted array.",
      cons: ["O(log n)"], src: "https://leetcode.com/problems/binary-search/",
      sol: "Classic binary search approach." }
  ],

  Adobe: [
    { title: "Longest Substring Without Repeating Characters",
      desc: "Find longest substring without repeats.",
      cons: ["Sliding window"], src: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      sol: "Use sliding window with set." }
  ],

  Uber: [
    { title: "Word Break", desc: "Check if string can be segmented.",
      cons: ["DP required"], src: "https://leetcode.com/problems/word-break/",
      sol: "Use DP with dictionary lookup." }
  ],

  Zepto: [
    { title: "Valid Parentheses", desc: "Check if parentheses are valid.",
      cons: ["Stack"], src: "https://leetcode.com/problems/valid-parentheses/",
      sol: "Use stack to match brackets." }
  ]
};

/* ---------- ELEMENTS ---------- */
const companyList = document.getElementById("companyList");
const questionList = document.getElementById("questionList");

const emptyState = document.getElementById("emptyState");
const card = document.getElementById("questionCard");

const qTitle = document.getElementById("questionTitle");
const qDesc = document.getElementById("questionDescription");
const constraintBox = document.getElementById("constraintBox");
const sourceLink = document.getElementById("sourceLink");

const doneToggle = document.getElementById("doneToggle");
const solutionBtn = document.getElementById("solutionBtn");
const solutionBox = document.getElementById("solutionBox");

let currentQuestion = null;
let currentLi = null;

/* ---------- LOAD COMPANIES ---------- */
Object.keys(data).forEach(company => {
  const li = document.createElement("li");
  li.textContent = company;
  li.onclick = () => loadQuestions(company);
  companyList.appendChild(li);
});

function loadQuestions(company) {
  questionList.innerHTML = "";
  card.classList.add("hidden");
  emptyState.classList.remove("hidden");

  data[company].forEach(q => {
    const li = document.createElement("li");
    li.textContent = completed.includes(q.title) ? q.title + " ✔" : q.title;
    li.onclick = () => loadQuestion(q, li);
    questionList.appendChild(li);
  });
}

/* ---------- LOAD QUESTION ---------- */
function loadQuestion(q, li) {
  currentQuestion = q;
  currentLi = li;

  emptyState.classList.add("hidden");
  card.classList.remove("hidden");

  qTitle.textContent = q.title;
  qDesc.textContent = q.desc;
  sourceLink.href = q.src;

  constraintBox.innerHTML = "";
  q.cons.forEach(c => {
    const el = document.createElement("li");
    el.textContent = c;
    constraintBox.appendChild(el);
  });

  doneToggle.checked = completed.includes(q.title);

  solutionBox.classList.add("hidden");
  solutionBox.textContent = "";
  solutionBtn.textContent = "Show Solution";
}

/* ---------- DONE / UNDONE ---------- */
doneToggle.onchange = () => {
  if (!currentQuestion) return;

  if (doneToggle.checked) {
    if (!completed.includes(currentQuestion.title)) {
      completed.push(currentQuestion.title);
      currentLi.textContent = currentQuestion.title + " ✔";
    }
  } else {
    completed = completed.filter(t => t !== currentQuestion.title);
    currentLi.textContent = currentQuestion.title;
  }

  localStorage.setItem("completed", JSON.stringify(completed));
};

/* ---------- SOLUTION TOGGLE ---------- */
solutionBtn.onclick = () => {
  if (!currentQuestion) return;

  if (solutionBox.classList.contains("hidden")) {
    solutionBox.textContent = currentQuestion.sol;
    solutionBox.classList.remove("hidden");
    solutionBtn.textContent = "Hide Solution";
  } else {
    solutionBox.classList.add("hidden");
    solutionBtn.textContent = "Show Solution";
  }
};
