import React from "react";
import { formateDate } from "../../utils/formateDate";
import { Link } from "react-router-dom";
const DoctorAbout = ({
  fullName,
  about,
  experiences,
  qualifications,
  setTab,
}) => {
  return (
    <div className="mt-[50px]">
      {about ? (
        <div>
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            About of
            <span className="text-irisBlueColor font-bold text-[24px] leading-9">
              {fullName}
            </span>
          </h3>
          <p className="text_para">{about}</p>
        </div>
      ) : (
        <div className="flex p-4 text-yellow-800 bg-yellow-50 rounded-lg">
          <h2>
            To add your all the information,{" "}
            <Link
              href="#"
              className="text-primaryColor"
              onClick={() => setTab("profile")}
            >
              Click Here
            </Link>
          </h2>
        </div>
      )}

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        {qualifications?.length > 0 ? (
          <ul className="pt-4 md:p-5 md:pb-0">
            {qualifications?.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] last:mb-0"
              >
                <div>
                  <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                    {formateDate(item.startDate)} - {formateDate(item.endDate)}
                  </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor">
                    {item.degree}
                  </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  {item.university}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex p-4 text-yellow-800 bg-yellow-50 rounded-lg mt-2">
            <h2>
              To add your education,{" "}
              <Link
                href="#"
                className="text-primaryColor"
                onClick={() => setTab("profile")}
              >
                Click Here
              </Link>
            </h2>
          </div>
        )}
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        {experiences?.length > 0 ? (
          <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 md:pb-0">
            {experiences?.map((item, index) => (
              <li key={index} className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                  {formateDate(item.startDate)} - {formateDate(item.endDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {item.position}
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  {item.hospital}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex p-4 text-yellow-800 bg-yellow-50 rounded-lg mt-2">
            <h2>
              To add your experience,{" "}
              <Link
                href="#"
                className="text-primaryColor"
                onClick={() => setTab("profile")}
              >
                Click Here
              </Link>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAbout;
