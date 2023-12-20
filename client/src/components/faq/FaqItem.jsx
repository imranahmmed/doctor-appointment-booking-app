import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const FaqItem = ({ item }) => {
  const { question, answer } = item;
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="p-3 lg:p-5 rounded border border-solid border-[#d9dce2] mb-5 cursor-pointer"
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between gap-5">
        <h4 className="text-[14px] leading-7 lg:text-[18px] lg:leading-7 text-headingColor">
          {question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white border-none"
          }w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141f2115] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="pt-4 border-t mt-4">
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
