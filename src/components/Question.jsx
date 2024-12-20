import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import Button from "./custom/Button";
import React from "react";
import RadioButton from "./custom/RadioButton";
import { useAnswers } from "../context/AnswersContext";
import Checkbox from "./custom/Checkbox";

function Question({
  question,
  currentQuestionNo,
  setCurrentQuestionNo,
  questionCount,
}) {

  const { answers, setAnswers } = useAnswers();

  // update answers in array
  function updateAns(ind) {

    const updatedAns = answers.map((item) => ({
      ...item,
      selectedAnswer: item._id === question._id ? (ind + 1) : item.selectedAnswer,
    }));
    setAnswers(updatedAns);
  }
  function updateMultiSelect(ind) {
    const updatedAns = answers.map((item) => {
      if (item._id === question._id) {
        console.log(item.selectedAnswer);

        const currentAnswers = [...item.selectedAnswer]

        currentAnswers[ind] = currentAnswers[ind] === ind + 1 ? -1 : ind + 1;

        return { ...item, selectedAnswer: currentAnswers };
      }
      return item;
    });

    setAnswers(updatedAns);
  }


  return (
    <div className="p-5 glass-effect d-flex flex-column align-items-start justify-content-between user-select-none">
      <div className=" w-100 fs-3 border-bottom ">
        <span>Question : {question.question} </span>
      </div>

      <div>
        {question.options.map((e, ind) => (
          question.type === "singleSelect" ?
            <RadioButton
              name={"options"}
              label={e}
              id={e}
              htmlFor={e}
              value={e}
              onChange={(e) => updateAns(ind)}
              key={ind}
              checked={answers[currentQuestionNo].selectedAnswer === ind + 1}
            />
            :
            <Checkbox
              label={e}
              id={`checkbox-${ind}`}
              value={e}
              key={ind}
              checked={(answers[currentQuestionNo].selectedAnswer || []).includes(
                ind + 1
              )}
              onChange={() => updateMultiSelect(ind)}
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
          className={`bg-primary ${currentQuestionNo === questionCount - 1 && "disabled"
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
