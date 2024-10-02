import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import Button from "./custom/Button";
import React from "react";

function Question({
  question,
  currentQuestionNo,
  setCurrentQuestionNo,
  questionCount,
}) {
  console.log("Question child component rendered");

  return (
    <div className="p-5 glass-effect d-flex flex-column align-items-start justify-content-between user-select-none">
      <div className=" w-100 fs-3 border-bottom ">
        <span>Question : {question.question} </span>
      </div>

      <div className="w-100">
        {question.options.map((e, i) => (
          <div className="d-flex gap-4 px-3 py-2" key={i}>
            <input type="radio" name="option-1" id="html" />
            <label className="fs-4 cursor" htmlFor="html">
              {e}
            </label>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center w-100 gap-5">
        <Button
          title={"Prev"}
          onClick={() => setCurrentQuestionNo(--currentQuestionNo)}
          className={`bg-primary ${currentQuestionNo === 0 && "disabled"}`}
          Icon={GrFormPreviousLink}
          iconPos="left"
          size={25}
        />
        <Button
          title={"Next"}
          onClick={() => setCurrentQuestionNo(++currentQuestionNo)}
          className={`bg-primary ${
            currentQuestionNo === questionCount - 1 && "disabled"
          }`}
          iconPos="right"
          Icon={GrFormNextLink}
          size={25}
        />
      </div>
    </div>
  );
}

export default Question;
