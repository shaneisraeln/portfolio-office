import './WindowContent.css';

const AboutContent = () => {
  return (
    <div className="window-content-inner">
      <h2 className="content-title">$ whoami</h2>
      <div className="content-section">
        <p className="content-text">
          <span className="prompt">&gt;</span> Name: Shane Israel N
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> Role: Software Engineer | Machine Learning Engineer
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> Location: India
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> Status: Undergraduate Computer Science Student
        </p>
      </div>

      <h2 className="content-title">$ cat bio.txt</h2>
      <div className="content-section">
        <p className="content-text">
          I'm a passionate Software Engineer and Machine Learning Engineer with a strong focus on 
          Artificial Intelligence, Machine Learning, Data Structures & Algorithms, and building 
          real-world software systems.
        </p>
        <p className="content-text">
          Currently pursuing my undergraduate degree in Computer Science, I actively participate 
          in hackathons, build innovative projects, and continuously expand my technical expertise.
        </p>
        <p className="content-text">
          I'm seeking internships and full-time software engineering roles where I can contribute 
          to impactful projects and grow as a developer.
        </p>
      </div>

      <h2 className="content-title">$ ls interests/</h2>
      <div className="content-section">
        <p className="content-text">
          <span className="file">📁</span> Artificial Intelligence & Machine Learning<br />
          <span className="file">📁</span> Full-Stack Web Development<br />
          <span className="file">📁</span> Data Structures & Algorithms<br />
          <span className="file">📁</span> Hackathons & Competitive Programming<br />
          <span className="file">📁</span> Open Source Contributions
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
