import React from "react";
<<<<<<< HEAD
import aboutImg from "../../assets/images/doc-01.png";
=======
import aboutImg from "../../assets/images/about.png";
>>>>>>> dba6e1c556385e28dde3f9ee7bc456e5bceb5c15
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between gap-[50px] lg:gap-[100px] xl:gap-0 flex-col lg:flex-row">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 hidden lg:block lg:order-1">
<<<<<<< HEAD
            <img src={aboutImg} className="w-[475px] rounded-xl" alt="About image" />
=======
            <img src={aboutImg} alt="About image" />
>>>>>>> dba6e1c556385e28dde3f9ee7bc456e5bceb5c15
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="About image" />
            </div>
          </div>
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Proud to be one of the best healthcare service
            </h2>
            <p className="text-para text-justify  mt-[30px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              quibusdam temporibus eius accusantium placeat possimus nobis dolor
              numquam sed nam labore ducimus harum quae, fugiat aut ipsa optio!
              Deleniti adipisci hic, debitis nam ipsum praesentium eum sint
              nihil architecto eos amet corporis vitae quasi atque in
              reprehenderit unde. Nihil, nisi!
            </p>
            <p className="text-para text-justify  mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, alias odit sint ullam expedita corrupti? Placeat earum dicta nobis accusamus. Cupiditate sequi officia quos laborum dicta, hic consectetur, neque laudantium quae obcaecati voluptates doloremque doloribus accusantium numquam voluptatem quas, porro nisi minima esse sint modi! Iusto beatae sint cumque voluptas commodi maxime odit culpa quos autem perferendis tenetur.
            </p>
            <Link to="/" className="btn inline-block">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
