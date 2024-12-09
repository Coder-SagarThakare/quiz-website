import React from "react";
import InterviewImg from "../images/interview.png";

const Interview = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <img src={InterviewImg} alt={InterviewImg}/>
        <h5>Not scheduled interview for now</h5>
        <h5>Keep Studying...</h5>
      </div>
    </div>
  );
};

export default Interview;
