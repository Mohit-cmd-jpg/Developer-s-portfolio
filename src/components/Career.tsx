import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science (Core)</h4>
                <h5>K.R. Mangalam University</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Current 3rd-year student with a CGPA of 8.7. Active member of the college tech club, participating in peer learning, workshops, and collaborative discussions on full-stack development and emerging AI technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Oracle Cloud Infrastructure Generative AI</h4>
                <h5>Oracle University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Certified Generative AI Professional. Learned to implement, integrate, and optimize large language models (LLMs) securely across enterprise cloud environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Applied Data Science with Python (Level 2)</h4>
                <h5>IBM</h5>
              </div>
              <h3>Certified</h3>
            </div>
            <p>
              Acquired applied data science skills, effectively visualizing and analyzing data to build and evaluate predictive models using standard Python libraries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
