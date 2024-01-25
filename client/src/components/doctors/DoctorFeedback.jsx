import React, { useState } from "react";
import reviewAvatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import DoctorFeedbackForm from "./DoctorFeedbackForm";
const DoctorFeedback = () => {
  const [showGiveFeedbackForm, setShowGiveFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="Text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All Reviews (275)
        </h4>
        <div className="mb-[30px] bg-[#e9f6ff] p-5 rounded-[15px] shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img src={reviewAvatar} alt="" className="w-full" />
              </figure>
              <div>
                <h5 className="lext-[16px] leading-6 text-primaryColor font-bold">
                  Ali Ahammed
                </h5>
                <p className="text-[14px] leading-5 text-textColor ">
                  {formateDate("10-09-2020")}
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              {[...Array(5).keys()].map((item, index) => (
                <AiFillStar key={index} className="text-primaryColor" />
              ))}{" "}
              4.8
            </div>
          </div>
          <p className="text_para mt-2 font-medium text-[16px] pl-[53px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            perferendis reprehenderit nisi deserunt autem soluta culpa quaerat
            veniam aliquid porro!
          </p>
        </div>
      </div>

      {!showGiveFeedbackForm && (
        <div className="">
          <button
            className="btn"
            onClick={() => setShowGiveFeedbackForm(!showGiveFeedbackForm)}
          >
            Give Feedback
          </button>
        </div>
      )}

      {showGiveFeedbackForm && <DoctorFeedbackForm />}
    </div>
  );
};

export default DoctorFeedback;
