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
      '  help       - Show this help message',
      '  about      - About Shane Israel',
      '  skills     - List technical skills',
      '  projects   - Show projects',
      '  contact    - Contact information',
      '  gyon       - About the API idea generator project',
      '  clear      - Clear terminal',
      '  whoami     - Display current user',
      '  date       - Show current date and time',
    ],
    about: () => [
      'Shane Israel N',
      'Software Engineer | Machine Learning Engineer',
      '🚀 Builder of creative solutions and innovative projects',
      '🤖 API integration specialist and hackathon enthusiast',
      '🛡️ Linux tinkerer and problem solver',
    ],
    skills: () => [
      'Technical Skills:',
      '  Languages: Python, C, Java, JavaScript/TypeScript, R',
      '  Web: React, Flask, Vite, HTML5, Tailwind CSS',
      '  ML/AI: PyTorch, TensorFlow, Scikit-learn, Keras',
      '  Cloud: Firebase, Vercel, Google Cloud, Netlify',
      '  Tools: Git, Linux, Anaconda, GSAP, Framer Motion',
    ],
    projects: () => [
      'Featured Projects:',
      '  1. Gyon - API idea generator (hackathon project)',
      '  2. SDC Event Chithi - DSA challenge app vs Chitti Robot',
      '  3. Dawn Studio - Luxury photography portfolio template',
      '  4. Spotify Clone - Web-based music player',
      '  5. ShaneOS - This custom operating system!',
      '  6. Phone detection gadget for exam halls',
      '  Visit GitHub: github.com/shaneisraeln',
    ],
    contact: () => [
      'Contact Information:',
      '  Email: shaneisrael2006@gmail.com',
      '  GitHub: github.com/shaneisraeln',
      '  LinkedIn: linkedin.com/in/shane-israel',
      '  Instagram: @_shane__israel_lh44_',
      '  Status: Open to opportunities and collaborations',
    ],
    gyon: () => [
      '🚀 Gyon - API Idea Generator:',
      '  • Hackathon project that generates unique app ideas',
      '  • Randomly combines 3 APIs for creative inspiration',
      '  • Auto-scaffolds full-stack starter code (React + Node.js)',
      '  • Provides UI suggestions and downloadable projects',
      '  • Perfect example of creative problem solving',
      '',
      'Turning random API combinations into viable app concepts!',
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
