import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];
const quickLinks01 = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "About Us",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/",
    name: "Blog",
  },
];
const quickLinks02 = [
  {
    path: "/find-a-doctor",
    name: "Find a Doctor",
  },
  {
    path: "/",
    name: "Request an Appointment",
  },
  {
    path: "/",
    name: "Find a Location",
  },
  {
    path: "/",
    name: "Get a Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/",
    name: "Donate",
  },
  {
    path: "/contact",
    name: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 ">
              Copyright {year} &#169; All Rights Researved{" "}
            </p>

            <div className=" flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={Link.path}
                  key={index}
                  className="w-9 h-9 border bolder-solid border-[#181A1E] flex items-center justify-center rounded-full group hover:bg-primaryColor hover:border-none transition-all duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
            <ul>
              {quickLinks01.map((link, index)=>(
                <li key={index} className="mb-4"> <Link to={link.path} className="text-[16px] leading-7 font-normal text-textColor">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to</h2>
            <ul>
              {quickLinks02.map((link, index)=>(
                <li key={index} className="mb-4"> <Link to={link.path} className="text-[16px] leading-7 font-normal text-textColor">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
            <ul>
              {quickLinks03.map((link, index)=>(
                <li key={index} className="mb-4"> <Link to={link.path} className="text-[16px] leading-7 font-normal text-textColor">{link.name}</Link></li>
              ))}
            </ul>
          </div>



        </div>
      </div>
    </footer>
  );
};

export default Footer;
