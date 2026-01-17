import './WindowContent.css';

const SkillsContent = () => {
  const skills = {
    'Programming Languages': ['Python', 'C', 'Java', 'JavaScript/TypeScript', 'HTML5', 'R'],
    'Web Development': ['React', 'Flask', 'Vite', 'HTML5', 'CSS3'],
    'Machine Learning & AI': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'MLflow', 'SciPy', 'Pandas', 'NumPy'],
    'Data Visualization': ['Matplotlib', 'Plotly', 'Canva'],
    'Cloud & Deployment': ['Firebase', 'Vercel', 'Google Cloud', 'Netlify'],
    'Databases': ['MongoDB', 'MySQL', 'Firebase'],
    'Tools & Environment': ['Git', 'GitHub', 'GitLab', 'Anaconda', 'Notion', 'Linux'],
    'Specializations': ['Cybersecurity', 'Data Structures', 'Bayesian Estimation', 'API Integration'],
  };

  return (
    <div className="window-content-inner">
      <h2 className="content-title">$ cat skills.json</h2>
      <div className="content-section">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">
              <span className="prompt">&gt;</span> {category}:
            </h3>
            <div className="skill-items">
              {items.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="content-title">$ echo $SUPERPOWERS</h2>
      <div className="content-section">
        <p className="content-text">
          <span className="prompt">&gt;</span> 🚀 Building wild ideas from rocket-powered solutions to exam hall gadgets
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> 🤖 Mixing APIs like cocktails to create explosive (creative) results
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> 🛡️ Making terminals respect me through cybersecurity & Linux mastery
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> 🎯 Turning hackathon chaos into working code
        </p>
      </div>

      <h2 className="content-title">$ echo $LEARNING</h2>
      <div className="content-section">
        <p className="content-text">
          <span className="prompt">&gt;</span> Currently: Data structures, Bayesian estimation, and whatever the internet throws at me
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> Always adapting to new technologies and wild problem statements
        </p>
      </div>
    </div>
  );
};

export default SkillsContent;
