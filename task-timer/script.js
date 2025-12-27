let defaultMinutes = 25;
let timeLeft = defaultMinutes * 60;
let timerInterval = null;
let sessionsCompleted = 0;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      sessionsCompleted++;
      document.getElementById("sessions").textContent = sessionsCompleted;
      alert("Session Complete!");
      timeLeft = defaultMinutes * 60;
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timeLeft = defaultMinutes * 60;
  updateDisplay();
}

function setCustomTime() {
  const input = document.getElementById("minutesInput").value;
  const minutes = parseInt(input);

  if (isNaN(minutes) || minutes < 1 || minutes > 60) {
    alert("Please enter a number between 1 and 60");
    return;
  }

  defaultMinutes = minutes;
  resetTimer();
}

updateDisplay();
