import React from "react";
import styles from "./Work.module.css";
import sample from "../../assets/work/sample1.png"
import Card from "./Card";
import { FaStar } from "react-icons/fa";

const Work = () => {
  return (
    <div
      className={`${styles.Work} lg:px-32 lg:flex lg:flex-col justify-center `}
    >
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
          Dresses Designed by Me
        </h1>
      </div>
      <div className="coding mt-8 flex flex-col md:grid md:grid-cols-3 gap-7 lg:grid lg:grid-cols-4">
        <Card
          logo={sample}
        />
        <Card
          logo={sample}
        />
        <Card
          logo={sample}
        />
        <Card
          logo={sample}
        />
        <Card 
          logo={sample} 
        />
        <Card
          logo={sample}
        />
        <Card
          logo={sample}
        />
        <Card
          logo={sample}
        />
        <Card 
          logo={sample} 
        />
        <Card
          logo={sample}
        />
        <Card
          logo={sample}
        />
        <Card 
          logo={sample} 
        />
      </div>
    </div>
  );
};

export default Work;
