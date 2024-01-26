import React from "react";
import { formateDate } from "../../utils/formateDate";
const DoctorAbout = () => {
  return (
    <div className="mt-[50px]">
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Imran Ahammed
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure magni
          corrupti aut quos facilis ea nobis reprehenderit, distinctio pariatur
          laudantium nulla esse, id nihil aliquid itaque aliquam tempore laborum
          ullam, suscipit recusandae eos inventore. Doloribus voluptate sapiente
          laboriosam sunt! Quo, ipsum rem quidem eaque ipsa error hic vel ut ea,
          perferendis mollitia incidunt officia?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5 md:pb-0">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] last:mb-0">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] last:mb-0">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("11-04-2010")} - {formateDate("09-13-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 md:pb-0">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>



        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
