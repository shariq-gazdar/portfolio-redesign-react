import React, { useState, useEffect, useRef } from "react";
import Typewriter from "../components/Typewriter";
import Projects from "../components/Projects";
import Github from "../assets/github.svg";
import Fiverr from "../assets/fiverr.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Admin from "../assets/admin.png";
import { Link } from "react-router-dom";
import Skills from "../components/Skills";
function Home() {
  const stickyRef = useRef(null);
  const stopperRef = useRef(null);
  const [stickyTop, setStickyTop] = useState(0);
  const [stopPoint, setStopPoint] = useState(0);

  const [stuck, setStuck] = useState(false);
  const lightUp = (e) => {
    let glow = document.querySelector(".glow");
    glow.style.position = "fixed";
    glow.style.top = `${e.clientY - 150}px`;
    glow.style.left = `${e.clientX - 200}px`;
  };
  const updateNav = (e) => {
    let id = e.target.parentNode.parentNode.id;
    let AboutNav = document.querySelector("#AboutNav");
    let ExpNav = document.querySelector("#ExpNav");
    let ProjNav = document.querySelector("#ProjNav");
    console.log(id);
    if (id && id == "About") {
      AboutNav.className = "text-white font-black text-3xl";
    } else if (id && id == "experience") {
      AboutNav.className =
        "text-white hover:text-orange-400 transition duration-200 ";
      ExpNav.className = "text-white font-black text-3xl";
    } else if (id && id == "projects") {
      ProjNav.className = "text-white font-black text-3xl";
    } else {
      ExpNav.className =
        "text-white hover:text-orange-400 transition duration-200";
      ProjNav.className =
        "text-white hover:text-orange-400 transition duration-200";
      AboutNav.className =
        "text-white hover:text-orange-400 transition duration-200 ";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sticky = stickyRef.current;
      const stopper = stopperRef.current;
      if (!sticky || !stopper) return;

      const stickyHeight = sticky.offsetHeight;
      const stopperTop = stopper.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const buffer = 50;

      const stopAt = stopperTop - stickyHeight - buffer;

      if (scrollY >= stopAt) {
        setStickyTop(stopAt);
        setStuck(true);
      } else {
        setStuck(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        onMouseMove={lightUp}
        className="bg-sky-950 text-white flex justify-center relative"
      >
        <div className="glow hidden lg:block fixed w-96 h-96 rounded-full blur-3xl bg-gradient-to-t from-white/5 via-white/5 to-white/5 z-0"></div>

        <div className="wrapper flex flex-col lg:flex-row lg:justify-center gap-x-28 relative w-full">
          {/* Info Panel */}
          <div
            ref={stickyRef}
            className={`info flex flex-col gap-y-2 pt-28 text-wrap z-30 w-fit ${
              stuck ? "absolute left-[15%]" : "fixed top-0 left-[15%]"
            }`}
            style={stuck ? { top: `${stickyTop}px` } : {}}
          >
            <h1 className="text-4xl font-bold underline decoration-orange-500">
              Shariq Gazdar
            </h1>
            <Typewriter text="Front-End Developer" speed={150} />
            <h3 className="text-orange-400 w-96">
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </h3>

            <nav className="mt-6 flex-col hidden lg:flex">
              <a id="AboutNav" href="#About" className="nav-link">
                About
              </a>
              <a id="ExpNav" href="#Experience" className="nav-link">
                Experience
              </a>
              <a id="ProjNav" href="#Project" className="nav-link">
                Projects
              </a>
            </nav>

            <div className="socials flex gap-x-5 mt-5 lg:mt-24">
              <a
                href="https://www.instagram.com/shari_gazdar?igsh=MTRja2kxaTg0dXNyeA=="
                target="_blank"
              >
                <img src={Instagram} alt="Instagram" className="w-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/shariq-gazdar-7543462b3/"
                target="_blank"
              >
                <img src={Linkedin} alt="LinkedIn" className="w-10" />
              </a>
              <a href="https://github.com/shariq-gazdar" target="_blank">
                <img src={Github} alt="GitHub" className="w-10" />
              </a>
              <a href="https://www.fiverr.com/ksssrg" target="_blank">
                <img src={Fiverr} alt="Fiverr" className="w-10" />
              </a>
            </div>
          </div>

          {/* Description */}
          <div
            className="description w-96 mt-20 ml-5 lg:ml-96 z-10"
            onMouseMove={updateNav}
          >
            <div className="intro" id="About">
              <p>
                <h1 className="text-2xl font-bold">Hey,</h1>I am
                <h1 className="text-xl font-medium inline m-1">
                  Shariq Gazdar
                </h1>
                , a front-end developer with a passion for creating
                <span className="highlight">dynamic</span> and
                <span className="highlight">responsive web experiences</span>.
                Since 2022, I’ve been honing my skills and staying up-to-date
                with
                <span className="highlight">technologies</span>. Over the past
                year, I’ve gained
                <span className="highlight">industry experience</span>, building
                <span className="highlight">user-friendly</span>,
                <span className="highlight">efficient</span>, and
                <span className="highlight">
                  visually appealing applications
                </span>
                . My focus is always on writing
                <span className="highlight">high-quality code</span> and
                bringing innovative ideas to life.
              </p>
            </div>

            {/* Experience */}
            <div className="experience mt-10" id="Experience">
              <div className="max-w-sm text-white p-6 rounded-lg hover:bg-sky-900/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-300">2024 — 2025</span>
                  <a
                    href="https://trendcraftz.netlify.app/"
                    className="text-gray-400 text-sm hover:text-orange-400"
                    target="_blank"
                  >
                    Trendcraftz ↗
                  </a>
                </div>
                <h2 className="text-xl font-semibold mb-1">
                  Junior Front-End Developer
                </h2>
                <p className="text-gray-300 mb-4">
                  Collaborated with teams to build and maintain React
                  components, implemented features across the product, and
                  ensured accessible UX.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "HTML", "React", "Tailwind CSS"].map(
                    (skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Projects */}
            <div id="Project">
              <Projects />
            </div>
          </div>
        </div>

        {/* Admin Button */}
        <div
          id="admin"
          className="bg-white w-10 fixed right-10 bottom-10 rounded-full z-10"
          title="Admin"
        >
          <Link to="/admin">
            <img src={Admin} alt="admin" />
          </Link>
        </div>
      </div>

      {/* Stopper */}
      <div ref={stopperRef}>
        <Skills />
      </div>
    </>
  );
}

export default Home;
