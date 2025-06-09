import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          key={index}
          className="py-10 hover:bg-sky-900/50 rounded-xl px-5"
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a className="flex items-center mb-4" href={item[3]} target="_blank">
            <img src={item[2]} alt="Spotify Profile" className="w-28 mr-4" />
            <h2 className="text-xl font-bold">{item[0]} ↗</h2>
          </a>
          <p className="text-gray-300 mb-4">{item[1]}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
