import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";

import { NavLink, Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/about/About";
import ServiceList from "../components/services/ServiceList";

const Home = () => {
  return (
    <>
      {/*==============Hero Section Start============== */}
      <div className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/*==============Hero Content============== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healty, longer life.
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, nisi modi qui eligendi sit et architecto sed corrupti
                  ad obcaecati itaque libero soluta, inventore quo?
                </p>
                <button className="btn">Book an Appointment</button>
              </div>
              {/*==============Hero Counter============== */}
              <div className="hero_counter my-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="">
                  <h2 className="w-[36px] text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experince</p>
                </div>
                <div className="">
                  <h2 className="w-[36px] text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Loactions</p>
                </div>
                <div className="">
                  <h2 className="w-[36px] text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==============Hero Section End============== */}

      {/*==============Guide Section Start============== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medicle Services
            </h2>
            <p className="text_para text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 border-b md:border-r md:border-b-0 md:last:border-none lg:last:border-none">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center capitalize">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for everyone. Our health system offers
                  unmatched, expert healthcare fron the lab to clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 border-b md:border-r md:border-b-0 md:last:border-none lg:last:border-none">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center capitalize">
                  Find your Nearby Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for everyone. Our health system offers
                  unmatched, expert healthcare fron the lab to clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 border-b md:border-r md:border-b-0 md:last:border-none lg:last:border-none">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center capitalize">
                  Book appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World class care for everyone. Our health system offers
                  unmatched, expert healthcare fron the lab to clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============Guide Section End============== */}

      {/*==============About Section Start============== */}
      <About />
      {/*==============About Section End============== */}

      {/*==============Service Section Start============== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text_para text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

		  <ServiceList/>
        </div>
      </section>
      {/*==============Service Section End============== */}
    </>
  );
};

export default Home;
