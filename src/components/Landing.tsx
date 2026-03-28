import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MOHIT
              <br />
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Software Engineer</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Software Engineer</div>
            </h2>
          </div>
          <div className="landing-cta" style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
            <a href="#work" className="btn-primary" style={{ padding: '12px 30px', backgroundColor: 'var(--accentColor)', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, letterSpacing: '1px', transition: 'all 0.3s ease', border: '1px solid var(--accentColor)' }}>View Projects</a>
            <a href="/Mohit_Bindal_Resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '12px 30px', backgroundColor: 'transparent', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, letterSpacing: '1px', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.3)' }}>Download Resume</a>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
