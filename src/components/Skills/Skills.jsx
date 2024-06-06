import React from "react";
import styles from "./Skills.module.css";
import MotionCard from "./MotionCard";
import fashion from "../../assets/skills/fashion1.jpg";
import teaching from "../../assets/skills/teaching.jpg";
import art from "../../assets/skills/art.jpg";



const Skills = () => {
  return (
    <div className={`${styles.Skills} lg:px-32 lg:flex lg:flex-col justify-center lg:h-[100vh]`}>
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
          Skills
        </h1>
      </div>
      <div className="skills mt-4 flex flex-row gap-5 flex-wrap justify-center lg:w-[90%] m-auto">
        <MotionCard image={fashion} text={"Fashion"} />
        <MotionCard image={teaching} text={"Designing"}  />
        <MotionCard image={art} text={"Art"}  />
      </div>
    </div>
  );
};

export default Skills;

// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400
