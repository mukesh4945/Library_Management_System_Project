import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1>About Me</h1>
        <p className="subtitle">
          Building modern learning experiences with technology
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>👨‍💻 Who I Am</h3>
            <p>
              I am a passionate developer focused on building scalable,
              user-friendly Learning Management Systems using modern web
              technologies.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 What I Do</h3>
            <p>
              I design and develop full-stack LMS platforms with secure
              authentication, dashboards, and role-based access.
            </p>
          </div>

          <div className="about-card">
            <h3>🎯 My Goal</h3>
            <p>
              To create high-quality digital learning solutions that are fast,
              beautiful, and accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
