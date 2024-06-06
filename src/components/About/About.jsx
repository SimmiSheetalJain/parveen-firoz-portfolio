import React from "react";
import styles from "./About.module.css";
import Ansari from "../../assets/about/ansari.jpg";
import { FaArrowRight } from "react-icons/fa";
import TextColorChange from "../TextColorChange";

const About = () => {
  return (
    <div className={`${styles.About} lg:px-32`}>
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px] lg:mb-14">
          About Me
        </h1>
      </div>
      <div className="container w-full h-[80vh] flex flex-col items-center gap-3  mt-5 mb-20 lg:flex-row lg:items-center lg:justify-between lg:mt-2">
        <div className="data w-full lg:w-[60%]">
          <p className="text-[18px] font-bold md:text-[30px] lg:text-[28px]">
            Education:
          </p>
          <div className="pg flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[16px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Diploma in Fashion Designing from Government Industrial Training
              Institute, Balkeshwar, Agra
            </p>
          </div>
          <div className="ug flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[16px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Bachelor of Computer Applications(BCA), Raja Balwant Singh
              College, Agra
            </p>
          </div>
          <div className="about">
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              I would like to give you a warm welcome on my portfolio.Here's all
              about me to know.
            </p>
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              I completed my schooling at Ram Swaroop Singhal Girls Inter
              College in Daresi, Agra, Where I was an active member of the
              student cabinet community, responsible for managing various
              college activities. During my adolescence, I developed a keen
              interest in art and fashion designing, continually honing my
              skills in these areas.
            </p>
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              In 2021, I graduated with a Bachelor of Computer Applications from
              Dr. Bhim Rao Ambedkar University (formerly Agra University). This
              academic background provided me with a solid foundation in
              technology.
            </p>
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              The COVID-19 lockdown offered me the opportunity to
              reflect on my career aspirations. Upon graduating, I decided to
              pursue my passion for fashion design.
            </p>
            <p className="text-[15px] text-justify mt-3 md:text-[23px] lg:text-[20px]">
              I subsequently completed a
              diploma in fashion designing and am currently self-employed in
              this field.I am now seeking part-time or full-time opportunities
              in art and design that will allow me to further develop my skills
              and showcase my talents.
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-[180px] md:w-[180px] lg:w-[290px] mt-5 rounded-xl"
            src={Ansari}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400
