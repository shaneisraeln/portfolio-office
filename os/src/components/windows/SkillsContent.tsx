import './WindowContent.css';

const SkillsContent = () => {
  const skills = {
    'Programming Languages': ['Python', 'JavaScript/TypeScript', 'Java', 'C++', 'SQL'],
    'Web Development': ['React', 'Node.js', 'Express', 'HTML/CSS', 'REST APIs'],
    'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
    'Tools & Technologies': ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'],
    'Concepts': ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Agile'],
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

      <h2 className="content-title">$ echo $LEARNING</h2>
      <div className="content-section">
        <p className="content-text">
          <span className="prompt">&gt;</span> Currently exploring: Advanced ML techniques, Cloud Architecture, DevOps
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> Always learning and adapting to new technologies
        </p>
      </div>
    </div>
  );
};

export default SkillsContent;
