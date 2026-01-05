import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PremiumMovieCard({ title }) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRunning || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startCountdown = () => setIsRunning(true);

  const resetCountdown = () => {
    setIsRunning(false);
    setTimeLeft(10);
  };

  const watchNow = () => {
    navigate(`/play/${encodeURIComponent(title)}`);
  };

  return (
    <div
      style={{
        background: "#1f2937",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "15px",
        color: "white"
      }}
    >
      <h3>{title}</h3>

      {timeLeft > 0 ? (
        <>
          <p>Countdown: {timeLeft}</p>

          <button onClick={startCountdown} disabled={isRunning}>
            Start Countdown
          </button>

          <button
            onClick={resetCountdown}
            style={{ marginLeft: "10px" }}
          >
            Reset
          </button>
        </>
      ) : (
        <button onClick={watchNow}>▶ Watch Now</button>
      )}
    </div>
  );
}

export default PremiumMovieCard;
