import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const lightUp = (e) => {
    let glow = document.querySelector(".glow");
    glow.style.position = "absolute";
    glow.style.top = `${e.clientY - 150}px`;
    glow.style.left = `${e.clientX - 200}px`;
    console.log(e);
  };
  return (
    <div onMouseMove={lightUp} className="bg-slate-800 h-svh">
      <div className="glow bg-white/5 blur-xl w-96 h-96 rounded-full "></div>
      <div className="wrapper flex justify-center">
        <div className="info flex items-center pt-12 flex-col ">
          <h1 className=" text-4xl text-white font-semibold">Shariq Gazdar</h1>
          <h2>Front-End Developer</h2>
          <h3>
            I build pixel-perfect, engaging, and accessible digital experiences.
          </h3>
        </div>
        <div className="description w-60 text-wrap overflow-auto h-96 mt-12">
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio. My main focus these days
            is building accessible user interfaces for our customers at Klaviyo.
            I most enjoy building software in the sweet spot where design and
            engineering meet — things that look good but are also built well
            under the hood. In my free time, I've also released an online video
            course that covers everything you need to know to build a web app
            with the Spotify API. When I’m not at the computer, I’m usually rock
            climbing, reading, hanging out with my wife and two cats, or running
            around Hyrule searching for Korok seeds K o r o k s e e d s .
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
