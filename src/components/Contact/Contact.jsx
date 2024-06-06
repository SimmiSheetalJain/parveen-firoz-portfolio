import React from "react";
import styles from "./Contact.module.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className={`${styles.Contact} lg:px-32 lg:flex lg:flex-col justify-start lg:justify-center lg:items-center lg:mx-14`}
    >
      <div className="flex flex-col mt-8 lg:mt-0">
        <div className={`${styles.title} text-3xl mb-5`}>
          <h1 className="font-bold text-[#03fcc6]">Get in touch</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-24 items-start">
          <div className="text-[24px] text-gray-300 text-justify md:w-[50%] lg:w-[40%]">
            If you've any opportunity that matches my skills and interest. You can reach out to me on any social media handle or you can drop me a mail.
          </div>

          <div>
            <p className="text-[24px] font-bold border-b-4 border-white pb-3">
              Social Media Handles
            </p>
            <div className="flex mt-5 gap-10 text-[30px]">
              <a
                href="https://www.instagram.com/rooz_fairy/"
                target="_blank"
              >
                <FaInstagramSquare className="hover:text-[#03fcc6]" />
              </a>
              <a href="https://www.instagram.com/rooz_fairy/" target="_blank">
                <FaTwitterSquare className="hover:text-[#03fcc6]" />
              </a>
              <a href="https://www.instagram.com/rooz_fairy/" target="_blank">
                <FaFacebookSquare className="hover:text-[#03fcc6]" />
              </a>
              <a href="https://www.instagram.com/rooz_fairy/" target="_blank">
                <FaYoutubeSquare className="hover:text-[#03fcc6]" />
              </a>
            </div>
          </div>
        </div>
        <a
          className="mt-10 object-fill w-fit"
          href="mailto:ansariparveen718@gmail.com"
        >
          <button className="bg-yellow-600 px-5 py-3 rounded-md text-[20px] font-bold hover:bg-yellow-500">
            Write Parveen
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
