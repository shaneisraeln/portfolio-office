import './WindowContent.css';

const ContactContent = () => {
  return (
    <div className="window-content-inner">
      <h2 className="content-title">$ cat contact.txt</h2>
      <div className="content-section">
        <p className="content-text">
          <span className="prompt">&gt;</span> Let's connect! Feel free to reach out through any of these channels:
        </p>
      </div>

      <div className="content-section">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <div>
            <div className="contact-label">Email</div>
            <a href="mailto:shaneisrael2006@gmail.com" className="contact-link">
              shaneisrael2006@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span className="contact-icon">🐙</span>
          <div>
            <div className="contact-label">GitHub</div>
            <a href="https://github.com/shaneisraeln" target="_blank" rel="noopener noreferrer" className="contact-link">
              github.com/shaneisraeln
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <div>
            <div className="contact-label">LinkedIn</div>
            <a href="https://www.linkedin.com/in/shane-israel/" target="_blank" rel="noopener noreferrer" className="contact-link">
              linkedin.com/in/shane-israel
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span className="contact-icon">📸</span>
          <div>
            <div className="contact-label">Instagram</div>
            <a href="https://www.instagram.com/_shane__israel_lh44_/" target="_blank" rel="noopener noreferrer" className="contact-link">
              @_shane__israel_lh44_
            </a>
          </div>
        </div>
      </div>

      <div className="content-section">
        <p className="content-text">
          <span className="prompt">&gt;</span> Open to: Internships, Full-time roles, Collaborations, Hackathons
        </p>
        <p className="content-text">
          <span className="prompt">&gt;</span> Response time: Usually within 24 hours
        </p>
      </div>
    </div>
  );
};

export default ContactContent;
