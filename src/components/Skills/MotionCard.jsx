import React from "react";
import { motion } from "framer-motion";

const MotionCard = ({ image, text}) => {
  return (
    <div>
      <motion.div
        className="container border-4 rounded-tl-3xl rounded-br-3xl md:border-[6px] border-[#03fcc6] w-fit p-2"
        whileHover={{ scale: 1, rotate: 90, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      >
        <img 
        className="rounded-tl-md rounded-br-md"
          src={image} 
          alt="Not Available" 
        />
      </motion.div>
      <p className={`text-[30px] font-mono text-[#44c0c7]`}>{text}</p>
    </div>
  );
};

export default MotionCard;
