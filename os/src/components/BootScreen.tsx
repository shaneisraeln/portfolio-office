import { useEffect, useState } from 'react';
import './BootScreen.css';

interface BootScreenProps {
  onBootComplete: () => void;
}

const BootScreen = ({ onBootComplete }: BootScreenProps) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const bootSequence = [
      'ShaneOS v1.0.0 Booting...',
      'Initializing kernel modules...',
      'Loading system drivers...',
      'Mounting file systems...',
      'Starting network services...',
      'Loading user profile: Shane Israel',
      'Initializing portfolio modules...',
      'Loading project database...',
      'System ready.',
      '',
      'Welcome to ShaneOS',
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(onBootComplete, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onBootComplete]);

  return (
    <div className="boot-screen">
      <div className="boot-content">
        {lines.map((line, i) => (
          <div key={i} className="boot-line">
            {line}
          </div>
        ))}
        <span className="cursor">_</span>
      </div>
    </div>
  );
};

export default BootScreen;
