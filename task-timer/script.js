(() => {
  // -----------------------------
  // State 
  // -----------------------------
  const state = {
    defaultMinutes: 25,
    timeLeft: 25 * 60,
    timerId: null,
    sessionsCompleted: 0
  };

  // -----------------------------
  // DOM references
  // -----------------------------
  const timerDisplay = document.getElementById("timer");
  const sessionsDisplay = document.getElementById("sessions");
  const minutesInput = document.getElementById("minutesInput");

  // -----------------------------
  // Utility functions
  // -----------------------------
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // -----------------------------
  // UI update functions
  // -----------------------------
  const updateDisplay = () => {
    timerDisplay.textContent = formatTime(state.timeLeft);
    sessionsDisplay.textContent = state.sessionsCompleted;
  };

  // -----------------------------
  // Timer logic
  // -----------------------------
  const startTimer = () => {
    if (state.timerId !== null) return; // guard clause

    state.timerId = setInterval(() => {
      state.timeLeft--;
      updateDisplay();

      if (state.timeLeft <= 0) {
        completeSession();
      }
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(state.timerId);
    state.timerId = null;
  };

  const resetTimer = () => {
    pauseTimer();
    state.timeLeft = state.defaultMinutes * 60;
    updateDisplay();
  };

  const completeSession = () => {
    pauseTimer();
    state.sessionsCompleted++;
    alert("Session Complete!");
    resetTimer();
  };

  // -----------------------------
  // Custom time handler
  // -----------------------------
  const setCustomTime = () => {
    const minutes = Number(minutesInput.value);

    if (!Number.isInteger(minutes) || minutes < 1 || minutes > 60) {
      alert("Please enter a number between 1 and 60");
      return;
    }

    state.defaultMinutes = minutes;
    resetTimer();
  };

  // -----------------------------
  // Expose functions to HTML
  // -----------------------------
  window.startTimer = startTimer;
  window.pauseTimer = pauseTimer;
  window.resetTimer = resetTimer;
  window.setCustomTime = setCustomTime;

  // Initial render
  updateDisplay();
})();
