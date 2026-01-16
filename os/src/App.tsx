import { useState } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import BootScreen from './components/BootScreen';
import './App.css';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="os-container">
      {!booted ? (
        <BootScreen onBootComplete={() => setBooted(true)} />
      ) : (
        <>
          <Desktop />
          <Taskbar />
        </>
      )}
    </div>
  );
}

export default App;
