import "./styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="title split-text" data-split="chars">
          My <span className="do-h2">Skills</span>
        </h2>
        
        <div className="skills-grid">
          <div className="skills-card">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>C++</span>
              <span>HTML5/CSS3</span>
            </div>
          </div>
          
          <div className="skills-card">
            <h3>Frameworks/Libraries</h3>
            <div className="skill-tags">
              <span>React.js</span>
              <span>Next.js</span>
              <span>Node.js / Express</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>AI & ML</h3>
            <div className="skill-tags">
              <span>LangChain</span>
              <span>OpenAI API</span>
              <span>Pandas / NumPy</span>
              <span>PyTorch</span>
              <span>RAG</span>
            </div>
          </div>

          <div className="skills-card">
            <h3>Tools/Platform</h3>
            <div className="skill-tags">
              <span>Git & GitHub</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Firebase</span>
              <span>Docker</span>
              <span>Vercel / AWS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
