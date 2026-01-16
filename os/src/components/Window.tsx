import { useRef } from 'react';
import Draggable from 'react-draggable';
import AboutContent from './windows/AboutContent';
import ProjectsContent from './windows/ProjectsContent';
import SkillsContent from './windows/SkillsContent';
import ContactContent from './windows/ContactContent';
import TerminalContent from './windows/TerminalContent';
import './Window.css';

interface WindowProps {
  id: string;
  title: string;
  content: string;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
}

const Window = ({ title, content, zIndex, onClose, onMinimize, onFocus }: WindowProps) => {
  const nodeRef = useRef(null);

  const renderContent = () => {
    switch (content) {
      case 'about':
        return <AboutContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'skills':
        return <SkillsContent />;
      case 'contact':
        return <ContactContent />;
      case 'terminal':
        return <TerminalContent />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-titlebar"
      bounds="parent"
      onStart={onFocus}
    >
      <div ref={nodeRef} className="window" style={{ zIndex }}>
        <div className="window-titlebar">
          <div className="window-title">{title}</div>
          <div className="window-controls">
            <button className="window-button" onClick={onMinimize}>
              _
            </button>
            <button className="window-button" onClick={onClose}>
              ×
            </button>
          </div>
        </div>
        <div className="window-content">{renderContent()}</div>
      </div>
    </Draggable>
  );
};

export default Window;
