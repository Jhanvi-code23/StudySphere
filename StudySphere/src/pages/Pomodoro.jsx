import { useEffect, useState } from "react";

function Pomodoro({ onClose }) {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatTime = (value) => {
    return String(value).padStart(2, "0");
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(25 * 60);
  };

  return (
    <div className="pomodoro-widget">

      <div className="pomodoro-header">
        <div>
          <span className="pomodoro-label">FOCUS TIMER</span>
          <h3>Pomodoro</h3>
        </div>

        <button
          className="pomodoro-close"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <div className="pomodoro-time">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>

      <div className="pomodoro-controls">

        {!isRunning ? (
          <button
            className="pomodoro-start"
            onClick={() => setIsRunning(true)}
          >
            Start
          </button>
        ) : (
          <button
            className="pomodoro-start"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
        )}

        <button
          className="pomodoro-reset"
          onClick={handleReset}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default Pomodoro;