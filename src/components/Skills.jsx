import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Skills() {
  const skills = [
    {
      skill: "Html",
      percentage: "100%",
    },
    {
      skill: "CSS",
      percentage: "95%",
    },
    {
      skill: "Tailwind CSS",
      percentage: "90%",
    },
    {
      skill: "JavaScript",
      percentage: "85%",
    },
    {
      skill: "React",
      percentage: "75%",
    },
    {
      skill: "Firebase",
      percentage: "50%",
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center mx-[15%] mt-[5%]">
      <h1 className="text-white text-3xl font-bold">Skills</h1>
      <div className="flex flex-row justify-between">
        {skills.map((skill, index) => (
          <div>
            <CircularProgressbar
              value={parseInt(skill.percentage)}
              text={`${skill.percentage}`}
              className="w-44"
              styles={{
                // Customize the root svg element
                root: {},
                path: {
                  // Path color
                  stroke: `rgba(249,115,22)`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  transformOrigin: "center center",
                },
                trail: {
                  // Trail color
                  stroke: "#d6d6d6",
                  strokeLinecap: "round",
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                text: {
                  fill: "#ffff",
                  fontSize: "16px",
                },
              }}
            />
            <h1 className="text-white">{skill.skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
