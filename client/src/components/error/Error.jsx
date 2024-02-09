import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div className="flex items-center flex-col justify-center w-full h-full">
      <h3 className="text-headingColor text-[20px] font-semibold capitalize ">
        {errorMessage}
      </h3>

      <button
        className="btn mt-4 py-3"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
