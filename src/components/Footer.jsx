import React from "react";
import FooterLogo from "../../src/assets/food-logo.png";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className=" bg-gray-100 dark:bg-gray-950 ">
        <div className=" max-w-[1200px] mx-auto  ">
          <div className=" grid md:grid-cols-3 py-5">
            <div className=" py-8 px-4 ">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={FooterLogo} alt="Logo" className="max-w-[50px]" />
                FOODIE
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Possimus, voluptate.{" "}
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
              {/* Social Handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4 ">
                  <h1 className=" text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className=" flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="py-8 px-4 ">
                  <h1 className=" text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className=" flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              {/*  */}
              <div>
                <div className="py-8 px-4 ">
                  <h1 className=" text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className=" flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
