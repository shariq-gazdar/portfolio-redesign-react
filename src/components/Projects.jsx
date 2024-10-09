import React, { useEffect, useState } from "react";

function Projects() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    let api = import.meta.env.VITE_API;
    fetch(api).then((response) => {
      response.json().then((data) => {
        console.log(data.values);
        setValue(data.values);
      });
    });
  };

  return (
    <div>
      {value.map((item, index) => (
        <div key={index} className="py-10 hover:bg-sky-900/50 rounded-xl px-5">
          <a className="flex items-center mb-4" href={item[3]} target="_blank">
            <img src={item[2]} alt="Spotify Profile" className="w-28 mr-4" />
            <h2 className="text-xl font-bold">{item[0]} ↗</h2>
          </a>
          <p className="text-gray-300 mb-4">{item[1]}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
