import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Typewriter from "./components/Typewriter";
import Projects from "./components/Projects";

function App() {
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
    console.log(id);
    if (id && id == "About") {
      AboutNav.className = "text-white font-black text-3xl";
    } else if (id && id == "experience") {
      AboutNav.className =
        "text-white hover:text-orange-400 transition duration-200 ";
      ExpNav.className = "text-white font-black text-3xl";
    } else {
      ExpNav.className =
        "text-white hover:text-orange-400 transition duration-200";
    }
  };

  return (
    <div onMouseMove={lightUp} className=" bg-sky-950   text-white  ">
      <div className="glow from-white/5 via-white/5 to-white/5 blur-3xl w-96 h-96 rounded-full bg-gradient-to-t "></div>
      <div className="wrapper flex justify-center gap-x-28">
        <div className="info flex  pt-28 flex-col gap-y-2 fixed left-20 text-wrap  ">
          <h1 className=" text-4xl text-white font-bold underline decoration-orange-500">
            Shariq Gazdar
          </h1>
          <Typewriter text="Front-End Developer" speed={150} />

          <h3 className="text-orange-400 w-96">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </h3>

          <nav className="mt-6 flex flex-col">
            <a
              href="#About"
              className="text-white hover:text-orange-400 transition duration-200 "
              id="AboutNav"
            >
              About
            </a>
            <a
              href="#Experience"
              className="text-white hover:text-orange-400 transition duration-200"
              id="ExpNav"
            >
              Experience
            </a>
          </nav>
        </div>
        <div
          className="description w-96 text-wrap  mt-20 ml-96 z-10 "
          onMouseMove={updateNav}
        >
          <div className="intro" id="About">
            <p className="overflow-auto">
              <div>
                <h1 className="text-2xl font-bold ">Hey,</h1>I am
                <h1 className="text-xl font-medium inline m-1">
                  Shariq Gazdar
                </h1>
                , a front-end developer with a passion for creating
                <span className="text-lg font-semibold inline m-1 text-orange-400">
                  dynamic
                </span>{" "}
                and
                <span className="text-lg font-semibold inline m-1 text-orange-400">
                  responsive web experiences
                </span>
                . Since 2022, I’ve been dedicated to honing my skills and
                staying up-to-date with the latest
                <span className="text-lg font-semibold inline m-1 text-orange-400">
                  technologies
                </span>{" "}
              </div>
              and industry trends. Over the past year, I have gained valuable
              <span className="text-lg font-semibold inline m-1 text-orange-400">
                industry experience
              </span>
              , working on a variety of projects that have sharpened my
              expertise in building
              <span className="text-lg font-semibold inline m-1 text-orange-400">
                user-friendly
              </span>
              ,
              <span className="text-lg font-semibold inline m-1 text-orange-400">
                efficient
              </span>
              , and
              <span className="text-lg font-semibold inline m-1 text-orange-400">
                visually appealing applications
              </span>
              . My focus is always on delivering
              <span className="text-lg font-semibold inline m-1 text-orange-400">
                high-quality code
              </span>{" "}
              and bringing innovative ideas to life.
            </p>
          </div>
          <div className="experience mt-10  " id="experience">
            <div className="max-w-sm   text-white p-6 rounded-lg hover:bg-sky-900/50 ">
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-300">2024 — PRESENT</span>
                <a
                  href="https://trendcraftz.netlify.app/"
                  className="text-gray-400 text-sm  hover:text-orange-400"
                  target="_blank"
                >
                  Trendcraftz ↗
                </a>
              </div>
              <h2 className="text-xl font-semibold mb-1">
                Junior Front-End Developer
              </h2>
              <p className="text-gray-300 mb-4">
                Collaborate with teams to build and maintain key components of
                the user interface using React. Assist in implementing features
                across the product while working closely with developers,
                designers, and product managers to ensure efficient and
                accessible web experiences.
              </p>
              <div className="flex space-x-2">
                <span className="bg-orange-500 text-teal-100 px-3 py-1 rounded-full text-xs font-medium">
                  JavaScript
                </span>
                <span className="bg-orange-500 text-teal-100 px-3 py-1 rounded-full text-xs font-medium">
                  HTML
                </span>
                <span className="bg-orange-500 text-teal-100 px-3 py-1 rounded-full text-xs font-medium">
                  React
                </span>
                <span className="bg-orange-500 text-teal-100 px-3 py-1 rounded-full text-xs font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
          <div id="projects">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
