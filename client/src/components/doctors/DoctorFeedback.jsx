import React, { useState } from "react";
import reviewAvatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import DoctorFeedbackForm from "./DoctorFeedbackForm";
const DoctorFeedback = ({ reviews, totalRating }) => {
  const [showGiveFeedbackForm, setShowGiveFeedbackForm] = useState(false);
  return (
    <div className="mt-[50px]">
      <div className="mb-[50px]">
        <h4 className="Text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All Reviews ({totalRating ? totalRating : 0})
        </h4>
        {reviews?.map((review, index) => {
          <div
            key={index}
            className="mb-[30px] bg-[#e9f6ff] p-5 rounded-[15px] shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full">
                  <img src={review?.user?.photo} alt="" className="w-full" />
                </figure>
                <div>
                  <h5 className="lext-[16px] leading-6 text-primaryColor font-bold">
                    {review?.user?.fullName}
                  </h5>
                  <p className="text-[14px] leading-5 text-textColor ">
                    {formateDate(review?.createdAt)}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                {[...Array(review?.rating).keys()].map((item, index) => (
                  <AiFillStar key={index} className="text-primaryColor" />
                ))}{" "}
                4.8
              </div>
            </div>
            <p className="text_para mt-2 font-medium text-[16px] pl-[53px]">
              {review?.reviewText}
            </p>
          </div>;
        })}
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
