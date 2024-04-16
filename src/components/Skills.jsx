import React from "react";
import c from '../assets/C.svg'
import cpp from '../assets/CPP.svg'
import java from '../assets/Java-Dark.svg'
import python from '../assets/Python-Dark.svg'
import html from '../assets/HTML.svg'
import css from '../assets/CSS.svg'
import tailwind from '../assets/TailwindCSS-Dark.svg'
import js from '../assets/JavaScript.svg'
import react1 from '../assets/React-Dark.svg'
import nodejs from '../assets/NodeJS-Dark.svg'
import expressjs from '../assets/ExpressJS-Dark.svg'
import mongodb from '../assets/MongoDB.svg'
import mysql from '../assets/MySQL-Dark.svg'

const Skills = () => {
 
  return (
    <section id="skills" className="py-10 bg-gray-800 w-full relative">
  <div className="mt-8 text-gray-100 text-center">
    <h3 className="text-4xl font-semibold">
      My <span className="text-cyan-600">Skills</span>
    </h3>
    <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
    <div className="flex items-center justify-center mt-12 mx-28 gap-12 flex-wrap">
      {/* Example images */}
      <img className="w-20 h-20 cursor-pointer" src={c} alt="C" />
      <img className="w-20 h-20 cursor-pointer" src={cpp} alt="C++" />
      <img className="w-20 h-20 cursor-pointer" src={java} alt="Java" />
      <img className="w-20 h-20 cursor-pointer" src={python} alt="Python" />
      <img className="w-20 h-20 cursor-pointer" src={html} alt="HTML" />
      <img className="w-20 h-20 cursor-pointer" src={css} alt="CSS" />
      <img className="w-20 h-20 cursor-pointer" src={tailwind} alt="Tailwind" />
      <img className="w-20 h-20 cursor-pointer" src={js} alt="JavaScript" />
      <img className="w-20 h-20 cursor-pointer" src={react1} alt="React" />
      <img className="w-20 h-20 cursor-pointer" src={nodejs} alt="Node.js" />
      <img className="w-20 h-20 cursor-pointer" src={expressjs} alt="Express.js" />
      <img className="w-20 h-20 cursor-pointer" src={mongodb} alt="MongoDB" />
      <img className="w-20 h-20 cursor-pointer" src={mysql} alt="MySQL" />
    </div>
  </div>
</section>

  );
};

export default Skills;