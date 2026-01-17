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
          👋 Hey, I'm Shane Israel! I build wild ideas — from rocket-powered wildfire solutions 
          to gadgets that detect phones in exam halls.
        </p>
        <p className="content-text">
          🤖 AI tinkerer who mixes APIs like cocktails to see what explodes (creatively). 
          I've messed around with cybersecurity and Linux until the terminal finally respected me.
        </p>
        <p className="content-text">
          📚 Currently juggling data structures, Bayesian estimation, and whatever else the 
          internet throws at me. I occasionally teach people how to write job application 
          letters and pretend to be a responsible adult.
        </p>
        <p className="content-text">
          🎯 I love hackathons, crazy problem statements, and turning chaos into working code. 
          Always looking for the next wild idea to bring to life!
        </p>
      </div>

      <h2 className="content-title">$ ls interests/</h2>
      <div className="content-section">
        <p className="content-text">
          <span className="file">🚀</span> Wild hackathon projects & crazy ideas<br />
          <span className="file">🤖</span> AI/ML experimentation & API mixing<br />
          <span className="file">🛡️</span> Cybersecurity & Linux tinkering<br />
          <span className="file">📊</span> Data structures & Bayesian estimation<br />
          <span className="file">🎤</span> Teaching & mentoring others<br />
          <span className="file">💥</span> Turning chaos into working code
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
