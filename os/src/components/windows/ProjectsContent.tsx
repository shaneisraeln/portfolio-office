import './WindowContent.css';

const ProjectsContent = () => {
  const projects = [
    {
      name: 'Gyon - API Idea Generator',
      description: 'Hackathon project that generates unique app ideas by randomly combining three APIs and scaffolds full-stack starter code (React + Node.js/Express) with UI suggestions, ready for download',
      tech: 'React, Node.js, Express, API Integration, Code Generation',
      status: 'Completed',
    },
    {
      name: 'SDC Event Chithi - DSA Challenge',
      description: 'Full-stack DSA challenge web app where users solve progressive coding problems against "Chitti the Robot" with reactive UI and multi-language code execution',
      tech: 'React (Vite), Tailwind CSS, Framer Motion, Express, Node.js',
      status: 'Live',
    },
    {
      name: 'Dawn Studio - Photography Portfolio',
      description: 'Luxury photography portfolio website template with stunning animations and modern design for showcasing creative work',
      tech: 'Next.js, React, Tailwind CSS, GSAP, Frontend Libraries',
      status: 'Completed',
    },
    {
      name: 'Spotify Clone - Music Player',
      description: 'Web-based music player with Spotify-like interface for listing and playing local audio files, built with pure frontend technologies',
      tech: 'HTML5, CSS3, JavaScript, Audio APIs',
      status: 'Completed',
    },
    {
      name: 'ShaneOS Portfolio',
      description: 'Interactive 3D portfolio with custom retro operating system interface - this very website you\'re using!',
      tech: 'Three.js, React, TypeScript, WebGL, Vite',
      status: 'Live',
    },
    {
      name: 'Phone Detection Gadget',
      description: 'Hardware device to detect phones in exam halls for academic integrity enforcement',
      tech: 'Hardware Engineering, Signal Processing, Python',
      status: 'Prototype',
    },
  ];

  return (
    <div className="window-content-inner">
      <h2 className="content-title">$ ls -la ~/projects/</h2>
      <div className="content-section">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <span className="project-name">🚀 {project.name}</span>
              <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                [{project.status}]
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">
              <span className="prompt">&gt;</span> Tech Stack: {project.tech}
            </p>
          </div>
        ))}
      </div>

      <div className="content-section">
        <p className="content-text">
          <span className="prompt">&gt;</span> 🎯 Specializing in hackathon chaos and creative problem solving
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> 💥 From API cocktail mixing to robot battles - I build it all!
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> 🔗 Check GitHub for source code: github.com/shaneisraeln
        </p>
      </div>
    </div>
  );
};

export default ProjectsContent;
