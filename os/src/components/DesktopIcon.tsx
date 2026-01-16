import { useState } from 'react';
import './DesktopIcon.css';

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
}

const DesktopIcon = ({ icon, label, onDoubleClick }: DesktopIconProps) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    setTimeout(() => setClicks(0), 300);
    
    if (clicks === 1) {
      onDoubleClick();
      setClicks(0);
    }
  };

  return (
    <div className="desktop-icon" onClick={handleClick}>
      <div className="icon-image">{icon}</div>
      <div className="icon-label">{label}</div>
    </div>
  );
};

export default DesktopIcon;
