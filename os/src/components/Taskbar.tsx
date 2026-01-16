import { useState, useEffect } from 'react';
import './Taskbar.css';

const Taskbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="taskbar">
      <div className="taskbar-start">
        <div className="start-button">
          <span className="start-icon">⚡</span>
          <span>ShaneOS</span>
        </div>
      </div>
      <div className="taskbar-center">
        <div className="system-info">
          Shane Israel N - Software Engineer | ML Engineer
        </div>
      </div>
      <div className="taskbar-end">
        <div className="taskbar-clock">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
