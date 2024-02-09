import React from "react";
import starIcon from "../../assets/images/star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const DoctorCard = ({ doctor }) => {
  const {
    _id,
    fullName,
    specialization,
    qualifications,
    averageRating,
    totalRating,
    photo,
    totalPatients,
    experiences,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div className="">
        <img src={photo} alt="" className="w-full" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[24px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {fullName}
      </h2>
      <p className="text-[14px] leading-6 font-[400] text-textColor">
        {qualifications?.map((item, index) => (
          <span key={index}>{item.degree}, </span>
        ))}
      </p>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-2 lg:py-1 lg:px-6 text-[12px] leading-4 lg:text-[14px] lg:leading-7 font-semibold rounded capitalize">
          {specialization}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <img src={starIcon} alt="" /> {averageRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[18px] lg:mt-5">
        <div>
          {totalPatients && (
            <h3 className="text-[16px] leading-7 lg:text-[16px] lg:leading-[30px] font-semibold text-headingColor">
              {totalPatients}+ Patients
            </h3>
          )}
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            {experiences && experiences[0]?.hospital}
          </p>
        </div>

        <Link
          to={`/doctors/${_id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
