import { useState } from 'react';
import Window from './Window';
import DesktopIcon from './DesktopIcon';
import './Desktop.css';

export interface WindowData {
  id: string;
  title: string;
  content: string;
  isMinimized: boolean;
  zIndex: number;
}

const Desktop = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [nextZIndex, setNextZIndex] = useState(100);

  const openWindow = (title: string, content: string) => {
    const id = `window-${Date.now()}`;
    setWindows((prev) => [
      ...prev,
      { id, title, content, isMinimized: false, zIndex: nextZIndex },
    ]);
    setNextZIndex((prev) => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
  };

  const restoreWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w
      )
    );
    setNextZIndex((prev) => prev + 1);
  };

  const bringToFront = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: nextZIndex } : w))
    );
    setNextZIndex((prev) => prev + 1);
  };

  return (
    <div className="desktop">
      <div className="desktop-icons">
        <DesktopIcon
          icon="📁"
          label="About Me"
          onDoubleClick={() => openWindow('About Me', 'about')}
        />
        <DesktopIcon
          icon="💼"
          label="Projects"
          onDoubleClick={() => openWindow('Projects', 'projects')}
        />
        <DesktopIcon
          icon="🛠️"
          label="Skills"
          onDoubleClick={() => openWindow('Skills', 'skills')}
        />
        <DesktopIcon
          icon="📧"
          label="Contact"
          onDoubleClick={() => openWindow('Contact', 'contact')}
        />
        <DesktopIcon
          icon="💻"
          label="Terminal"
          onDoubleClick={() => openWindow('Terminal', 'terminal')}
        />
      </div>

      {windows.map((window) =>
        !window.isMinimized ? (
          <Window
            key={window.id}
            {...window}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onFocus={() => bringToFront(window.id)}
          />
        ) : null
      )}
    </div>
  );
};

export default Desktop;
