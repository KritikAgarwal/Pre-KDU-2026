// -----------------------------
// Variables (State)
// -----------------------------
let defaultMinutes = 25;
let timeLeft = defaultMinutes * 60;
let timerId = null;
let sessionsCompleted = 0;

// -----------------------------
// DOM Elements
// -----------------------------
const timerDisplay = document.getElementById("timer");
const sessionsDisplay = document.getElementById("sessions");
const minutesInput = document.getElementById("minutesInput");

// -----------------------------
// Helper Functions
// -----------------------------
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;

  if (secs < 10) {
    secs = "0" + secs;
  }

  return minutes + ":" + secs;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
  sessionsDisplay.textContent = sessionsCompleted;
}

// -----------------------------
// Timer Functions
// -----------------------------
function startTimer() {
  if (timerId !== null) return;

  timerId = setInterval(function () {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      completeSession();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = defaultMinutes * 60;
  updateDisplay();
}

function completeSession() {
  pauseTimer();
  sessionsCompleted++;
  alert("Session Complete!");
  resetTimer();
}

// -----------------------------
// Custom Time
// -----------------------------
function setCustomTime() {
  let minutes = Number(minutesInput.value);

  if (minutes < 1 || minutes > 60 || isNaN(minutes)) {
    alert("Enter a number between 1 and 60");
    return;
  }

  defaultMinutes = minutes;
  resetTimer();
}

// -----------------------------
// Initial Load
// -----------------------------
updateDisplay();
