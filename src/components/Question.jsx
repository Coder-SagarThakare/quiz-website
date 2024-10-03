import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import Button from "./custom/Button";
import React from "react";
import RadioButton from "./custom/RadioButton";

function Question({
  question,
  currentQuestionNo,
  setCurrentQuestionNo,
  questionCount,
  answers,
  setAnswers,
}) {
  console.log("Question child component rendered");

  function updateAns(ans) {
    console.log(ans);
    const ans1 = answers.map((item) => ({
      ...item,
      selectedAnswer: item._id === question._id ? ans : item.selectedAnswer,
    }));
    setAnswers(ans1);
  }

  return (
    <div className="p-5 glass-effect d-flex flex-column align-items-start justify-content-between user-select-none">
      <div className=" w-100 fs-3 border-bottom ">
        <span>Question : {question.question} </span>
      </div>

      <div>
        {question.options.map((e, i) => (
          <RadioButton
            name={"options"}
            label={e}
            id={e}
            htmlFor={e} //selectedAnswer:prev._id == question._id? '1':"0"
            value={e}
            onChange={(e) => updateAns(e.target.value)}
            key={i}
          />
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
