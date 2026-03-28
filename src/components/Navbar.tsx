import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { HiMenuAlt4, HiX } from "react-icons/hi";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".nav-links a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Mohit Bindal
        </a>
        <a
          href="mailto:mohitbindal106@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          mohitbindal106@gmail.com
        </a>
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} data-cursor="disable">
          {menuOpen ? <HiX size={28} /> : <HiMenuAlt4 size={28} />}
        </div>
        
        <div className={`side-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a data-href="#landingDiv" href="#landingDiv" onClick={() => setMenuOpen(false)}>
                <HoverLinks text="HOME" />
              </a>
            </li>
            <li>
              <a data-href="#about" href="#about" onClick={() => setMenuOpen(false)}>
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#whatido" href="#whatido" onClick={() => setMenuOpen(false)}>
                <HoverLinks text="WHAT I DO" />
              </a>
            </li>
            <li>
              <a data-href="#education" href="#education" onClick={() => setMenuOpen(false)}>
                <HoverLinks text="EDUCATION" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work" onClick={() => setMenuOpen(false)}>
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact" onClick={() => setMenuOpen(false)}>
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
