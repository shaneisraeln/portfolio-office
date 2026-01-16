import { useState, useRef, useEffect } from 'react';
import './WindowContent.css';

const TerminalContent = () => {
  const [history, setHistory] = useState<string[]>([
    'ShaneOS Terminal v1.0.0',
    'Type "help" for available commands',
    '',
  ]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commands: { [key: string]: () => string[] } = {
    help: () => [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - About Shane Israel',
      '  skills   - List technical skills',
      '  projects - Show projects',
      '  contact  - Contact information',
      '  clear    - Clear terminal',
      '  whoami   - Display current user',
      '  date     - Show current date and time',
    ],
    about: () => [
      'Shane Israel N',
      'Software Engineer | Machine Learning Engineer',
      'Undergraduate CS Student | India',
      'Passionate about AI/ML and building impactful software',
    ],
    skills: () => [
      'Technical Skills:',
      '  Languages: Python, JavaScript/TypeScript, Java, C++',
      '  Web: React, Node.js, Express, HTML/CSS',
      '  ML/AI: TensorFlow, PyTorch, Scikit-learn',
      '  Tools: Git, Docker, AWS, MongoDB',
    ],
    projects: () => [
      'Recent Projects:',
      '  1. Interactive 3D Portfolio (Three.js, React)',
      '  2. Hackathon Projects (Various tech stacks)',
      '  3. ML Research Projects (Python, PyTorch)',
      '  Visit GitHub for more: github.com/shaneisraeln',
    ],
    contact: () => [
      'Contact Information:',
      '  Email: shaneisrael2006@gmail.com',
      '  GitHub: github.com/shaneisraeln',
      '  LinkedIn: linkedin.com/in/shane-israel',
      '  Instagram: @_shane__israel_lh44_',
    ],
    whoami: () => ['shane'],
    date: () => [new Date().toString()],
    clear: () => {
      setHistory(['ShaneOS Terminal v1.0.0', 'Type "help" for available commands', '']);
      return [];
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const output = commands[trimmedCmd]
      ? commands[trimmedCmd]()
      : [`Command not found: ${cmd}`, 'Type "help" for available commands'];

    if (trimmedCmd !== 'clear') {
      setHistory((prev) => [...prev, `$ ${cmd}`, ...output, '']);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="terminal-content" ref={terminalRef}>
      <div className="terminal-history">
        {history.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="terminal-input-form">
        <span className="terminal-prompt">$ </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="terminal-input"
          autoFocus
        />
      </form>
    </div>
  );
};

export default TerminalContent;
