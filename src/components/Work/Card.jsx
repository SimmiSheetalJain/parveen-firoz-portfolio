import React from "react";
import { CiShare1 } from "react-icons/ci";

const Card = ({ logo}) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="Card flex flex-col justify-center  shadow-sm shadow-blue-200 transform hover:translate-y-3 hover:duration-200 p-5 bg-blue-950 gap-5">
        <div className="icons flex justify-between">
          <img className="w-70 h-70" src={logo} alt="" />
        </div>
        <button className="text-[20px] font-bold bg-[#DAA520] px-10 text-center rounded-md md:text-[16px]">Quick View</button>
      </div>
    </div>
  );
};

export default Card;
