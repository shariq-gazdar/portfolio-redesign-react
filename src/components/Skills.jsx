import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Skills() {
  const skills= [
    {
      skill: "Html",
      percentage:"100%"
    }
  ]
  return (
    <div className="h-full flex flex-col justify-center mx-[15%] mt-[5%]">
      <h1 className="text-white text-3xl font-bold">Skills</h1>
    {skills.map((skill , index)=>(
        <div>
          <CircularProgressbar value={sill} text={`${percentage}%`} />;
        </div>
    ))}
    </div>
  );
}

export default Skills;
