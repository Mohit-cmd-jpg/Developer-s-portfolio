import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (!box || box.length === 0) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;    
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;  
    
    // Fallback if the items fit on the screen without scrolling
    if (translateX < 0) {
      translateX = 0;
    }
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${Math.max(translateX, 500)}`, // Ensure minimum scroll distance so pin spacer is created properly
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  if (translateX > 0) {
    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });
  }
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  const projects = [
    {
      title: "SecureShare",
      category: "MERN + Web3",
      tools: "React, Express, MongoDB, Ethereum, IPFS (Pinata)",
      desc: "Secure file sharing platform utilizing IPFS storage and blockchain verification with JWT authentication.",
      link: "https://secure-file-sharing-nu.vercel.app/login"
    },
    {
      title: "University Placement System",
      category: "Full Stack Web",
      tools: "JavaScript, React, Node.js, MongoDB",
      desc: "A centralized digital placement portal to manage student data, track eligibility, and schedule interviews.",
      link: "https://github.com/Mohit-cmd-jpg/University-Placement-Management-System"
    },
    {
      title: "ChaiBuddy",
      category: "AI Chat Assistant",
      tools: "JavaScript, Flask, Google Generative AI",
      desc: "AI-powered chat assistant built using Flask backend and Google Gemini LLM API.",
      link: "https://github.com/Mohit-cmd-jpg/ChaiBuddy"
    },
    {
      title: "HRMS Lite",
      category: "Frontend & BaaS",
      tools: "Next.js, Supabase",
      desc: "Minimal, production-ready Human Resource Management System for managing employee records and attendance.",
      link: "https://github.com/Mohit-cmd-jpg/hrms-lite"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#ccc' }}>{project.desc}</p>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" style={{display: 'block', height: '100%', width: '100%'}}>
                 <WorkImage image="/images/placeholder.webp" alt={project.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
