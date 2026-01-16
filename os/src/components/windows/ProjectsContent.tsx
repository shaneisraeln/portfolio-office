import './WindowContent.css';

const ProjectsContent = () => {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'Interactive 3D portfolio built with Three.js and React',
      tech: 'Three.js, React, TypeScript, WebGL',
      status: 'Live',
    },
    {
      name: 'Hackathon Project #1',
      description: 'Innovative solution developed during hackathon',
      tech: 'Python, TensorFlow, Flask',
      status: 'Completed',
    },
    {
      name: 'Hackathon Project #2',
      description: 'Award-winning project from recent hackathon',
      tech: 'Node.js, MongoDB, React',
      status: 'Completed',
    },
    {
      name: 'ML Research Project',
      description: 'Machine learning research and implementation',
      tech: 'Python, PyTorch, Scikit-learn',
      status: 'In Progress',
    },
  ];

  return (
    <div className="window-content-inner">
      <h2 className="content-title">$ ls -la ~/projects/</h2>
      <div className="content-section">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <span className="project-name">📦 {project.name}</span>
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
          <span className="prompt">&gt;</span> More projects coming soon...
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> Check my GitHub for latest work!
        </p>
      </div>
    </div>
  );
};

export default ProjectsContent;
